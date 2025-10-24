import { useFileExplorerStore } from '../../use-file-explorer';

import { BtnIconTextLink } from '@/components';
import { SIDE_MENU_ITEMS } from '@/constants';

function FileExplorerSideMenu() {
  const { navigateTo } = useFileExplorerStore();

  const handleItemClick = (path: string | null | undefined) => {
    if (path) {
      navigateTo(path);
    }
  };

  return (
    <aside className="file-explorer-side-menu">
      {SIDE_MENU_ITEMS &&
        SIDE_MENU_ITEMS.map((item) => (
          <div className="side-menu-container" key={item.id}>
            <BtnIconTextLink
              className="side-menu-item pl-15 py-1"
              icon={item.icon}
              onDoubleClick={() => handleItemClick(item.path)}
              text={item.text}
            />
            {item?.items &&
              item?.items.length > 0 &&
              item.items.map((subItem) => (
                <BtnIconTextLink
                  className="side-menu-subitem pl-28 py-1"
                  icon={subItem.icon}
                  key={subItem.id}
                  onDoubleClick={() => handleItemClick(subItem.path)}
                  text={subItem.text}
                />
              ))}
          </div>
        ))}
    </aside>
  );
}

export default FileExplorerSideMenu;
