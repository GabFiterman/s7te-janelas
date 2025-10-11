import { useCallback, type ChangeEvent, type KeyboardEvent } from 'react';

import { useInternetExplorer } from '../../use-internet-explorer';
import { InputAndIcon } from '@/components';
import { ArrowDropdown, ArrowLeft, ArrowRight, Close, Reload, Search, internetExplorerIcon } from '@/assets/icons';

function IeIcon() {
  return <img src={internetExplorerIcon} alt="Internet Explorer" style={{ width: '1.5em', height: '1.5em' }} />;
}

function IeHeader() {
  const { inputUrl, navigateToUrl, setFocus, setInputUrl } = useInternetExplorer();

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        navigateToUrl();
        e.currentTarget.blur();
      }
    },
    [navigateToUrl]
  );

  const handleInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setInputUrl(e.target.value);
    },
    [setInputUrl]
  );

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
          type="url"
          value={inputUrl}
          onBlur={() => setFocus(false)}
          onChange={handleInputChange}
          onFocus={() => setFocus(true)}
          onKeyDown={handleKeyDown}
          childBefore={
            <>
              <IeIcon />
            </>
          }
          childAfter={
            <>
              <div className="controller">
                <button onMouseDown={navigateToUrl}>
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
          disabled
          childBefore={
            <>
              <IeIcon />
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
