import { create } from 'zustand';
import { fileExplorerIcon, folderIcon, pictureIcon } from '@/assets/icons';
import { type AppName } from '@/components/apps/app-config';
interface Icon {
    id: string;
    iconUrl: string;
    label: string;
    x: number;
    y: number;
}

export interface WindowState {
    appName: AppName;
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

interface UIState {
    closeWindow: (id: string) => void;
    focusWindow: (id: string) => void;
    isStartMenuOpen: boolean;
    maxZIndex: number;
    openWindow: (
        window: Omit<WindowState, 'zIndex' | 'status' | 'x' | 'y'> &
            Partial<Pick<WindowState, 'x' | 'y' | 'width' | 'height'>>,
    ) => void;
    setIsStartMenuOpen: (isOpen: boolean) => void;
    toggleIsStartMenuOpen: () => void;
    updateWindowPosition: (id: string, newX: number, newY: number) => void;
    updateWindowStatus: (id: string, newStatus: WindowState['status']) => void;
    updateWorkspaceIconPosition: (
        id: string,
        newX: number,
        newY: number,
    ) => void;
    windows: WindowState[];
    workspaceIcons: Icon[];

    FIXED_MENU_HEIGHT: number;
}

const useUIStore = create<UIState>((set) => ({
    closeWindow: (id) => {
        set((state) => ({
            windows: state.windows.filter((window) => window.id !== id),
        }));
    },
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
    isStartMenuOpen: false,
    maxZIndex: 1000,
    openWindow: (newWindow) =>
        set((state) => {
            const newZIndex = state.maxZIndex + 1;
            return {
                windows: [
                    ...state.windows,
                    {
                        ...newWindow,
                        height: newWindow.height ?? 600,
                        status: 'normal',
                        width: newWindow.width ?? 1000,
                        x: newWindow.x ?? 50,
                        y: newWindow.y ?? 50,
                        zIndex: newZIndex,
                        iconSrc: newWindow.iconSrc,
                    },
                ],
                maxZIndex: newZIndex,
            };
        }),
    setIsStartMenuOpen: (isOpen) => set({ isStartMenuOpen: isOpen }),
    toggleIsStartMenuOpen: () =>
        set((state) => ({ isStartMenuOpen: !state.isStartMenuOpen })),
    updateWindowPosition: (id, newX, newY) =>
        set((state) => ({
            windows: state.windows.map((window) =>
                window.id === id ? { ...window, x: newX, y: newY } : window,
            ),
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
    updateWorkspaceIconPosition: (id, newX, newY) =>
        set((state) => ({
            workspaceIcons: state.workspaceIcons.map((icon) =>
                icon.id === id ? { ...icon, x: newX, y: newY } : icon,
            ),
        })),
    windows: [],
    workspaceIcons: [
        {
            id: '1',
            label: 'documentos importantes [0,0]',
            iconUrl: folderIcon,
            x: 0,
            y: 0,
        },
        {
            id: '2',
            label: 'arquivos [120,0]',
            iconUrl: fileExplorerIcon,
            x: 120,
            y: 0,
        },
        {
            id: '3',
            label: 'O terceiro [0,150]',
            iconUrl: folderIcon,
            x: 0,
            y: 150,
        },
        {
            id: '4',
            label: 'O quarto [120,150]',
            iconUrl: pictureIcon,
            x: 120,
            y: 150,
        },
    ],

    FIXED_MENU_HEIGHT: 60,
}));

export default useUIStore;
