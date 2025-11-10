import useUIStore from '@/store/uiStore';
import { generateUUID } from '@/utils';
import { type AppName } from '@/components/apps/app-config';

import { internetExplorerIcon, fileExplorerIcon, notepadIcon, mediaCenterImageIcon, videosIcon } from '@/assets/icons';
import windowIcon from '@/assets/logo/windows-logo.png';

const INTERNET_EXPLORER_WINDOW_ID = `internet-explorer-menu-window-${generateUUID()}`;
const FILE_EXPLORER_WINDOW_ID = `file-explorer-menu-window-${generateUUID()}`;
const NOTEPAD_WINDOW_ID = `notepad-menu-window-${generateUUID()}`;
const MEDIA_CENTER_IMAGE_WINDOW_ID = `media-center-image-menu-window-${generateUUID()}`;
const MEDIA_CENTER_VIDE_WINDOW_ID = `media-center-video-menu-window-${generateUUID()}`;

function useFixedMenuStates() {
  const { toggleIsStartMenuOpen, openWindow } = useUIStore();

  const mainItem = {
    id: '1',
    label: 'FloatMenu',
    action: toggleIsStartMenuOpen,
    icon: windowIcon,
  };

  const menuItems: (typeof mainItem & { appName?: AppName })[] = [
    // INTERNET EXPLORER
    {
      id: INTERNET_EXPLORER_WINDOW_ID,
      label: 'Internet Explorer',
      appName: 'InternetExplorer',
      action: () =>
        openWindow({
          id: INTERNET_EXPLORER_WINDOW_ID,
          title: 'Internet Explorer',
          appName: 'InternetExplorer',
          iconSrc: internetExplorerIcon,
        }),
      icon: internetExplorerIcon,
    },
    // FILE EXPLORER
    {
      id: FILE_EXPLORER_WINDOW_ID,
      label: 'File Explorer',
      appName: 'FileExplorer',
      action: () =>
        openWindow({
          id: FILE_EXPLORER_WINDOW_ID,
          title: 'File Explorer',
          appName: 'FileExplorer',
          iconSrc: fileExplorerIcon,
        }),
      icon: fileExplorerIcon,
    },
    // NOTEPAD
    {
      id: NOTEPAD_WINDOW_ID,
      label: 'Bloco de Notas',
      appName: 'Notepad',
      action: () =>
        openWindow({
          id: NOTEPAD_WINDOW_ID,
          title: 'Bloco de Notas',
          appName: 'Notepad',
          iconSrc: notepadIcon,
        }),
      icon: notepadIcon,
    },
    // MEDIA CENTER IMAGE
    {
      id: MEDIA_CENTER_IMAGE_WINDOW_ID,
      label: 'Visualizador de Fotos do Sete Janelas',
      appName: 'MediaCenterImage',
      action: () =>
        openWindow({
          id: MEDIA_CENTER_IMAGE_WINDOW_ID,
          title: 'Visualizador de Fotos do Sete Janelas',
          appName: 'MediaCenterImage',
          iconSrc: mediaCenterImageIcon,
        }),
      icon: mediaCenterImageIcon,
    },
    // MEDIA CENTER VIDEO
    {
      id: MEDIA_CENTER_VIDE_WINDOW_ID,
      label: 'Visualizador de Vídeos do Sete Janelas',
      appName: 'MediaCenterVideo',
      action: () =>
        openWindow({
          id: MEDIA_CENTER_VIDE_WINDOW_ID,
          title: 'Visualizador de Vídeos do Sete Janelas',
          appName: 'MediaCenterVideo',
          iconSrc: videosIcon,
        }),
      icon: videosIcon,
    },
  ];

  return {
    menuItems,
    mainItem,
  };
}

export default useFixedMenuStates;
