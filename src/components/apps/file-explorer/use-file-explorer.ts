import { create } from 'zustand';
import { folderIcon, pictureIcon, sheetMusicIcon, fileExplorerIcon } from '@/assets/icons';

interface FileSystemItem {
  alias: string;
  iconSrc: string;
  name: string;
  path: string;
  type: 'folder' | 'file' | 'drive';
}

interface FileExplorerState {
  currentDirectoryContents: FileSystemItem[];
  currentPath: string;
  history: string[];
  historyIndex: number;
  selectedItemPaths: string[];

  getCurrentDirectoryContentsLength: () => number;
  getHistoryLength: () => number;
  getIsItemSelected: (item: FileSystemItem) => boolean;
  getSelectedItems: () => FileSystemItem[];
  getSelectedItemsLength: () => number;

  setCurrentPath: (newPath: string) => void;

  goBack: () => void;
  goForward: () => void;
  navigateTo: (newPath: string) => void;
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

// NOTE: Backend Simulado
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
      name: 'currículo.pdf',
      type: 'file',
      iconSrc: sheetMusicIcon,
      path: 'C:/Usuários/Fiterman/currículo.pdf',
      alias: 'curriculo.pdf',
    },
  ],

  // PASTA VAZIA (Exemplo)
  'C:/USUÁRIOS/FITERMAN/PROJETOS': [
    // Vazio
  ],
};

const getContentsByPath = (path: string): FileSystemItem[] => {
  const normalizedPath = path.toUpperCase();
  console.log({ normalizedPath });
  return FILE_SYSTEM_MAP[normalizedPath] || [];
};

const INITIAL_PATH = 'C:';

export const useFileExplorerStore = create<FileExplorerState>((set, get) => ({
  currentDirectoryContents: getContentsByPath(INITIAL_PATH),
  currentPath: INITIAL_PATH,
  history: [INITIAL_PATH],
  historyIndex: 0,
  selectedItemPaths: [],

  getCurrentDirectoryContentsLength: () => get().currentDirectoryContents.length,
  getHistoryLength: () => get().history.length - 1,
  getIsItemSelected: (item) => get().selectedItemPaths.includes(item.path),
  getSelectedItems: () => {
    const { selectedItemPaths, currentDirectoryContents } = get();
    const contentsMap = new Map(currentDirectoryContents.map((item) => [item.path, item]));

    return selectedItemPaths
      .map((path) => contentsMap.get(path))
      .filter((item): item is FileSystemItem => item !== undefined);
  },
  getSelectedItemsLength: () => get().selectedItemPaths.length,

  setCurrentPath: (newPath) =>
    set(() => {
      return { currentPath: newPath };
    }),

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
  navigateTo: (newPath) =>
    set((state) => {
      const newHistory = state.history.slice(0, state.historyIndex + 1);
      newHistory.push(newPath);

      return {
        currentDirectoryContents: getContentsByPath(newPath),
        currentPath: newPath,
        history: newHistory,
        historyIndex: newHistory.length - 1,
        selectedItemPaths: [],
      };
    }),
  toggleItemSelection: (_event, item) =>
    set((state) => {
      if (item === null) {
        return { selectedItemPaths: [] };
      }

      const { selectedItemPaths, currentDirectoryContents } = state;
      const itemPath = item.path;
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
