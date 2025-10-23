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
  const { currentDirectoryContents, navigateTo } = useFileExplorerStore();

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
    <main className="file-explorer-canvas">
      {currentDirectoryContents?.length > 0 &&
        currentDirectoryContents.map((item) => (
          <BtnIconTextLink
            text={item.name}
            icon={item.iconSrc}
            // TODO: Gerar um UUID !?
            key={item.name}
            orientation="vertical"
            className="canvas-icon"
            iconSize="40px"
            // onClick={(e) => console.log(`Clique único em: ${item.name}`, { e })}
            onDoubleClick={() => navigateTo(item.path)}
          />
        ))}
    </main>
  );
}

export default FileExplorerCanvas;
