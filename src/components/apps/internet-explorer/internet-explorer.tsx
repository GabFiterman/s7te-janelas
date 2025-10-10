import useInternetExplorer from './use-internet-explorer';

import { IeHeader } from './components';

import './internet-explorer.scss';

function InternetExplorer() {
  useInternetExplorer();

  return (
    <div className="internet-explorer-container">
      <IeHeader />
      <span>Conteúdo do Internet Explorer está bem aqui!</span>
    </div>
  );
}

export default InternetExplorer;
