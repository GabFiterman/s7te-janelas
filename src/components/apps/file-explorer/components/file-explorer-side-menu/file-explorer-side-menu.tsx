import { useFileExplorerStore } from '../../use-file-explorer';

import { BtnIconTextLink } from '@/components';
import { ITEMS_MAP_ALL, STRUCTURE_MAP_SIDE_MENU } from '@/constants';
import { normalizeStringForPath } from '@/utils';

function FileExplorerSideMenu() {
  const { navigateTo } = useFileExplorerStore();

  const handleItemClick = (path: string | null | undefined) => {
    if (path) {
      navigateTo(path);
    }
  };

  return (
    <aside className="file-explorer-side-menu">
      {STRUCTURE_MAP_SIDE_MENU &&
        Object.entries(STRUCTURE_MAP_SIDE_MENU).map(([pathKey, subItems]) => {
          const mainItem = ITEMS_MAP_ALL[normalizeStringForPath(pathKey)];
          if (!mainItem) return null;

          return (
            <div className="side-menu-container" key={mainItem.uri}>
              <BtnIconTextLink
                className="side-menu-item pl-15 py-1"
                icon={mainItem.iconSrc}
                onDoubleClick={() => handleItemClick(mainItem.path)}
                text={mainItem.label}
              />
              {subItems?.length > 0 &&
                subItems.map(
                  (subItem) =>
                    subItem.type !== 'file' && (
                      <BtnIconTextLink
                        className="side-menu-subitem pl-28 py-1"
                        icon={subItem.iconSrc}
                        key={subItem.uri}
                        onDoubleClick={() => handleItemClick(subItem.path)}
                        text={subItem.label}
                      />
                    )
                )}
            </div>
          );
        })}
    </aside>
  );
}

export default FileExplorerSideMenu;
