import { motion, useDragControls } from 'framer-motion';

import useUIStore from '@/store/uiStore';
import { useDraggableElement, useWindowSize } from '@/hooks';
import { getAppComponent } from '@/components/apps/app-config';

import WindowLayout from './window-layout';

import './window.scss';

interface WindowProps {
  id: string;
}

function Window({ id }: WindowProps) {
  const windowData = useUIStore((state) => state.windows.find((win) => win.id === id));
  const closeWindow = useUIStore((state) => state.closeWindow);
  const focusWindow = useUIStore((state) => state.focusWindow);
  const updateWindowStatus = useUIStore((state) => state.updateWindowStatus);
  const FIXED_MENU_HEIGHT = useUIStore((state) => state.FIXED_MENU_HEIGHT);

  const viewportSize = useWindowSize();
  const { dragProps } = useDraggableElement(id, 'window');
  const controls = useDragControls();

  if (!windowData) return null;

  const { appName, height, iconSrc, status, title, width, x, y, zIndex } = windowData;
  const AppComponent = getAppComponent(appName);

  if (status === 'minimized') return null;

  let styleMotionProps = {};
  let isDraggable = false;
  let dragConstraints = {};

  const currentWidth = width;
  const currentHeight = height;

  if (status === 'maximized') {
    styleMotionProps = {
      left: 0,
      top: 0,
      width: viewportSize.width,
      height: viewportSize.height - FIXED_MENU_HEIGHT,
    };
    isDraggable = false;
  } else if (status === 'normal') {
    styleMotionProps = { x, y, width, height };
    isDraggable = true;
    dragConstraints = {
      left: 0,
      top: 0,
      right: viewportSize.width - currentWidth,
      bottom: viewportSize.height - currentHeight - FIXED_MENU_HEIGHT,
    };
  }

  const handleStartDrag = (event: React.PointerEvent) => {
    if (event.button !== 2) controls.start(event);
  };
  const handleClose = () => closeWindow(id);
  const handleMinimize = () => updateWindowStatus(id, 'minimized');
  const handleMaximize = () => updateWindowStatus(id, status === 'maximized' ? 'normal' : 'maximized');

  return (
    <motion.div
      className={`window ${status}`}
      dragControls={controls}
      drag={isDraggable}
      dragListener={false}
      dragConstraints={dragConstraints}
      onMouseDown={() => focusWindow(id)}
      initial={{ x, y }}
      style={{
        ...styleMotionProps,
        zIndex,
      }}
      {...dragProps}
    >
      <WindowLayout
        iconSrc={iconSrc}
        title={title}
        handleClose={handleClose}
        handleMinimize={handleMinimize}
        handleMaximize={handleMaximize}
        handleStartDrag={handleStartDrag}
      >
        <AppComponent />
      </WindowLayout>
    </motion.div>
  );
}

export default Window;
