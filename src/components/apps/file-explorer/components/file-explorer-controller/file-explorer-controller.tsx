import { flexBox1Icon, galleryIcon, questionIcon, ArrowDropdown } from '@/assets/icons';

const controllerItems = [
  {
    title: 'organize',
    name: 'Organizar',
    dropdown: true,
  },
  {
    title: 'include-library',
    name: 'Incluir na biblioteca',
    dropdown: true,
  },
  {
    title: 'share',
    name: 'Compartilhar com',
    dropdown: true,
  },
  {
    title: 'new-folder',
    name: 'Nova pasta',
    dropdown: false,
  },
];

const actionItems = [
  {
    title: 'view',
    iconSrc: galleryIcon,
    alt: 'view icon',
    dropdown: true,
  },
  {
    title: 'layout',
    iconSrc: flexBox1Icon,
    alt: 'layout icon',
    dropdown: false,
  },
  {
    title: 'help',
    iconSrc: questionIcon,
    alt: 'help icon',
    dropdown: false,
  },
];

function FileExplorerController() {
  return (
    <div className="file-explorer-controller">
      <div className="controller-items">
        {controllerItems &&
          controllerItems.map((item) => (
            <button key={item.title} className="file-explorer-controller-item">
              {item.name}
              <span>{item.dropdown && <ArrowDropdown size={18} />}</span>
            </button>
          ))}
      </div>
      <div className="controller-actions">
        {actionItems &&
          actionItems.map((item) => (
            <div key={item.title} className="file-explorer-controller-action">
              <img src={item.iconSrc} alt={item.alt} />
              <span>{item.dropdown && <ArrowDropdown size={18} />}</span>
            </div>
          ))}
      </div>
    </div>
  );
}

export default FileExplorerController;
