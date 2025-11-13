import { useMemo } from 'react';
import useUIStore from '@/store/uiStore';

import useFixedMenuStates from './use-fixed-menu';
import { FixedMenuTaskbarItem } from './components';
import { DatetimeWidget } from '../common/widgets';
import './fixed-menu.scss';

interface GroupedWindows {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [appName: string]: any;
}

function FixedMenu() {
  const { menuItems, mainItem, handleClickMainItem } = useFixedMenuStates();
  const windows = useUIStore((state) => state.windows);

  const activeWindowsByApp = useMemo(() => {
    return windows.reduce((acc, window) => {
      const { appName } = window;
      if (!acc[appName]) {
        acc[appName] = [];
      }
      acc[appName].push(window);
      return acc;
    }, {} as GroupedWindows);
  }, [windows]);

  return (
    <>
      <div className="fixed-menu">
        <div className="main-icon-container">
          <img
            src={mainItem.icon}
            alt={mainItem.label}
            className="main-icon"
            onMouseDown={(event) => handleClickMainItem(event)}
          />
        </div>
        <div className="menu-items-container">
          {menuItems.map((item) => {
            const windowsForApp = activeWindowsByApp[item.appName as string] || [];
            return (
              <FixedMenuTaskbarItem
                key={item.id}
                appName={item.appName as string}
                iconSrc={item.icon}
                windows={windowsForApp}
                onOpenNew={item.action}
              />
            );
          })}
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
