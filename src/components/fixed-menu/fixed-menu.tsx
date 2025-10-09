import useFixedMenuStates from './use-fixed-menu';
import { DatetimeWidget } from '../widgets';
import './fixed-menu.scss';

function FixedMenu() {
  const { menuItems, mainItem } = useFixedMenuStates();
  return (
    <>
      <div className="fixed-menu">
        <div className="main-icon-container">
          <img src={mainItem.icon} alt={mainItem.label} className="main-icon" onClick={mainItem.action} />
        </div>
        <div className="menu-items-container">
          {menuItems.map((item) => (
            <div className="menu-item" key={item.id}>
              <img src={item.icon} alt={item.label} className="menu-icon" onClick={item.action} />
            </div>
          ))}
        </div>

        <div className="menu-widgets-container">
          <div className="menu-widget-container">
            <DatetimeWidget />
          </div>
        </div>
      </div>
    </>
  );
}

export default FixedMenu;
