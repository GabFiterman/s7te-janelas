import { DropdownMenu } from './components';

import { ArrowDropdown } from '@/assets';

import useAppControllerWidget from './use-app-controller-widget';
import './app-controller-widget.scss';

export interface DropdownItem {
  disabled: boolean;
  iconSrc?: string;
  label: string;
  shortcut?: string | null;
  value: string;
}

export type SeparatorItem = {
  value: 'separator';
};

export interface ControllerItem {
  disabled: boolean;
  dropdown: boolean;
  label: string;
  shortcut?: string | null;
  value: string;
  dropDownItems?: (DropdownItem | SeparatorItem)[];
}

export interface ActionItem {
  disabled: boolean;
  dropdown: boolean;
  iconSrc: string;
  label: string;
  value: string;
  dropDownItems?: (DropdownItem | SeparatorItem)[];
}

export interface AppControllerWidgetProps {
  actionItems?: ActionItem[];
  controllerItems?: ControllerItem[];
  controllerStyle?: 'default' | 'compact';
  onClickControllerDropdownItem?: (event: React.MouseEvent<HTMLDivElement>, item: DropdownItem) => void;
  onClickControllerItem?: (event: React.MouseEvent<HTMLButtonElement>, item: ControllerItem) => void;
}

function AppControllerWidget({
  actionItems = [],
  controllerItems = [],
  controllerStyle = 'default',
  onClickControllerItem,
  onClickControllerDropdownItem,
}: AppControllerWidgetProps) {
  const { handleDropdownItemClick, handleItemClick, handleItemMouseEnter, menuRef, openDropdownValue } =
    useAppControllerWidget({
      controllerItems,
      onClickControllerDropdownItem,
      onClickControllerItem,
    });
  return (
    <div className={`app-controller-widget-container ${controllerStyle}`} ref={menuRef}>
      <div className="controller-list">
        {controllerItems &&
          controllerItems.map((item) => {
            const isOpen = item.value === openDropdownValue;
            return (
              <button
                key={item.value}
                type="button"
                className={`controller-list-item ${isOpen ? 'active' : ''} ${item.disabled ? 'disabled' : ''}`}
                onMouseDown={(event) => handleItemClick(event, item)}
                onMouseEnter={() => handleItemMouseEnter(item)}
              >
                {item.label}
                {item?.dropdown && controllerStyle === 'default' && (
                  <span>
                    <ArrowDropdown size={18} />
                  </span>
                )}
                {isOpen && item.dropDownItems && (
                  <DropdownMenu
                    items={item.dropDownItems}
                    onDropdownItemClick={(event, dropItem) => handleDropdownItemClick(event, dropItem)}
                    controllerStyle={controllerStyle}
                  />
                )}
              </button>
            );
          })}
      </div>
      <div className="controller-actions">
        {actionItems &&
          actionItems.map((item) => (
            <div key={item.value} className={`controller-action-item ${item.disabled ? 'disabled' : ''}`}>
              <img src={item.iconSrc} alt={item.label} />
              <span>{item.dropdown && <ArrowDropdown size={18} />}</span>
            </div>
          ))}
      </div>
    </div>
  );
}

export default AppControllerWidget;
