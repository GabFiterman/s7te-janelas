import { useFileExplorerStore } from '../../use-file-explorer';

import { folderUserIcon } from '@/assets/icons';

function FileExplorerFooter() {
  const { getCurrentDirectoryContentsLength, getSelectedItemsLength } = useFileExplorerStore();

  return (
    <div className="file-explorer-footer">
      <img src={folderUserIcon} alt="folder-user-icon" />
      <span>
        {getCurrentDirectoryContentsLength() === 1 ? '1 Item' : `${getCurrentDirectoryContentsLength()} Itens`}{' '}
        {getSelectedItemsLength() > 0 &&
          (getSelectedItemsLength() === 1 ? '(1 selecionado)' : `(${getSelectedItemsLength()} selecionados)`)}
      </span>
    </div>
  );
}

export default FileExplorerFooter;
