import { ArrowLeft, ArrowRight, ArrowDropdown, Reload, Close, Search } from '@/assets/icons';
import { InputAndIcon } from '@/components';
import { internetExplorerIcon } from '@/assets/icons';

function IEIcon() {
  return <img src={internetExplorerIcon} alt="Internet Explorer" style={{ width: '1.5em', height: '1.5em' }} />;
}

function IeHeader() {
  return (
    <div className="ie-header">
      <div className="button-group">
        <button>
          <ArrowLeft />
        </button>
        <button>
          <ArrowRight />
        </button>
        <ArrowDropdown color="#3791CB" size={22} />
      </div>

      <div className="query-container url-container">
        <InputAndIcon
          placeholder="https://www.bing.com/"
          childBefore={
            <>
              <IEIcon />
            </>
          }
          childAfter={
            <>
              <div className="controller">
                <button>
                  <Reload color="#3791CB" size={18} />
                </button>
                <button>
                  <Close color="#cb3737ff" size={22} />
                </button>
              </div>
            </>
          }
        />
      </div>

      <div className="query-container search-container">
        <InputAndIcon
          placeholder="Bing"
          childBefore={
            <>
              <IEIcon />
            </>
          }
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

export default IeHeader;
