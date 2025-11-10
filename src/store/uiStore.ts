import { create } from 'zustand';
// import { fileExplorerIcon, folderIcon, pictureIcon } from '@/assets/icons';
import { type AppName } from '@/components/apps/app-config';
import { ITEMS_MAP_WORKSPACE, type FileSystemItem } from '@/constants';

export interface WorkspaceIcon extends FileSystemItem {
  x: number;
  y: number;
}

export interface WindowState {
  appName: AppName;
  appProps?: Record<string, unknown>;
  height: number;
  iconSrc: string;
  id: string;
  status: 'normal' | 'minimized' | 'maximized';
  title: string;
  width: number;
  x: number;
  y: number;
  zIndex: number;
}

export interface GroupedWindows {
  [appName: string]: WindowState[];
}

const INITIAL_USER_WINDOW = {
  width: Number(window.innerWidth),
  height: Number(window.innerHeight),
  x: 0,
  y: 0,
};

interface UIState {
  CONSTANTS: {
    FIXED_MENU_HEIGHT: number;
    WINDOW_DEFAULT_WIDTH: number;
    WINDOW_DEFAULT_HEIGHT: number;
    WINDOW_MAX_WIDTH?: number;
    WINDOW_MAX_HEIGHT?: number;
  };

  isStartMenuOpen: boolean;
  maxZIndex: number;
  windows: WindowState[];
  workspaceIcons: WorkspaceIcon[];

  activeWindowsByApp: () => GroupedWindows;

  closeWindow: (id: string) => void;
  focusWindow: (id: string) => void;
  openWindow: (
    window: Omit<WindowState, 'zIndex' | 'x' | 'y' | 'status' | 'width' | 'height'> &
      Partial<Pick<WindowState, 'x' | 'y' | 'width' | 'height' | 'status' | 'appProps'>>
  ) => void;
  setIsStartMenuOpen: (isOpen: boolean) => void;
  toggleIsStartMenuOpen: () => void;
  updateWindowPosition: (id: string, newX: number, newY: number) => void;
  updateWindowStatus: (id: string, newStatus: WindowState['status']) => void;
  updateWorkspaceIconPosition: (path: string, newX: number, newY: number) => void;
}

const useUIStore = create<UIState>((set, get) => ({
  CONSTANTS: {
    FIXED_MENU_HEIGHT: 60,
    WINDOW_DEFAULT_WIDTH: 1200,
    WINDOW_DEFAULT_HEIGHT: 800,
    WINDOW_MAX_HEIGHT: INITIAL_USER_WINDOW.height,
    WINDOW_MAX_WIDTH: INITIAL_USER_WINDOW.width,
  },

  isStartMenuOpen: false,
  maxZIndex: 1000,
  windows: [],

  workspaceIcons: [
    {
      ...ITEMS_MAP_WORKSPACE[0],
      x: 0,
      y: 0,
    },
    {
      ...ITEMS_MAP_WORKSPACE[1],
      x: 120,
      y: 0,
    },
    {
      ...ITEMS_MAP_WORKSPACE[2],
      x: 0,
      y: 150,
    },
    {
      ...ITEMS_MAP_WORKSPACE[3],
      x: 120,
      y: 150,
    },
    {
      ...ITEMS_MAP_WORKSPACE[4],
      x: 0,
      y: 300,
    },
    {
      ...ITEMS_MAP_WORKSPACE[5],
      x: 120,
      y: 300,
    },
    {
      ...ITEMS_MAP_WORKSPACE[6],
      x: 0,
      y: 450,
    },
    {
      ...ITEMS_MAP_WORKSPACE[7],
      x: 120,
      y: 450,
    },
  ],

  activeWindowsByApp: () => {
    const windows = get().windows;

    return windows.reduce((acc, window) => {
      const { appName } = window;
      if (!acc[appName]) {
        acc[appName] = [];
      }
      acc[appName].push(window);
      return acc;
    }, {} as GroupedWindows);
  },

  closeWindow: (id) => {
    set((state) => ({
      windows: state.windows.filter((window) => window.id !== id),
    }));
  },
  focusWindow: (id) =>
    set((state) => {
      const newZIndex = state.maxZIndex + 1;
      return {
        windows: state.windows.map((window) => (window.id === id ? { ...window, zIndex: newZIndex } : window)),
        maxZIndex: newZIndex,
      };
    }),
  openWindow: (newWindow) =>
    set((state) => {
      const newZIndex = state.maxZIndex + 1;
      const defaultWidth = get().CONSTANTS.WINDOW_DEFAULT_WIDTH;
      const defaultHeight = get().CONSTANTS.WINDOW_DEFAULT_HEIGHT;

      return {
        windows: [
          ...state.windows,
          {
            ...newWindow,
            height: newWindow.height ?? defaultHeight,
            status: newWindow.status ?? 'normal',
            width: newWindow.width ?? defaultWidth,
            x: newWindow.x ?? 50,
            y: newWindow.y ?? 50,
            zIndex: newZIndex,
            iconSrc: newWindow.iconSrc,
            appProps: newWindow.appProps ?? {},
          },
        ],
        maxZIndex: newZIndex,
      };
    }),
  setIsStartMenuOpen: (isOpen) => set({ isStartMenuOpen: isOpen }),
  toggleIsStartMenuOpen: () => set((state) => ({ isStartMenuOpen: !state.isStartMenuOpen })),
  updateWindowPosition: (id, newX, newY) =>
    set((state) => ({
      windows: state.windows.map((window) => (window.id === id ? { ...window, x: newX, y: newY } : window)),
    })),
  updateWindowStatus: (id, newStatus) => {
    set((state) => ({
      windows: state.windows.map((window) => {
        if (window.id === id) {
          const newProps: Partial<WindowState> = {
            status: newStatus,
          };
          if (newStatus === 'maximized') {
            newProps.x = 0;
            newProps.y = 0;
          }

          return { ...window, ...newProps };
        }
        return window;
      }),
    }));
  },
  updateWorkspaceIconPosition: (path, newX, newY) =>
    set((state) => ({
      workspaceIcons: state.workspaceIcons.map((icon) => (icon.path === path ? { ...icon, x: newX, y: newY } : icon)),
    })),
}));

export default useUIStore;
