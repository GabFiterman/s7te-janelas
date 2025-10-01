import { create } from 'zustand';
import folderIcon from '@/assets/icons/folder-1.webp';
import { type AppName } from '@/components/apps/app-config';
interface Icon {
    id: string;
    label: string;
    iconUrl: string;
    x: number;
    y: number;
}

export interface WindowState {
    id: string;
    title: string;
    appName: AppName;
    x: number;
    y: number;
    width: number;
    height: number;
    status: 'normal' | 'minimized' | 'maximized';
    zIndex: number;
}

interface UIState {
    workspaceIcons: Icon[];
    updateWorkspaceIconPosition: (
        id: string,
        newX: number,
        newY: number,
    ) => void;
    isStartMenuOpen: boolean;
    setIsStartMenuOpen: (isOpen: boolean) => void;
    toggleIsStartMenuOpen: () => void;
    windows: WindowState[];
    maxZIndex: number;
    openWindow: (
        window: Omit<WindowState, 'x' | 'y' | 'zIndex' | 'status'>,
    ) => void;
    closeWindow: (id: string) => void;
    updateWindowPosition: (id: string, newX: number, newY: number) => void;
    updateWindowStatus: (id: string, newStatus: WindowState['status']) => void;
    focusWindow: (id: string) => void;
}

const useUIStore = create<UIState>((set) => ({
    windows: [],
    maxZIndex: 1000,
    openWindow: (newWindow) =>
        set((state) => {
            const newZIndex = state.maxZIndex + 1;
            return {
                windows: [
                    ...state.windows,
                    {
                        ...newWindow,
                        height: 400,
                        status: 'normal',
                        width: 600,
                        x: 50,
                        y: 50,
                        zIndex: newZIndex,
                    },
                ],
                maxZIndex: newZIndex,
            };
        }),
    closeWindow: (id) =>
        set((state) => ({
            windows: state.windows.filter((window) => window.id !== id),
        })),
    updateWindowPosition: (id, newX, newY) =>
        set((state) => ({
            windows: state.windows.map((window) =>
                window.id === id ? { ...window, x: newX, y: newY } : window,
            ),
        })),
    updateWindowStatus: (id, newStatus) =>
        set((state) => ({
            windows: state.windows.map((window) =>
                window.id === id ? { ...window, status: newStatus } : window,
            ),
        })),
    focusWindow: (id) =>
        set((state) => {
            const newZIndex = state.maxZIndex + 1;
            return {
                windows: state.windows.map((window) =>
                    window.id === id
                        ? { ...window, zIndex: newZIndex }
                        : window,
                ),
                maxZIndex: newZIndex,
            };
        }),
    workspaceIcons: [
        {
            id: '1',
            label: 'documentos importantes',
            iconUrl: folderIcon,
            x: 0,
            y: 0,
        },
        {
            id: '2',
            label: 'arquivos',
            iconUrl: folderIcon,
            x: 0,
            y: 30,
        },
    ],
    updateWorkspaceIconPosition: (id, newX, newY) =>
        set((state) => ({
            workspaceIcons: state.workspaceIcons.map((icon) =>
                icon.id === id ? { ...icon, x: newX, y: newY } : icon,
            ),
        })),
    isStartMenuOpen: false,
    setIsStartMenuOpen: (isOpen) => set({ isStartMenuOpen: isOpen }),
    toggleIsStartMenuOpen: () =>
        set((state) => ({ isStartMenuOpen: !state.isStartMenuOpen })),
}));

export default useUIStore;
