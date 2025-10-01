import { motion } from 'framer-motion';
import type { PanInfo } from 'framer-motion';

import useUIStore from '@/store/uiStore';
import { useWindowSize } from '@/hooks';
import { getAppComponent } from '@/components/apps/app-config';

import './window.scss';

interface WindowProps {
    id: string;
}

function Window({ id }: WindowProps) {
    const windowData = useUIStore((state) =>
        state.windows.find((win) => win.id === id),
    );

    const {
        closeWindow,
        updateWindowPosition,
        updateWindowStatus,
        focusWindow,
    } = useUIStore();

    const viewportSize = useWindowSize();

    if (!windowData) return null;

    const { title, x, y, width, height, status, zIndex, appName } = windowData;

    if (status === 'minimized') {
        // TODO: Implementar a lógica de minimização
        return null;
    }

    const handleDragEnd = (
        _event: MouseEvent | TouchEvent | PointerEvent,
        info: PanInfo,
    ) => {
        updateWindowPosition(id, info.point.x, info.point.y);
    };

    const AppComponent = getAppComponent(appName);

    const dragConstraints = {
        left: 0,
        top: 0,
        right: viewportSize.width - width,
        bottom: viewportSize.height - height,
    };

    return (
        <motion.div
            className={`window ${status}`}
            drag={true}
            dragConstraints={dragConstraints}
            dragElastic={0}
            dragMomentum={false}
            onDragEnd={handleDragEnd}
            onMouseDown={() => focusWindow(id)}
            style={{ x, y, width, height, zIndex }}
        >
            <div className="title-bar">
                <span className="title">
                    {/*TODO: Adicionar ícone do app aqui*/} {title}
                </span>
                <div className="controls">
                    {/* TODO: Atualizar ícones */}
                    <button onClick={() => updateWindowStatus(id, 'minimized')}>
                        _
                    </button>
                    <button
                        onClick={() =>
                            updateWindowStatus(
                                id,
                                status === 'maximized' ? 'normal' : 'maximized',
                            )
                        }
                    >
                        ▢
                    </button>
                    <button className="close" onClick={() => closeWindow(id)}>
                        X
                    </button>
                </div>
            </div>

            <div className="content">
                <AppComponent />
            </div>
        </motion.div>
    );
}

export default Window;
