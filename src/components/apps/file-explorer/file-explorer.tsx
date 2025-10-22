import {
  FileExplorerCanvas,
  FileExplorerController,
  FileExplorerFooter,
  FileExplorerHeader,
  FileExplorerSideMenu,
} from './components';

import './file-explorer.scss';

function FileExplorer() {
  return (
    <div className="file-explorer">
      <header className="py-5 px-10">
        <FileExplorerHeader />
      </header>
      <section className="py-5 px-10">
        <FileExplorerController />
      </section>
      <section className="file-explorer-content py-2 px-10">
        <FileExplorerSideMenu />
        <FileExplorerCanvas />
      </section>
      <footer>
        <FileExplorerFooter />
      </footer>
    </div>
  );
}

export default FileExplorer;
