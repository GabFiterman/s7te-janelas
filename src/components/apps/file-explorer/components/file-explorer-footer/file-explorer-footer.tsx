import { folderUserIcon } from '@/assets/icons';

function FileExplorerFooter() {
  return (
    <div className="file-explorer-footer">
      <img src={folderUserIcon} alt="folder-user-icon" />
      <span>11 Itens</span>
    </div>
  );
}

export default FileExplorerFooter;
