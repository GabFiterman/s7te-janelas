import {
  computerIcon,
  downloadsIcon,
  favoritesIcon,
  fileExplorerIcon,
  folderIcon,
  musicsIcon,
  networkIcon,
  pictureIcon,
  sheetMusicIcon,
  videosIcon,
  workspaceIcon,
} from '@/assets/icons';

interface FileSystemItem {
  extension: string;
  iconSrc: string;
  label: string;
  path: string;
  type: 'folder' | 'file' | 'drive';
  uri: string;
}

const ITEMS_MAP_ALL: Record<string, FileSystemItem> = {
  // DRIVE ROOT
  'C:': {
    extension: '/',
    iconSrc: computerIcon,
    label: 'C:',
    path: 'C:',
    type: 'drive',
    uri: '/',
  },

  // ROOT LEVEL 1
  'C:/USUARIOS': {
    extension: '/',
    iconSrc: folderIcon,
    label: 'Usuários',
    path: 'C:/Usuários',
    type: 'folder',
    uri: 'usuarios/',
  },

  'C:/ARQUIVOS_DE_PROGRAMAS': {
    extension: '/',
    iconSrc: folderIcon,
    path: 'C:/Arquivos de programas',
    label: 'Arquivos de Programas',
    type: 'folder',
    uri: 'programas/',
  },

  'C:/USUARIOS/FITERMAN': {
    extension: '/',
    iconSrc: folderIcon,
    label: 'Fiterman',
    path: 'C:/Usuários/Fiterman',
    type: 'folder',
    uri: 'fiterman/',
  },

  'C:/USUARIOS/PUBLICO': {
    extension: '/',
    iconSrc: folderIcon,
    label: 'Público',
    path: 'C:/Usuários/Público',
    type: 'folder',
    uri: 'publico/',
  },

  // ROOT LEVEL 2 [ FITERMAN ]
  'C:/USUARIOS/FITERMAN/FAVORITOS': {
    extension: '/',
    iconSrc: favoritesIcon,
    label: 'Favoritos',
    path: 'C:/Usuários/Fiterman/Favoritos',
    type: 'folder',
    uri: 'favoritos/',
  },

  'C:/USUARIOS/FITERMAN/AREA_DE_TRABALHO': {
    extension: '/',
    iconSrc: workspaceIcon,
    label: 'Área de Trabalho',
    path: 'C:/Usuários/Fiterman/Área de Trabalho',
    type: 'folder',
    uri: 'area_de_trabalho/',
  },

  'C:/USUARIOS/FITERMAN/BIBLIOTECAS': {
    extension: '/',
    iconSrc: folderIcon,
    label: 'Bibliotecas',
    path: 'C:/Usuários/Fiterman/Bibliotecas',
    type: 'folder',
    uri: 'bibliotecas/',
  },

  'C:/USUARIOS/FITERMAN/COMPUTADOR': {
    extension: '/',
    iconSrc: computerIcon,
    label: 'Computador',
    path: 'C:/Usuários/Fiterman',
    type: 'folder',
    uri: 'computador/',
  },

  'C:/USUARIOS/FITERMAN/DOCUMENTOS': {
    extension: '/',
    iconSrc: fileExplorerIcon,
    label: 'Documentos',
    path: 'C:/Usuários/Fiterman/Documentos',
    type: 'folder',
    uri: 'documentos/',
  },

  'C:/USUARIOS/FITERMAN/IMAGENS': {
    extension: '/',
    iconSrc: pictureIcon,
    label: 'Imagens',
    path: 'C:/Usuários/Fiterman/Imagens',
    type: 'folder',
    uri: 'imagens/',
  },

  'C:/USUARIOS/FITERMAN/PROJETOS': {
    extension: '/',
    iconSrc: folderIcon,
    label: 'Projetos',
    path: 'C:/Usuários/Fiterman/Projetos',
    type: 'folder',
    uri: 'projetos/',
  },

  'C:/USUARIOS/FITERMAN/DOWNLOADS': {
    extension: '/',
    iconSrc: downloadsIcon,
    label: 'Downloads',
    path: 'C:/Usuários/Fiterman/Downloads',
    type: 'folder',
    uri: 'downloads/',
  },

  'C:/USUARIOS/FITERMAN/MÚSICAS': {
    extension: '/',
    iconSrc: musicsIcon,
    label: 'Músicas',
    path: 'C:/Usuários/Fiterman/Músicas',
    type: 'folder',
    uri: 'musicas/',
  },

  'C:/USUARIOS/FITERMAN/VÍDEOS': {
    extension: '/',
    iconSrc: videosIcon,
    label: 'Vídeos',
    path: 'C:/Usuários/Fiterman/Vídeos',
    type: 'folder',
    uri: 'videos/',
  },

  // ROOT LEVEL 3 [ DOCUMENTOS ]
  'C:/USUARIOS/FITERMAN/DOCUMENTOS/PRIMEIRO_DOCUMENTO.PDF': {
    extension: '.pdf',
    iconSrc: sheetMusicIcon,
    label: 'Primeiro Documento',
    path: 'C:/Usuários/Fiterman/Documentos/Primeiro_Documento.pdf',
    type: 'file',
    uri: 'documentos/primeiro_documento.pdf',
  },

  'C:/USUARIOS/FITERMAN/DOCUMENTOS/SEGUNDO_DOCUMENTO.PDF': {
    extension: '.txt',
    iconSrc: networkIcon,
    label: 'Segundo Documento',
    path: 'C:/Usuários/Fiterman/Documentos/Segundo_Documento.pdf',
    type: 'file',
    uri: 'documentos/segundo_documento.pdf',
  },

  // ROOT LEVEL 3 [ IMAGES ]
  'C:/USUARIOS/FITERMAN/IMAGENS/MARACUJÁ.JPG': {
    extension: '.jpg',
    iconSrc: pictureIcon,
    label: 'Maracujá',
    path: 'C:/Usuários/Fiterman/Imagens/Maracujá.jpg',
    type: 'file',
    uri: 'imagens/maracuja.jpg',
  },

  'C:/USUARIOS/FITERMAN/IMAGENS/ALFACE.PNG': {
    extension: '.png',
    iconSrc: pictureIcon,
    label: 'Alface',
    path: 'C:/Usuários/Fiterman/Imagens/Alface.png',
    type: 'file',
    uri: 'imagens/alface.png',
  },

  'C:/USUARIOS/FITERMAN/IMAGENS/PAO_DE_QUEIJO.PNG': {
    extension: '.png',
    iconSrc: pictureIcon,
    label: 'Pão de Queijo',
    path: 'C:/Usuários/Fiterman/Imagens/Pao_de_Queijo.png',
    type: 'file',
    uri: 'imagens/pao_de_queijo.png',
  },
};

