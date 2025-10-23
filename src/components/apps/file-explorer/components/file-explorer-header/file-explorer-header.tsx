import { useFileExplorerStore } from '../../use-file-explorer';
import { BtnForwardBackward, InputAndIcon } from '@/components';
import { folderUserIcon, Reload, Search, ArrowDropdown } from '@/assets/icons';

function FileExplorerHeader() {
  const { currentPath, getHistoryLength, goBack, goForward, historyIndex } = useFileExplorerStore();

  return (
    <div className="file-explorer-header">
      <div className="buttons-container">
        <BtnForwardBackward
          handleLeftClick={() => goBack()}
          handleRightClick={() => goForward()}
          handleDownClick={() => console.log('downward')}
          disableLeftClick={getHistoryLength() === 0 || historyIndex === 0}
          disableRightClick={getHistoryLength() === historyIndex}
        />
      </div>

      <div className="query-container url-container">
        <InputAndIcon
          placeholder="C:/Users/Fiterman/Documents"
          type="file-path"
          value={currentPath}
          // disabled
          childBefore={
            <>
              <img src={folderUserIcon} alt="folder icon" width={30} height={30} />
            </>
          }
          childAfter={
            <>
              <div className="controller">
                <ArrowDropdown size={30} color="#000000" />
                <button>
                  <Reload color="#3791CB" size={18} />
                </button>
              </div>
            </>
          }
        />
      </div>

      <div className="query-container search-container">
        <InputAndIcon
          placeholder="Pesquisar Fiterman"
          disabled
          childAfter={
            <>
              <Search color="#3791CB" size={20} />
              <ArrowDropdown size={22} />
            </>
          }
        />
      </div>
    </div>
  );
}

export default FileExplorerHeader;
