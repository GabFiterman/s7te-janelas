import { create } from 'zustand';
import folderIcon from '@/assets/icons/folder-1.webp';

interface Icon {
    id: string;
    label: string;
    iconUrl: string;
    x: number;
    y: number;
}

interface UIState {
    workspaceIcons: Icon[];
    updateWorkspaceIconPosition: (
        id: string,
        newX: number,
        newY: number,
    ) => void;
}

const useUIStore = create<UIState>((set) => ({
    workspaceIcons: [
        {
            id: '1',
            label: 'documentos importantes',
            iconUrl: folderIcon,
            x: -850,
            y: 0,
        },
        {
            id: '2',
            label: 'arquivos',
            iconUrl: folderIcon,
            x: -850,
            y: 30,
        },
    ],
    updateWorkspaceIconPosition: (id, newX, newY) =>
        set((state) => ({
            workspaceIcons: state.workspaceIcons.map((icon) =>
                icon.id === id ? { ...icon, x: newX, y: newY } : icon,
            ),
        })),
}));

export default useUIStore;
