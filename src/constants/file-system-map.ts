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
  internetExplorerIcon,
} from '@/assets/icons';

interface FileSystemItem {
  extension: string;
  iconSrc: string;
  label: string;
  path: string;
  type: 'folder' | 'file' | 'drive' | 'link' | 'externalLink';
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

  'C:/USUARIOS/FITERMAN/VIDEOS': {
    extension: '/',
    iconSrc: videosIcon,
    label: 'Vídeos',
    path: 'C:/Usuários/Fiterman/Videos',
    type: 'folder',
    uri: 'videos/',
  },

  // ROOT LEVEL 3 [ DOCUMENTOS ]
  'C:/USUARIOS/FITERMAN/DOCUMENTOS/PRIMEIRO_DOCUMENTO.TXT': {
    extension: '.txt',
    iconSrc: sheetMusicIcon,
    label: 'Primeiro Documento',
    path: 'C:/Usuários/Fiterman/Documentos/Primeiro_Documento.txt',
    type: 'file',
    uri: 'documentos/primeiro_documento.txt',
  },

  'C:/USUARIOS/FITERMAN/DOCUMENTOS/SEGUNDO_DOCUMENTO.TXT': {
    extension: '.txt',
    iconSrc: networkIcon,
    label: 'Segundo Documento',
    path: 'C:/Usuários/Fiterman/Documentos/Segundo_Documento.txt',
    type: 'file',
    uri: 'documentos/segundo_documento.txt',
  },

  // ROOT LEVEL 3 [ IMAGES ]
  'C:/USUARIOS/FITERMAN/IMAGENS/MARACUJÁ.WEBP': {
    extension: '.webp',
    iconSrc: pictureIcon,
    label: 'Maracujá',
    path: 'C:/Usuários/Fiterman/Imagens/Maracujá.webp',
    type: 'file',
    uri: 'imagens/maracuja.webp',
  },

  'C:/USUARIOS/FITERMAN/IMAGENS/ALFACE.WEBP': {
    extension: '.webp',
    iconSrc: pictureIcon,
    label: 'Alface',
    path: 'C:/Usuários/Fiterman/Imagens/Alface.webp',
    type: 'file',
    uri: 'imagens/alface.webp',
  },

  'C:/USUARIOS/FITERMAN/IMAGENS/PAO_DE_QUEIJO.JPG': {
    extension: '.jpg',
    iconSrc: pictureIcon,
    label: 'Pão de Queijo',
    path: 'C:/Usuários/Fiterman/Imagens/pao_de_queijo.jpg',
    type: 'file',
    uri: 'imagens/pao_de_queijo.jpg',
  },

  'C:/USUARIOS/FITERMAN/IMAGENS/FLOWER.JPG': {
    extension: '.jpg',
    iconSrc: pictureIcon,
    label: 'Flowers',
    path: 'C:/Usuários/Fiterman/Imagens/flower.jpg',
    type: 'file',
    uri: 'imagens/flower.jpg',
  },

  // ROOT LEVEL 3 [ VIDEOS ]

  'C:/USUARIOS/FITERMAN/VIDEOS/JIMMY_HENDRIX.MP4': {
    extension: '.mp4',
    iconSrc: videosIcon,
    label: 'Jimmy Hendrix',
    path: 'C:/Usuários/Fiterman/Videos/Jimmy_Hendrix.mp4',
    type: 'file',
    uri: 'videos/jimmy_hendrix.mp4',
  },

  'C:/USUARIOS/FITERMAN/VIDEOS/AMOR_FATAL.MP4': {
    extension: '.mp4',
    iconSrc: videosIcon,
    label: 'Amor Fatal',
    path: 'C:/Usuários/Fiterman/Videos/Amor_Fatal.mp4',
    type: 'file',
    uri: 'videos/amor_fatal.mp4',
  },

  'C:/USUARIOS/FITERMAN/VIDEOS/TEASER_TOPGUN.MP4': {
    extension: '.mp4',
    iconSrc: videosIcon,
    label: 'Teaser Topgun',
    path: 'C:/Usuários/Fiterman/Videos/Teaser_Topgun.mp4',
    type: 'file',
    uri: 'videos/teaser_topgun.mp4',
  },

  // ROOT LEVEL 3 [ PROJETOS ]
  'C:/USUARIOS/FITERMAN/PROJETOS/CHALLENGELETT': {
    extension: '/',
    iconSrc: folderIcon,
    label: 'Challenge Lett',
    path: 'C:/Usuários/Fiterman/Projetos/ChallengeLett',
    type: 'folder',
    uri: 'projetos/ChallengeLett/',
  },

  // ROOT LEVEL 3 [ PROJETOS/CHALLENGE_LETT ]
  'C:/USUARIOS/FITERMAN/PROJETOS/CHALLENGELETT/CHALLENGELETTSYSTEMIMAGE.PNG': {
    extension: '.png',
    iconSrc: pictureIcon,
    label: 'ChallengeLett System Image',
    path: 'C:/Usuários/Fiterman/Projetos/ChallengeLett/ChallengeLett_System_Image.png',
    type: 'file',
    uri: 'projetos/ChallengeLett/ChallengeLett_System_Image.png',
  },

