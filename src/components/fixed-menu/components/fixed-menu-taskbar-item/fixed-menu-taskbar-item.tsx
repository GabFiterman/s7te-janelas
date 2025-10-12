import { useState } from 'react';
import useUIStore, { type WindowState } from '@/store/uiStore';
import { Close } from '@/assets/icons';

interface FixedMenuTaskbarItemProps {
  appName: string;
  iconSrc: string;
  windows: WindowState[];

  onOpenNew: () => void;
}

function FixedMenuTaskbarItem({ appName, iconSrc, windows, onOpenNew }: FixedMenuTaskbarItemProps) {
  const { closeWindow, focusWindow, updateWindowStatus } = useUIStore();
  const [isHovering, setIsHovering] = useState(false);

  const hasActiveInstances = windows.length > 0;
  const visibleWindow = windows.find((w) => w.status !== 'minimized');
  const firstInstance = windows[0];

  const handleRestoreOrFocus = (windowId: string, currentStatus: WindowState['status']) => {
    if (currentStatus === 'minimized') {
      updateWindowStatus(windowId, 'normal');
    }
    focusWindow(windowId);
    setIsHovering(false);
  };

  const handleClose = (windowId: string) => {
    closeWindow(windowId);
  };

  const handleTaskbarIconClick = () => {
    if (!hasActiveInstances) {
      onOpenNew();
      return;
    }

    if (visibleWindow) {
      updateWindowStatus(visibleWindow.id, 'minimized');
    } else if (firstInstance) {
      handleRestoreOrFocus(firstInstance.id, firstInstance.status);
    }
  };

  const renderWindowList = () => {
    if (!isHovering || windows.length === 0) return null;

    return (
      <div className="taskbar-popup-list">
        {windows.map((win) => (
          <div
            key={win.id}
            onMouseDown={() => handleRestoreOrFocus(win.id, win.status)}
            className={`taskbar-popup-item ${win.status !== 'minimized' ? 'focused' : ''}`}
          >
            <img src={win.iconSrc} alt={win.title} className="popup-icon" />
            <span className="popup-title">{win.title}</span>
            <button
              className="popup-close-btn"
              onMouseDown={(e) => {
                e.stopPropagation();
                handleClose(win.id);
              }}
            >
              <Close size={14} color="#cb3737ff" />
            </button>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div
      className={`menu-item taskbar-item ${windows.length > 0 ? 'active' : ''}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onMouseDown={handleTaskbarIconClick}
    >
      <img src={iconSrc} alt={appName} className="menu-icon" />

      {renderWindowList()}
    </div>
  );
}

export default FixedMenuTaskbarItem;
