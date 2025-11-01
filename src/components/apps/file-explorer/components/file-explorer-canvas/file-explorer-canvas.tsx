import { useFileExplorerStore } from '../../use-file-explorer';

import { BtnIconTextLink } from '@/components';
// import {
//   documentsIcon,
//   downloadsIcon,
//   favoritesIcon,
//   gameHubIcon as savedGamesIcon,
//   imagesIcon,
//   musicsIcon,
//   videosIcon,
//   workspaceIcon,
// } from '@/assets/icons';

function FileExplorerCanvas() {
  const { currentDirectoryContents, getIsItemSelected, navigateTo, toggleItemSelection } = useFileExplorerStore();

  // const canvasItems = [
  //   {
  //     id: 'workspace',
  //     icon: workspaceIcon,
  //     text: 'Área de Trabalho',
  //   },
  //   {
  //     id: 'documents',
  //     icon: documentsIcon,
  //     text: 'Documentos',
  //   },
  //   {
  //     id: 'downloads',
  //     icon: downloadsIcon,
  //     text: 'Downloads',
  //   },
  //   {
  //     id: 'favorites',
  //     icon: favoritesIcon,
  //     text: 'Favoritos',
  //   },
  //   {
  //     id: 'images',
  //     icon: imagesIcon,
  //     text: 'Imagens',
  //   },
  //   {
  //     id: 'saved_games',
  //     icon: savedGamesIcon,
  //     text: 'Jogos Salvos',
  //   },
  //   {
  //     id: 'musics',
  //     icon: musicsIcon,
  //     text: 'Músicas',
  //   },
  //   {
  //     id: 'videos',
  //     icon: videosIcon,
  //     text: 'Vídeos',
  //   },
  // ];

  return (
    <main
      className="file-explorer-canvas"
      onClick={(event) => {
        event.stopPropagation();
        event.preventDefault();
        toggleItemSelection(event, null);
      }}
    >
      {currentDirectoryContents?.length > 0 &&
        currentDirectoryContents.map((item) => (
          <BtnIconTextLink
            className="canvas-icon"
            icon={item.iconSrc}
            iconSize="40px"
            // TODO: Gerar um UUID !?
            key={item.path}
            onClick={(event) => {
              event.stopPropagation();
              toggleItemSelection(event, item);
            }}
            onDoubleClick={() => navigateTo(item.path)}
            orientation="vertical"
            selected={getIsItemSelected(item)}
            text={item.name}
          />
        ))}
    </main>
  );
}

export default FileExplorerCanvas;
