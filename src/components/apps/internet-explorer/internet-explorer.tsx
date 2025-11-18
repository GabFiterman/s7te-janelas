import { useEffect } from 'react';
import { IeHeader, Webview, IeHomePage } from './components';
import { useInternetExplorer, INITIAL_URL } from './use-internet-explorer';
import './internet-explorer.scss';

export interface InternetExplorerProps {
  initialUrl?: string;
}

function InternetExplorer({ initialUrl }: InternetExplorerProps) {
  const { navigateToUrl, currentUrl } = useInternetExplorer();

  useEffect(() => {
    if (!initialUrl) return;
    navigateToUrl(initialUrl);
  }, [initialUrl, navigateToUrl]);

  return (
    <div className="internet-explorer-container">
      <IeHeader />
      {currentUrl === INITIAL_URL ? <IeHomePage /> : <Webview />}
    </div>
  );
}

export default InternetExplorer;
