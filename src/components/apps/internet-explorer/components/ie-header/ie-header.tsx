import { useCallback, type ChangeEvent, type KeyboardEvent } from 'react';

import { useInternetExplorer } from '../../use-internet-explorer';
import { BtnForwardBackward, InputAndIcon } from '@/components';
import { ArrowDropdown, Close, internetExplorerIcon, Reload, Search } from '@/assets';

function IeIcon() {
  return <img src={internetExplorerIcon} alt="Internet Explorer" style={{ width: '1.5em', height: '1.5em' }} />;
}

function IeHeader() {
  const { goBack, goForward, handleReload, history, historyIndex, inputUrl, navigateToUrl, setFocus, setInputUrl } =
    useInternetExplorer();

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        navigateToUrl(inputUrl);
        e.currentTarget.blur();
      }
    },
    [navigateToUrl, inputUrl]
  );

  const handleInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setInputUrl(e.target.value);
    },
    [setInputUrl]
  );

  return (
    <div className="ie-header">
      <BtnForwardBackward
        handleLeftClick={() => goBack()}
        handleRightClick={() => goForward()}
        disableLeftClick={history.length === 0 || historyIndex === 0}
        disableRightClick={history.length - 1 === historyIndex}
        disableDropdownClick={true}
      />
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
                <button onClick={() => handleReload()}>
                  <Reload color="#3791CB" size={18} />
                </button>
                <button disabled>
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
              <Search color="#3791CB" size={20} className="disabled" />
              <ArrowDropdown size={22} className="disabled" />
            </>
          }
        />
      </div>
    </div>
  );
}

export default IeHeader;
