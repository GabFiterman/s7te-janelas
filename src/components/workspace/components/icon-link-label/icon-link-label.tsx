import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

import { generateUUID, isImageByExtension } from '@/utils';
import { ITEMS_MAP_WORKSPACE } from '@/constants';
import { useDraggableElement } from '@/hooks';
import useUiStore, { type WorkspaceIcon } from '@/store/uiStore';
import { useFileExplorerStore } from '@/components/apps/file-explorer/use-file-explorer';

import { fileExplorerIcon, mediaCenterImageIcon } from '@/assets/icons';
import './icon-link-label.scss';

interface IconLinkLabelProps {
  icon: WorkspaceIcon;
  className?: string;
  size?: number;
  constraintsRef?: React.RefObject<HTMLDivElement | null>;
}

function IconLinkLabel({ className, constraintsRef, icon, size = 64 }: IconLinkLabelProps) {
  const { extension, iconSrc, label, path, type, uri, x, y } = icon;
  const FILE_EXPLORER_WINDOW_ID = `file-explorer-workspace-window-${uri}`;

  const { dragProps } = useDraggableElement(path, 'icon');

  const { openWindow, windows, focusWindow, updateWindowStatus } = useUiStore();
  const { setCurrentPath } = useFileExplorerStore();

  const iconRef = useRef<HTMLDivElement>(null);
  const [iconDimensions, setIconDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (iconRef.current && iconDimensions.width === 0) {
      const { offsetWidth, offsetHeight } = iconRef.current;
      setIconDimensions({ width: offsetWidth, height: offsetHeight });
    }
  }, [iconDimensions.width]);

  function handleDoubleClick(event: React.MouseEvent<HTMLDivElement>) {
    event.stopPropagation();
    event.preventDefault();

    if (type === 'folder') {
      const explorerWindow = windows.find((w) => w.id === FILE_EXPLORER_WINDOW_ID);

      if (explorerWindow) {
        focusWindow(FILE_EXPLORER_WINDOW_ID);
        updateWindowStatus(FILE_EXPLORER_WINDOW_ID, 'normal');
        return;
      }

      openWindow({
        id: FILE_EXPLORER_WINDOW_ID,
        appName: 'FileExplorer',
        iconSrc: fileExplorerIcon,
        title: 'File Explorer',
      });

      setCurrentPath(path);
      focusWindow(FILE_EXPLORER_WINDOW_ID);
    }

    if (type === 'file') {
      if (isImageByExtension(extension)) {
        const imagePlaylist = ITEMS_MAP_WORKSPACE.filter(
          (item) => item.type === 'file' && isImageByExtension(item.extension)
        ).map((item) => ({ ...item }));

        const MEDIA_CENTER_IMAGE_WINDOW_ID = `media-center-image-workspace-window-${generateUUID}`;

        openWindow({
          id: MEDIA_CENTER_IMAGE_WINDOW_ID,
          appName: 'MediaCenterImage',
          iconSrc: mediaCenterImageIcon,
          title: label + extension,
          appProps: {
            initialItem: icon,
            playlist: imagePlaylist,
          },
        });

        focusWindow(MEDIA_CENTER_IMAGE_WINDOW_ID);
        updateWindowStatus(MEDIA_CENTER_IMAGE_WINDOW_ID, 'normal');
      }
    }
  }

  return icon ? (
    <motion.div
      className={`icon-link-label`}
      dragConstraints={constraintsRef}
      drag={true}
      style={{
        x: x,
        y: y,
        touchAction: 'none',
        userSelect: 'none',
      }}
      ref={iconRef}
      {...dragProps}
    >
      <div className="icon-container" onDoubleClick={(event) => handleDoubleClick(event)}>
        <div className="icon-image">
          <img
            src={iconSrc}
            alt={`${label} Icon`}
            style={{
              width: `${size}px`,
              height: `${size}px`,
            }}
            className={`icon ${className || ''}`}
            draggable={false}
          />
        </div>
        <span className="label">
          {label}
          {type === 'file' && extension ? `${extension}` : ''}
        </span>
      </div>
    </motion.div>
  ) : null;
}

export default IconLinkLabel;
