import { FileExplorerHeader, FileExplorerController, FileExplorerSideMenu, FileExplorerCanvas } from './components';

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
    </div>
  );
}

export default FileExplorer;