const ITEMS_MAP_FAVORITES: FileSystemItem[] = [
  ITEMS_MAP_ALL['C:/USUARIOS/FITERMAN/AREA_DE_TRABALHO'],
  ITEMS_MAP_ALL['C:/USUARIOS/FITERMAN/DOCUMENTOS'],
  ITEMS_MAP_ALL['C:/USUARIOS/FITERMAN/IMAGENS'],
  ITEMS_MAP_ALL['C:/USUARIOS/FITERMAN/PROJETOS'],
  ITEMS_MAP_ALL['C:/USUARIOS/FITERMAN/DOWNLOADS'],
];

const ITEMS_MAP_WORKSPACE: FileSystemItem[] = [
  ITEMS_MAP_ALL['C:/USUARIOS/FITERMAN/DOCUMENTOS/PRIMEIRO_DOCUMENTO.PDF'],
  ITEMS_MAP_ALL['C:/USUARIOS/FITERMAN/DOCUMENTOS/SEGUNDO_DOCUMENTO.PDF'],
  ITEMS_MAP_ALL['C:/USUARIOS/FITERMAN/DOCUMENTOS'],
  ITEMS_MAP_ALL['C:/USUARIOS/FITERMAN/DOWNLOADS'],
];

const ITEMS_MAP_LIBS: FileSystemItem[] = [
  ITEMS_MAP_ALL['C:/USUARIOS/FITERMAN/DOCUMENTOS'],
  ITEMS_MAP_ALL['C:/USUARIOS/FITERMAN/IMAGENS'],
  ITEMS_MAP_ALL['C:/USUARIOS/FITERMAN/MÚSICAS'],
  ITEMS_MAP_ALL['C:/USUARIOS/FITERMAN/VÍDEOS'],
];

