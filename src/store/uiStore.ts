import { create } from 'zustand';
import folderIcon from '@/assets/icons/folder-1.ico';

interface Icon {
    id: string;
    label: string;
    iconUrl: string;
    x: number;
    y: number;
}

interface UIState {
    icons: Icon[];
    updateIconPosition: (id: string, newX: number, newY: number) => void;
}

const useUIStore = create<UIState>((set) => ({
    icons: [
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
    updateIconPosition: (id, newX, newY) =>
        set((state) => ({
            icons: state.icons.map((icon) =>
                icon.id === id ? { ...icon, x: newX, y: newY } : icon,
            ),
        })),
}));

export default useUIStore;
