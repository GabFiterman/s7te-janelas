import useUIStore from '@/store/uiStore';
import { generateUUID } from '@/utils';
import { type AppName } from '@/components/apps/app-config';

import { internetExplorerIcon, blocksIcon, fileExplorerIcon, notepadIcon } from '@/assets/icons';
import windowIcon from '@/assets/logo/windows-logo.png';

const INTERNET_EXPLORER_WINDOW_ID = `internet-explorer-menu-window-${generateUUID()}`;
const FILE_EXPLORER_WINDOW_ID = `file-explorer-menu-window-${generateUUID()}`;
const BLOCKS_WINDOW_ID = `blocks-menu-window-${generateUUID()}`;
const NOTEPAD_WINDOW_ID = `notepad-menu-window-${generateUUID()}`;

function useFixedMenuStates() {
  const { toggleIsStartMenuOpen, openWindow } = useUIStore();

  const mainItem = {
    id: '1',
    label: 'FloatMenu',
    action: toggleIsStartMenuOpen,
    icon: windowIcon,
  };

  const menuItems: (typeof mainItem & { appName?: AppName })[] = [
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
    {
      id: BLOCKS_WINDOW_ID,
      label: 'Blocks',
      action: () => console.log('Blocks'),
      icon: blocksIcon,
    },
  ];

  return {
    menuItems,
    mainItem,
  };
}

export default useFixedMenuStates;
