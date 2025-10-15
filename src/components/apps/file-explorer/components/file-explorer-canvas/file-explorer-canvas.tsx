import { BtnIconTextLink } from '@/components';
import {
  documentsIcon,
  downloadsIcon,
  favoritesIcon,
  gameHubIcon as savedGamesIcon,
  imagesIcon,
  musicsIcon,
  videosIcon,
  workspaceIcon,
} from '@/assets/icons';

function FileExplorerCanvas() {
  const canvasItems = [
    {
      id: 'workspace',
      icon: workspaceIcon,
      text: 'Área de Trabalho',
    },
    {
      id: 'documents',
      icon: documentsIcon,
      text: 'Documentos',
    },
    {
      id: 'downloads',
      icon: downloadsIcon,
      text: 'Downloads',
    },
    {
      id: 'favorites',
      icon: favoritesIcon,
      text: 'Favoritos',
    },
    {
      id: 'images',
      icon: imagesIcon,
      text: 'Imagens',
    },
    {
      id: 'saved_games',
      icon: savedGamesIcon,
      text: 'Jogos Salvos',
    },
    {
      id: 'musics',
      icon: musicsIcon,
      text: 'Músicas',
    },
    {
      id: 'videos',
      icon: videosIcon,
      text: 'Vídeos',
    },
  ];
  return (
    <main className="file-explorer-canvas">
      {canvasItems?.length > 0 &&
        canvasItems.map((item) => (
          <BtnIconTextLink
            text={item.text}
            icon={item.icon}
            key={item.id}
            orientation="vertical"
            className="canvas-icon"
            iconSize="40px"
          />
        ))}
    </main>
  );
}

export default FileExplorerCanvas;
