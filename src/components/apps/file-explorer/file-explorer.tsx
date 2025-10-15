import { FileExplorerHeader, FileExplorerController } from './components';

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
    </div>
  );
}

export default FileExplorer;
