import { create } from 'zustand';
import { ITEMS_MAP_ALL, STRUCTURE_MAP_FILE_SYSTEM, type FileSystemItem } from '@/constants';
import { generateUUID, normalizeStringForPath, isImageByExtension } from '@/utils';
import useUIStore from '@/store/uiStore';
import { mediaCenterImageIcon } from '@/assets/icons';

const INITIAL_URI = 'fiterman/';
const ALIAS_TO_PATH_MAP = new Map<string, string>();
const MEDIA_CENTER_IMAGE_WINDOW_ID = `media-center-image-file-explorer-window-${generateUUID()}`;

interface FileExplorerState {
  currentDirectoryContents: FileSystemItem[];
  currentPath: string;
  history: string[];
  historyIndex: number;
  selectedItemPaths: string[];

  getCurrentDirectoryContentsLength: () => number;
  getHistoryLength: () => number;
  getIsItemSelected: (item: FileSystemItem) => boolean;
  getPathByAlias: (alias: string) => string;
  getSelectedItems: () => FileSystemItem[];
  getSelectedItemsLength: () => number;

  setCurrentPath: (newPath: string) => void;

  goBack: () => void;
  goForward: () => void;
  navigateTo: (item: FileSystemItem) => void;
  toggleItemSelection: (
    event:
      | React.KeyboardEvent<HTMLButtonElement>
      | React.KeyboardEvent<HTMLDivElement>
      | React.KeyboardEvent<HTMLElement>
      | React.MouseEvent<HTMLButtonElement>
      | React.MouseEvent<HTMLDivElement>
      | React.MouseEvent<HTMLElement>
      | null,
    item: FileSystemItem | null
  ) => void;
}

const initializeFileSystemMaps = () => {
  for (const path in ITEMS_MAP_ALL) {
    const item = ITEMS_MAP_ALL[normalizeStringForPath(path)];
    if (item?.uri) {
      ALIAS_TO_PATH_MAP.set(normalizeStringForPath(item.uri), normalizeStringForPath(item.path));
    }
  }
};
initializeFileSystemMaps();

const getContentsByPath = (path: string): FileSystemItem[] => {
  const normalizedPath = normalizeStringForPath(path);
  console.log(normalizedPath);
  return STRUCTURE_MAP_FILE_SYSTEM[normalizedPath] || [];
};

const getPathByAlias = (alias: string): string => {
  const path = ALIAS_TO_PATH_MAP.get(normalizeStringForPath(alias));
  if (path) {
    return ITEMS_MAP_ALL[path].path;
  } else {
    return '';
  }
};

const INITIAL_PATH = getPathByAlias(INITIAL_URI);

export const useFileExplorerStore = create<FileExplorerState>((set, get) => ({
  currentDirectoryContents: getContentsByPath(INITIAL_PATH),
  currentPath: INITIAL_PATH,
  history: [INITIAL_PATH],
  historyIndex: 0,
  selectedItemPaths: [],

  getCurrentDirectoryContentsLength: () => get().currentDirectoryContents.length,
  getHistoryLength: () => get().history.length - 1,
  getIsItemSelected: (item) => get().selectedItemPaths.includes(item?.path),

  getPathByAlias: getPathByAlias,

  getSelectedItems: () => {
    const { selectedItemPaths } = get();
    return selectedItemPaths
      .map((path) => ITEMS_MAP_ALL[path.toUpperCase()])
      .filter((item): item is FileSystemItem => item !== undefined);
  },
  getSelectedItemsLength: () => get().selectedItemPaths.length,

  setCurrentPath: (newPath) => {
    const contents = getContentsByPath(newPath);
    set({
      currentPath: newPath,
      currentDirectoryContents: contents,
      history: [newPath],
      historyIndex: 0,
      selectedItemPaths: [],
    });
  },

  goBack: () =>
    set((state) => {
      const newIndex = state.historyIndex - 1;
      if (newIndex >= 0) {
        const newPath = state.history[newIndex];
        return {
          currentDirectoryContents: getContentsByPath(newPath),
          currentPath: newPath,
          historyIndex: newIndex,
        };
      }
      return state;
    }),
  goForward: () =>
    set((state) => {
      const newIndex = state.historyIndex + 1;
      if (newIndex < state.history.length) {
        const newPath = state.history[newIndex];
        return {
          currentDirectoryContents: getContentsByPath(newPath),
          currentPath: newPath,
          historyIndex: newIndex,
        };
      }
      return state;
    }),
  navigateTo: (item) =>
    set((state) => {
      const { openWindow } = useUIStore.getState();

      if (item.extension === '/') {
        const newPath = item.path;
        const newHistory = state.history.slice(0, state.historyIndex + 1);
        newHistory.push(newPath);

        return {
          currentDirectoryContents: getContentsByPath(newPath),
          currentPath: newPath,
          history: newHistory,
          historyIndex: newHistory.length - 1,
          selectedItemPaths: [],
        };
      } else if (item.type === 'file') {
        if (isImageByExtension(item.extension)) {
          const playlist = get().currentDirectoryContents.filter(
            (i) => i.type === 'file' && isImageByExtension(i.extension)
          );
          openWindow({
            id: MEDIA_CENTER_IMAGE_WINDOW_ID,
            title: item.label + item.extension,
            appName: 'MediaCenterImage',
            iconSrc: mediaCenterImageIcon,
            appProps: {
              initialItem: item,
              playlist: playlist,
            },
          });
          return state;
        }
      }

      return state;
    }),
  toggleItemSelection: (_event, item) =>
    set((state) => {
      if (item === null) {
        return { selectedItemPaths: [] };
      }

      const { selectedItemPaths, currentDirectoryContents } = state;
      const itemPath = item?.path;
      let newPaths = [...selectedItemPaths];

      if (_event?.ctrlKey) {
        if (selectedItemPaths.includes(itemPath)) {
          newPaths = selectedItemPaths.filter((path) => path !== itemPath);
        } else {
          newPaths.push(itemPath);
        }
      } else if (_event?.shiftKey) {
        if (selectedItemPaths.length === 0) {
          return { selectedItemPaths: [itemPath] };
        }

        const selectedItemMainArrayIndex = currentDirectoryContents.findIndex((i) => i.path === itemPath);
        const firstSelectedItem = currentDirectoryContents.find((i) => i.path === selectedItemPaths[0]);

        if (!firstSelectedItem) return { selectedItemPaths: [itemPath] };

        const firstSelectedIndex = currentDirectoryContents.indexOf(firstSelectedItem);

        const startIndex = Math.min(selectedItemMainArrayIndex, firstSelectedIndex);
        const endIndex = Math.max(selectedItemMainArrayIndex, firstSelectedIndex);

        newPaths = currentDirectoryContents.slice(startIndex, endIndex + 1).map((i) => i.path);
      } else {
        if (selectedItemPaths.length === 1 && selectedItemPaths.includes(itemPath)) {
          newPaths = [];
        } else {
          newPaths = [itemPath];
        }
      }

      return { selectedItemPaths: newPaths };
    }),
}));
