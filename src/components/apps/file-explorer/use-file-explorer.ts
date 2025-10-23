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
  selectedItems: FileSystemItem[];

  getCurrentDirectoryContentsLength: () => number;
  getHistoryLength: () => number;
  getIsItemSelected: (item: FileSystemItem) => boolean;
  getSelectedItemsLength: () => number;

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
  // TODO: Considerar uma seleção apenas por Index;
  selectedItems: [],

  getCurrentDirectoryContentsLength: () => get().currentDirectoryContents.length,
  getHistoryLength: () => get().history.length - 1,
  getIsItemSelected: (item) => get().selectedItems.includes(item),
  getSelectedItemsLength: () => get().selectedItems.length,

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
  toggleItemSelection: (_event, item) =>
    set((state) => {
      if (item === null) {
        return { selectedItems: [] };
      }

      const { selectedItems, currentDirectoryContents } = state;

      let newItems = [item];

      if (_event?.ctrlKey) {
        newItems = selectedItems.includes(item) ? selectedItems.filter((i) => i !== item) : [...selectedItems, item];
      } else if (_event?.shiftKey) {
        if (selectedItems.length === 0) {
          return { selectedItems: [item] };
        }
        const selectedItemMainArrayIndex = currentDirectoryContents.findIndex((i) => i === item);
        const firstSelectedIndex = currentDirectoryContents.indexOf(selectedItems[0]);
        const startIndex = Math.min(selectedItemMainArrayIndex, firstSelectedIndex);
        const endIndex = Math.max(selectedItemMainArrayIndex, firstSelectedIndex);

        newItems = currentDirectoryContents.slice(startIndex, endIndex + 1);
      }

      return { selectedItems: newItems };
    }),
}));
