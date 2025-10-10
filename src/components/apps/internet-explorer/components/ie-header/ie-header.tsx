import { ArrowLeft, ArrowRight, ArrowDropdown, Reload, Close, Search } from '@/assets/icons';

function IeHeader() {
  return (
    <div className="ie-header">
      <div className="button-group">
        <button>
          <ArrowLeft />
        </button>
        <button>
          <ArrowRight />
        </button>
        <ArrowDropdown color="#3791CB" size={22} />
      </div>
      <div className="query-container url-container">
        {/* ícone antes da URL
        <img />  */}
        <input type="text" placeholder="Pesquisar" />
        <div className="controller">
          <Reload />
          <Close />
        </div>
      </div>
      <div className="query-container search-container">
        {/* ícone antes da URL
        <img />  */}
        <input type="text" placeholder="Bing" />
        <Search />
        <ArrowDropdown size={18} />
      </div>
    </div>
  );
}

export default IeHeader;
