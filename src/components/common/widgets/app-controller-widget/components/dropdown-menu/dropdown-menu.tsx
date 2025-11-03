import { type DropdownItem, type SeparatorItem, type AppControllerWidgetProps } from '../../app-controller-widget';

interface DropdownMenuProps {
  controllerStyle?: AppControllerWidgetProps['controllerStyle'];
  items: (DropdownItem | SeparatorItem)[];
  onDropdownItemClick?: (event: React.MouseEvent<HTMLDivElement>, dropItem: DropdownItem) => void;
}

function DropdownMenu({ controllerStyle, items, onDropdownItemClick }: DropdownMenuProps) {
  return (
    <div className={`dropdown-menu ${controllerStyle}`}>
      {items.map((item, index) => {
        if (item.value === 'separator') {
          return <div key={`sep-${index}`} className="dropdown-separator" />;
        }

        const dropItem = item as DropdownItem;

        return (
          <div
            key={dropItem.value}
            className={`dropdown-item ${dropItem.disabled ? 'disabled' : ''}`}
            aria-disabled={dropItem.disabled}
            onMouseDown={(event) => onDropdownItemClick && onDropdownItemClick(event, dropItem)}
          >
            <span className="dropdown-label">{dropItem.label}</span>
            {dropItem.shortcut && <span className="dropdown-shortcut">{dropItem.shortcut}</span>}
          </div>
        );
      })}
    </div>
  );
}

export default DropdownMenu;
