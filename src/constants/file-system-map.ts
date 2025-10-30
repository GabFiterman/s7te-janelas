import { type FileSystemItem } from '../components/apps/file-explorer/use-file-explorer';
import {
  folderIcon,
  pictureIcon,
  sheetMusicIcon,
  fileExplorerIcon,
  downloadsIcon,
  musicsIcon,
  videosIcon,
  documentsIcon,
} from '@/assets/icons';

const FILE_SYSTEM_MAP: Record<string, FileSystemItem[]> = {
  // DRIVE ROOT
  'C:': [
    { name: 'Usuários', type: 'folder', iconSrc: folderIcon, path: 'C:/Usuários', alias: 'usuarios/' },
    { name: 'Program Files', type: 'folder', iconSrc: folderIcon, path: 'C:/Program Files', alias: 'programas/' },
    { name: 'Windows', type: 'folder', iconSrc: folderIcon, path: 'C:/Windows', alias: 'windows/' },
  ],

  // USUÁRIOS
  'C:/USUÁRIOS': [
    { name: 'Fiterman', type: 'folder', iconSrc: folderIcon, path: 'C:/Usuários/Fiterman', alias: 'fiterman/' },
    { name: 'Público', type: 'folder', iconSrc: folderIcon, path: 'C:/Usuários/Público', alias: 'publico/' },
  ],

  // CONTEÚDO DO USUÁRIO
  'C:/USUÁRIOS/FITERMAN': [
    {
      name: 'Documentos',
      type: 'folder',
      iconSrc: fileExplorerIcon,
      path: 'C:/Usuários/Fiterman/Documentos',
      alias: 'documentos/',
    },
    { name: 'Imagens', type: 'folder', iconSrc: pictureIcon, path: 'C:/Usuários/Fiterman/Imagens', alias: 'imagens/' },
    {
      name: 'Projetos',
      type: 'folder',
      iconSrc: folderIcon,
      path: 'C:/Usuários/Fiterman/Projetos',
      alias: 'projetos/',
    },
    {
      name: 'Downloads',
      type: 'folder',
      iconSrc: downloadsIcon,
      path: 'C:/Usuários/Fiterman/Downloads',
      alias: 'downloads/',
    },
    {
      name: 'Músicas',
      type: 'folder',
      iconSrc: musicsIcon,
      path: 'C:/Usuários/Fiterman/Músicas',
      alias: 'musicas/',
    },
    {
      name: 'Vídeos',
      type: 'folder',
      iconSrc: videosIcon,
      path: 'C:/Usuários/Fiterman/Vídeos',
      alias: 'videos/',
    },
    {
      name: 'currículo.pdf',
      type: 'file',
      iconSrc: sheetMusicIcon,
      path: 'C:/Usuários/Fiterman/currículo.pdf',
      alias: 'curriculo.pdf',
    },
  ],

  'C:/USUÁRIOS/FITERMAN/DOCUMENTOS': [
    {
      name: 'Primeiro Documento',
      type: 'file',
      iconSrc: documentsIcon,
      path: 'C:/Usuários/Fiterman/Documentos/primeirodocumento.pdf',
      alias: 'documentos/primeirodocumento.pdf',
    },
    {
      name: 'Receita de bolo',
      type: 'file',
      iconSrc: documentsIcon,
      path: 'C:/Usuários/Fiterman/Documentos/receitadebolo.txt',
      alias: 'documentos/receitadebolo.txt',
    },
    {
      name: 'Documento 3',
      type: 'file',
      iconSrc: documentsIcon,
      path: 'C:/Usuários/Fiterman/Documentos/documento3.pdf',
      alias: 'documentos/documento3.pdf',
    },
  ],

  'C:/USUÁRIOS/FITERMAN/DOWNLOADS': [
    {
      name: 'Donwload Item 1',
      type: 'file',
      iconSrc: downloadsIcon,
      path: 'C:/Usuários/Fiterman/Downloads/download1.pdf',
      alias: 'downloads/download1.pdf',
    },
    {
      name: 'Download Folder 1',
      type: 'folder',
      iconSrc: folderIcon,
      path: 'C:/Usuários/Fiterman/Downloads/Download Folder 1',
      alias: 'downloads/downloadfolder1/',
    },
  ],

  'C:/USUÁRIOS/FITERMAN/MÚSICAS': [
    {
      name: 'Heavy Metal',
      type: 'file',
      iconSrc: musicsIcon,
      path: 'C:/Usuários/Fiterman/Músicas/HeavyMetal.mp3',
      alias: 'musicas/heavymetal.mp3',
    },
    {
      name: 'Trance Music',
      type: 'file',
      iconSrc: musicsIcon,
      path: 'C:/Usuários/Fiterman/Músicas/TranceMusic.mp3',
      alias: 'musicas/trancemusic.mp3',
    },
  ],

  'C:/USUÁRIOS/FITERMAN/IMAGENS': [
    {
      name: 'Maracujá',
      type: 'file',
      iconSrc: pictureIcon,
      path: 'C:/Usuários/Fiterman/Imagens/maracujá.jpg',
      alias: 'imagens/maracuja.jpg',
    },
    {
      name: 'Alface',
      type: 'file',
      iconSrc: pictureIcon,
      path: 'C:/Usuários/Fiterman/Imagens/alface.png',
      alias: 'imagens/alface.png',
    },
  ],

  'C:/USUÁRIOS/FITERMAN/PROJETOS': [
    // Vazio
  ],
};

export { FILE_SYSTEM_MAP };
