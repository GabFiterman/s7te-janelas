import { useFileExplorerStore } from '../../use-file-explorer';

import { BtnIconTextLink } from '@/components';

function FileExplorerCanvas() {
  const { currentDirectoryContents, getIsItemSelected, navigateTo, toggleItemSelection } = useFileExplorerStore();

  return (
    <main
      className="file-explorer-canvas"
      onClick={(event) => {
        event.stopPropagation();
        event.preventDefault();
        toggleItemSelection(event, null);
      }}
    >
      {currentDirectoryContents?.length > 0 &&
        currentDirectoryContents.map((item, index) => (
          <BtnIconTextLink
            className="canvas-icon"
            icon={item?.iconSrc}
            iconSize="40px"
            key={item?.path || index}
            onClick={(event) => {
              event.stopPropagation();
              toggleItemSelection(event, item);
            }}
            onDoubleClick={() => navigateTo(item.path)}
            orientation="vertical"
            selected={getIsItemSelected(item)}
            text={`${item?.label}${item.type === 'file' ? item.extension : ''}`}
          />
        ))}
    </main>
  );
}

export default FileExplorerCanvas;
