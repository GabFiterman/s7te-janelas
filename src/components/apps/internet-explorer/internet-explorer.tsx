import { useEffect } from 'react';
import { IeHeader, Webview } from './components';
import { useInternetExplorer } from './use-internet-explorer';
import './internet-explorer.scss';

export interface InternetExplorerProps {
  initialUrl?: string;
}

function InternetExplorer({ initialUrl }: InternetExplorerProps) {
  const { navigateToUrl } = useInternetExplorer();

  useEffect(() => {
    if (!initialUrl) return;
    navigateToUrl(initialUrl);
  }, [initialUrl, navigateToUrl]);

  return (
    <div className="internet-explorer-container">
      <IeHeader />
      <Webview />
    </div>
  );
}

export default InternetExplorer;
