import { type DropdownItem, type SeparatorItem, type AppControllerWidgetProps } from '../../app-controller-widget';
import { generateUUID } from '@/utils';

interface DropdownMenuProps {
  controllerStyle?: AppControllerWidgetProps['controllerStyle'];
  items: (DropdownItem | SeparatorItem)[];
  onDropdownItemClick?: (event: React.MouseEvent<HTMLDivElement>, dropItem: DropdownItem) => void;
}

function DropdownMenu({ controllerStyle, items, onDropdownItemClick }: DropdownMenuProps) {
  return (
    <div className={`dropdown-menu ${controllerStyle}`}>
      <div className="vertical-line" />
      {items.map((item, index) => {
        if (item.value === 'separator') {
          return <div key={`sep-${index}`} className="dropdown-separator" />;
        }

        const dropItem = item as DropdownItem;

        return (
          <div
            key={dropItem.value + '-' + generateUUID()}
            className={`dropdown-item ${dropItem.disabled ? 'disabled' : ''}`}
            aria-disabled={dropItem.disabled}
            onMouseDown={(event) => onDropdownItemClick && onDropdownItemClick(event, dropItem)}
          >
            <div className="dropdown-icon-container">
              {dropItem.iconSrc && <img className="dropdown-icon" src={dropItem.iconSrc} alt={dropItem.label} />}
            </div>
            <span className="dropdown-label">{dropItem.label}</span>
            {dropItem.shortcut && <span className="dropdown-shortcut">{dropItem.shortcut}</span>}
          </div>
        );
      })}
    </div>
  );
}

export default DropdownMenu;