  'C:/USUARIOS/FITERMAN/PROJETOS/CHALLENGELETT/CHALLENGELETT.html': {
    extension: '.html',
    iconSrc: internetExplorerIcon,
    label: 'ChallengeLett',
    path: 'C:/Usuários/Fiterman/Projetos/ChallengeLett/challengelett.html',
    type: 'link',
    uri: 'https://gabfiterman.github.io/ChallengeLett/',
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
  ITEMS_MAP_ALL['C:/USUARIOS/FITERMAN/DOCUMENTOS/PRIMEIRO_DOCUMENTO.TXT'],
  ITEMS_MAP_ALL['C:/USUARIOS/FITERMAN/DOCUMENTOS/SEGUNDO_DOCUMENTO.TXT'],
  ITEMS_MAP_ALL['C:/USUARIOS/FITERMAN/DOCUMENTOS'],
  ITEMS_MAP_ALL['C:/USUARIOS/FITERMAN/DOWNLOADS'],
  ITEMS_MAP_ALL['C:/USUARIOS/FITERMAN/IMAGENS/ALFACE.WEBP'],
  ITEMS_MAP_ALL['C:/USUARIOS/FITERMAN/IMAGENS/PAO_DE_QUEIJO.JPG'],
  ITEMS_MAP_ALL['C:/USUARIOS/FITERMAN/VIDEOS/AMOR_FATAL.MP4'],
  ITEMS_MAP_ALL['C:/USUARIOS/FITERMAN/VIDEOS/TEASER_TOPGUN.MP4'],
];

const ITEMS_MAP_LIBS: FileSystemItem[] = [
  ITEMS_MAP_ALL['C:/USUARIOS/FITERMAN/DOCUMENTOS'],
  ITEMS_MAP_ALL['C:/USUARIOS/FITERMAN/IMAGENS'],
  ITEMS_MAP_ALL['C:/USUARIOS/FITERMAN/MÚSICAS'],
  ITEMS_MAP_ALL['C:/USUARIOS/FITERMAN/VIDEOS'],
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
    ITEMS_MAP_ALL['C:/USUARIOS/FITERMAN/VIDEOS'],
  ],

  // ROOT LEVEL 3 [ FAVORITOS ]
  'C:/USUARIOS/FITERMAN/FAVORITOS': ITEMS_MAP_FAVORITES,

  // ROOT LEVEL 3 [ AREA_DE_TRABALHO ]
  'C:/USUARIOS/FITERMAN/AREA_DE_TRABALHO': ITEMS_MAP_WORKSPACE,

  // ROOT LEVEL 3 [ BIBLIOTECAS ]
  'C:/USUARIOS/FITERMAN/BIBLIOTECAS': ITEMS_MAP_LIBS,

  // ROOT LEVEL 3 [ COMPUTADOR ]
  'C:/USUARIOS/FITERMAN/COMPUTADOR': [],

  // ROOT LEVEL 3 [ DOCUMENTOS ]
  'C:/USUARIOS/FITERMAN/DOCUMENTOS': [
    ITEMS_MAP_ALL['C:/USUARIOS/FITERMAN/DOCUMENTOS/PRIMEIRO_DOCUMENTO.TXT'],
    ITEMS_MAP_ALL['C:/USUARIOS/FITERMAN/DOCUMENTOS/SEGUNDO_DOCUMENTO.TXT'],
  ],

  // ROOT LEVEL 3 [ DOWNLOADS ]
  'C:/USUARIOS/FITERMAN/DOWNLOADS': [],

  // ROOT LEVEL 3 [ IMAGENS ]
  'C:/USUARIOS/FITERMAN/IMAGENS': [
    ITEMS_MAP_ALL['C:/USUARIOS/FITERMAN/IMAGENS/MARACUJÁ.WEBP'],
    ITEMS_MAP_ALL['C:/USUARIOS/FITERMAN/IMAGENS/ALFACE.WEBP'],
    ITEMS_MAP_ALL['C:/USUARIOS/FITERMAN/IMAGENS/PAO_DE_QUEIJO.JPG'],
    ITEMS_MAP_ALL['C:/USUARIOS/FITERMAN/IMAGENS/FLOWER.JPG'],
  ],

  // ROOT LEVEL 3 [ MÚSICAS ]
  'C:/USUARIOS/FITERMAN/MÚSICAS': [],

  // ROOT LEVEL 3 [ PROJETOS ]
  'C:/USUARIOS/FITERMAN/PROJETOS': [ITEMS_MAP_ALL['C:/USUARIOS/FITERMAN/PROJETOS/CHALLENGELETT']],

  // ROOT LEVEL 3 [ VIDEOS ]
  'C:/USUARIOS/FITERMAN/VIDEOS': [
    ITEMS_MAP_ALL['C:/USUARIOS/FITERMAN/VIDEOS/JIMMY_HENDRIX.MP4'],
    ITEMS_MAP_ALL['C:/USUARIOS/FITERMAN/VIDEOS/AMOR_FATAL.MP4'],
    ITEMS_MAP_ALL['C:/USUARIOS/FITERMAN/VIDEOS/TEASER_TOPGUN.MP4'],
  ],

  // ROOT LEVEL 4 [ PROJETOS/CHALLENGE_LETT ]
  'C:/USUARIOS/FITERMAN/PROJETOS/CHALLENGELETT': [
    ITEMS_MAP_ALL['C:/USUARIOS/FITERMAN/PROJETOS/CHALLENGELETT/CHALLENGELETTSYSTEMIMAGE.PNG'],
    ITEMS_MAP_ALL['C:/USUARIOS/FITERMAN/IMAGENS/ALFACE.WEBP'],
    ITEMS_MAP_ALL['C:/USUARIOS/FITERMAN/PROJETOS/CHALLENGELETT/CHALLENGELETT.html'],
  ],
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
