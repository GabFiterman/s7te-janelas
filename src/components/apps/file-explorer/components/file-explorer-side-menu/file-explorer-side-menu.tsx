import { BtnIconTextLink } from '@/components';
import {
  computerIcon,
  documentsIcon,
  domesticGroupIcon,
  downloadsIcon,
  favoritesIcon,
  fileExplorerIcon,
  imagesIcon,
  locationsIcon,
  musicsIcon,
  networkIcon,
  videosIcon,
  workspaceIcon,
} from '@/assets/icons';

function FileExplorerSideMenu() {
  const sideMenuItems = [
    {
      id: 'favorites',
      icon: favoritesIcon,
      text: 'Favoritos',
      // action: () => handleFavoritesClick,
      items: [
        {
          id: 'workspace',
          icon: workspaceIcon,
          text: 'Área de trabalho',
          // action: () => handleWorkspaceClick,
        },
        {
          id: 'downloads',
          icon: downloadsIcon,
          text: 'Downloads',
          // action: () => handleDownloadsClick,
        },
        {
          id: 'locations',
          icon: locationsIcon,
          text: 'Locais',
          // action: () => handleLocationsClick,
        },
      ],
    },
    {
      id: 'libraries',
      icon: fileExplorerIcon,
      text: 'Bibliotecas',
      // action: () => handleLibrariesClick,
      items: [
        {
          id: 'documents',
          icon: documentsIcon,
          text: 'Documentos',
          // action: () => handleDocumentsClick,
        },
        {
          id: 'images',
          icon: imagesIcon,
          text: 'Imagens',
          // action: () => handleImagesClick,
        },
        {
          id: 'musics',
          icon: musicsIcon,
          text: 'Músicas',
          // action: () => handleMusicsClick,
        },
        {
          id: 'videos',
          icon: videosIcon,
          text: 'Vídeos',
          // action: () => handleVideosClick,
        },
      ],
    },
    {
      id: 'domestic_group',
      icon: domesticGroupIcon,
      text: 'Grupo doméstico',
      // action: () => handleDomesticGroupClick,
    },
    {
      id: 'computer',
      icon: computerIcon,
      text: 'Computador',
      // action: () => handleComputerClick,
    },
    {
      id: 'network',
      icon: networkIcon,
      text: 'Rede',
      // action: () => handleNetworkClick,
      items: [
        {
          id: 'user_pc',
          icon: computerIcon,
          text: 'FITERMAN-PC',
          // action: () => handleComputerClick,
        },
      ],
    },
  ];

  return (
    <aside className="file-explorer-side-menu">
      {sideMenuItems &&
        sideMenuItems.map((item) => (
          <div className="side-menu-container" key={item.id}>
            <BtnIconTextLink text={item.text} icon={item.icon} className="side-menu-item pl-15 py-1" key={item.id} />
            {item?.items &&
              item?.items.length > 0 &&
              item.items.map((subItem) => (
                <BtnIconTextLink
                  text={subItem.text}
                  icon={subItem.icon}
                  className="side-menu-subitem pl-28 py-1"
                  key={subItem.id}
                />
              ))}
          </div>
        ))}
    </aside>
  );
}

export default FileExplorerSideMenu;
