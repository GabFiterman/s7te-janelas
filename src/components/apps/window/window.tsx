import { motion } from 'framer-motion';

import useUIStore from '@/store/uiStore';
import { useDraggableElement, useWindowSize } from '@/hooks';
import { getAppComponent } from '@/components/apps/app-config';

import './window.scss';

interface WindowProps {
    id: string;
}

function Window({ id }: WindowProps) {
    const windowData = useUIStore((state) =>
        state.windows.find((win) => win.id === id),
    );

    const { closeWindow, focusWindow, updateWindowStatus } = useUIStore();

    const viewportSize = useWindowSize();
    const { dragProps } = useDraggableElement(id, 'window');

    if (!windowData) return null;

    const { title, x, y, width, height, status, zIndex, appName } = windowData;

    if (status === 'minimized') {
        // TODO: Implementar a lógica de minimização
        return null;
    }

    const AppComponent = getAppComponent(appName);

    const dragConstraints = {
        left: 0,
        top: 0,
        right: viewportSize.width - width - 3,
        bottom: viewportSize.height - height - 3,
    };

    return (
        <motion.div
            className={`window ${status}`}
            dragConstraints={dragConstraints}
            onMouseDown={() => focusWindow(id)}
            style={{ x, y, width, height, zIndex }}
            {...dragProps}
        >
            <div className="title-bar">
                <span className="title">
                    {/*TODO: Adicionar ícone do app aqui*/} {title}
                </span>
                <div className="controls">
                    {/* TODO: Atualizar ícones de controle*/}
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
