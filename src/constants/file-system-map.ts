import {
  ITEMS_MAP_ALL,
  ITEMS_MAP_FAVORITES,
  ITEMS_MAP_LIBS,
  ITEMS_MAP_WORKSPACE,
  STRUCTURE_MAP_FILE_SYSTEM,
  STRUCTURE_MAP_SIDE_MENU,
} from './file-system';

interface FileSystemItem {
  extension: string;
  iconSrc: string;
  label: string;
  path: string;
  type: 'folder' | 'file' | 'drive' | 'link' | 'externalLink';
  uri: string;
}

export type { FileSystemItem };
export {
  ITEMS_MAP_ALL,
  ITEMS_MAP_FAVORITES,
  ITEMS_MAP_LIBS,
  ITEMS_MAP_WORKSPACE,
  STRUCTURE_MAP_FILE_SYSTEM,
  STRUCTURE_MAP_SIDE_MENU,
};
