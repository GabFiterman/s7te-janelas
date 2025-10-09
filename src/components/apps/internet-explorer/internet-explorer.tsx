import useInternetExplorer from './use-internet-explorer';
import './internet-explorer.scss';

function InternetExplorer() {
  useInternetExplorer();

  return (
    <div className="app-container">
      <span>Conteúdo do Internet Explorer está bem aqui!</span>
    </div>
  );
}

export default InternetExplorer;
