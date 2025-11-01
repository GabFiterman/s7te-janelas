import {
  computerIcon,
  documentsIcon,
  domesticGroupIcon,
  downloadsIcon,
  favoritesIcon,
  fileExplorerIcon,
  imagesIcon,
  musicsIcon,
  networkIcon,
  videosIcon,
  workspaceIcon,
} from '@/assets/icons';

const SIDE_MENU_ITEMS = [
  {
    id: 'favorites',
    icon: favoritesIcon,
    text: 'Favoritos',
    path: null,
    items: [
      {
        id: 'workspace',
        icon: workspaceIcon,
        text: 'Área de trabalho',
        path: 'C:/Usuários/Fiterman/Área de Trabalho',
      },
      {
        id: 'downloads',
        icon: downloadsIcon,
        text: 'Downloads',
        path: 'C:/Usuários/Fiterman/Downloads',
      },
    ],
  },
  {
    id: 'libraries',
    icon: fileExplorerIcon,
    text: 'Bibliotecas',
    path: null,
    items: [
      {
        id: 'documents',
        icon: documentsIcon,
        text: 'Documentos',
        path: 'C:/Usuários/Fiterman/Documentos',
      },
      {
        id: 'images',
        icon: imagesIcon,
        text: 'Imagens',
        path: 'C:/Usuários/Fiterman/Imagens',
      },
      {
        id: 'musics',
        icon: musicsIcon,
        text: 'Músicas',
        path: 'C:/Usuários/Fiterman/Músicas',
      },
      {
        id: 'videos',
        icon: videosIcon,
        text: 'Vídeos',
        path: 'C:/Usuários/Fiterman/Vídeos',
      },
    ],
  },
  {
    id: 'domestic_group',
    icon: domesticGroupIcon,
    text: 'Grupo doméstico',
    path: null,
  },
  {
    id: 'computer',
    icon: computerIcon,
    text: 'Computador',
    path: 'C:',
  },
  {
    id: 'network',
    icon: networkIcon,
    text: 'Rede',
    path: null,
    items: [
      {
        id: 'user_pc',
        icon: computerIcon,
        text: 'FITERMAN-PC',
        path: 'C:',
      },
    ],
  },
];

export { SIDE_MENU_ITEMS };
