import { IeHeader, Webview } from './components';
import './internet-explorer.scss';

function InternetExplorer() {
  return (
    <div className="internet-explorer-container">
      <IeHeader />
      <Webview />
    </div>
  );
}

export default InternetExplorer;
