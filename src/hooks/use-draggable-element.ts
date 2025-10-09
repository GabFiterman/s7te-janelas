import { type PanInfo } from 'framer-motion';
import useUIStore from '@/store/uiStore';

type ElementType = 'icon' | 'window';

/**
 * Hook customizado para gerenciar a lógica de drag-and-drop de janelas e ícones.
 * @param id ID do elemento.
 * @param type Tipo do elemento ('icon' ou 'window').
 */
export function useDraggableElement(id: string, type: ElementType) {
    const { updateWorkspaceIconPosition, updateWindowPosition } = useUIStore();

    const handleDragEnd = (
        _event: MouseEvent | TouchEvent | PointerEvent,
        info: PanInfo,
    ) => {
        const newX = info.point.x;
        const newY = info.point.y;

        switch (type) {
            case 'icon': {
                updateWorkspaceIconPosition(id, newX, newY);
                break;
            }
            case 'window': {
                updateWindowPosition(id, newX, newY);
                break;
            }
            default:
                console.error('Tipo de elemento não suportado:', type);
                break;
        }
    };

    return {
        handleDragEnd,
        dragProps: {
            dragMomentum: false,
            dragElastic: 0,
            onDragEnd: handleDragEnd,
        },
    };
}

export default useDraggableElement;
