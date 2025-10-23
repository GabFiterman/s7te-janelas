import { create } from 'zustand';
import { folderIcon, pictureIcon, sheetMusicIcon } from '@/assets/icons';

interface FileSystemItem {
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

  getHistoryLength: () => number;
  goBack: () => void;
  goForward: () => void;
  navigateTo: (newPath: string) => void;
}

const INITIAL_PATH = 'C:';

const mockGetContents = (path: string): FileSystemItem[] => {
  return [
    { name: 'Meus Projetos', type: 'folder', iconSrc: folderIcon, path: `${path}/Meus Projetos` },
    { name: 'Imagens do Desktop', type: 'folder', iconSrc: pictureIcon, path: `${path}/Imagens do Desktop` },
    { name: 'README.txt', type: 'file', iconSrc: sheetMusicIcon, path: `${path}/README.txt` },
  ];
};

export const useFileExplorerStore = create<FileExplorerState>((set, get) => ({
  currentDirectoryContents: mockGetContents(INITIAL_PATH),
  currentPath: INITIAL_PATH,
  history: [INITIAL_PATH],
  historyIndex: 0,

  getHistoryLength: () => get().history.length - 1,
  goBack: () =>
    set((state) => {
      const newIndex = state.historyIndex - 1;
      if (newIndex >= 0) {
        const newPath = state.history[newIndex];
        return {
          currentDirectoryContents: mockGetContents(newPath),
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
          currentDirectoryContents: mockGetContents(newPath),
          currentPath: newPath,
          historyIndex: newIndex,
        };
      }
      return state;
    }),
  navigateTo: (newPath) =>
    set((state) => {
      const { history, historyIndex } = state;
      const newHistory = history.slice(0, historyIndex + 1);

      newHistory.push(newPath);

      return {
        currentDirectoryContents: mockGetContents(newPath),
        currentPath: newPath,
        history: newHistory,
        historyIndex: newHistory.length - 1,
      };
    }),
}));
