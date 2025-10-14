import { BtnForwardBackward, InputAndIcon } from '@/components';
import { folderUserIcon, Reload, Search, ArrowDropdown } from '@/assets/icons';

function FileExplorerHeader() {
  return (
    <div className="file-explorer-header">
      <div className="buttons-container">
        <BtnForwardBackward
          handleLeftClick={() => console.log('backward')}
          handleRightClick={() => console.log('forward')}
          handleDownClick={() => console.log('downward')}
        />
      </div>

      <div className="query-container url-container">
        <InputAndIcon
          placeholder="https://www.bing.com/"
          type="file-path"
          value={'C:/Users/Fiterman/Documents'}
          disabled
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
          placeholder="Pessquisar Fiterman"
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