const STRUCTURE_MAP_SIDE_MENU: Record<string, FileSystemItem[]> = {
  'C:/USUARIOS/FITERMAN/FAVORITOS': ITEMS_MAP_FAVORITES,

  'C:/USUARIOS/FITERMAN/AREA_DE_TRABALHO': ITEMS_MAP_WORKSPACE,

  'C:/USUARIOS/FITERMAN/BIBLIOTECAS': ITEMS_MAP_LIBS,

  'C:/USUARIOS/FITERMAN/COMPUTADOR': [],
};

const STRUCTURE_MAP_FILE_SYSTEM: Record<string, FileSystemItem[]> = {
  // DRIVE ROOT
  'C:': [ITEMS_MAP_ALL['C:/USUARIOS'], ITEMS_MAP_ALL['C:/ARQUIVOS_DE_PROGRAMAS']],

  // ROOT LEVEL 1
  'C:/USUARIOS': [ITEMS_MAP_ALL['C:/USUARIOS/FITERMAN'], ITEMS_MAP_ALL['C:/USUARIOS/PUBLICO']],

  'C:/ARQUIVOS_DE_PROGRAMAS': [],

  // ROOT LEVEL 2 [ FITERMAN ]
  'C:/USUARIOS/FITERMAN': [
    ITEMS_MAP_ALL['C:/USUARIOS/FITERMAN/FAVORITOS'],
    ITEMS_MAP_ALL['C:/USUARIOS/FITERMAN/AREA_DE_TRABALHO'],
    ITEMS_MAP_ALL['C:/USUARIOS/FITERMAN/BIBLIOTECAS'],
    ITEMS_MAP_ALL['C:/USUARIOS/FITERMAN/COMPUTADOR'],
    ITEMS_MAP_ALL['C:/USUARIOS/FITERMAN/DOCUMENTOS'],
    ITEMS_MAP_ALL['C:/USUARIOS/FITERMAN/DOWNLOADS'],
    ITEMS_MAP_ALL['C:/USUARIOS/FITERMAN/IMAGENS'],
    ITEMS_MAP_ALL['C:/USUARIOS/FITERMAN/MÚSICAS'],
    ITEMS_MAP_ALL['C:/USUARIOS/FITERMAN/PROJETOS'],
    ITEMS_MAP_ALL['C:/USUARIOS/FITERMAN/VÍDEOS'],
  ],

  'C:/USUARIOS/FITERMAN/FAVORITOS': ITEMS_MAP_FAVORITES,

  'C:/USUARIOS/FITERMAN/AREA_DE_TRABALHO': ITEMS_MAP_WORKSPACE,

  'C:/USUARIOS/FITERMAN/BIBLIOTECAS': ITEMS_MAP_LIBS,

  'C:/USUARIOS/FITERMAN/COMPUTADOR': [],

  'C:/USUARIOS/FITERMAN/DOCUMENTOS': [
    ITEMS_MAP_ALL['C:/USUARIOS/FITERMAN/DOCUMENTOS/PRIMEIRO_DOCUMENTO.PDF'],
    ITEMS_MAP_ALL['C:/USUARIOS/FITERMAN/DOCUMENTOS/SEGUNDO_DOCUMENTO.PDF'],
  ],

  'C:/USUARIOS/FITERMAN/DOWNLOADS': [],

  'C:/USUARIOS/FITERMAN/IMAGENS': [
    ITEMS_MAP_ALL['C:/USUARIOS/FITERMAN/IMAGENS/MARACUJÁ.JPG'],
    ITEMS_MAP_ALL['C:/USUARIOS/FITERMAN/IMAGENS/ALFACE.PNG'],
    ITEMS_MAP_ALL['C:/USUARIOS/FITERMAN/IMAGENS/PAO_DE_QUEIJO.PNG'],
  ],

  'C:/USUARIOS/FITERMAN/MÚSICAS': [],

  'C:/USUARIOS/FITERMAN/PROJETOS': [],

  'C:/USUARIOS/FITERMAN/VÍDEOS': [],
};

export type { FileSystemItem };
export {
  ITEMS_MAP_ALL,
  ITEMS_MAP_FAVORITES,
  ITEMS_MAP_WORKSPACE,
  ITEMS_MAP_LIBS,
  STRUCTURE_MAP_SIDE_MENU,
  STRUCTURE_MAP_FILE_SYSTEM,
};
