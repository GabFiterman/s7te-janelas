import { useInternetExplorer } from '../../use-internet-explorer';

function Webview() {
  const { currentUrl } = useInternetExplorer();

  return (
    <iframe
      className="ie-webview"
      sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
      src={currentUrl}
      title="Internet Explorer Webview"
    />
  );
}

export default Webview;
