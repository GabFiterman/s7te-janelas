import { fileExplorerIcon, internetExplorerIcon } from '@/assets';

import { type AppName } from '@/components/apps/app-config';

import useUIStore from '@/store/uiStore';
import { useFileExplorerStore } from '@/components/apps/file-explorer/use-file-explorer';
import { ITEMS_MAP_ALL } from '@/constants';

const INTERNET_EXPLORER_WINDOW_ID = 'internet-explorer-window';
const FILE_EXPLORER_WINDOW_ID = `file-explorer-window`;

const FILE_EXPLORER_INITIAL_PATH = ITEMS_MAP_ALL['C:/USUARIOS/FITERMAN/PROJETOS'].path;
const FILE_EXPLORER_DOCUMENTS_PATH = ITEMS_MAP_ALL['C:/USUARIOS/FITERMAN/DOCUMENTOS'].path;
const FILE_EXPLORER_IMAGES_PATH = ITEMS_MAP_ALL['C:/USUARIOS/FITERMAN/IMAGENS'].path;

function useStartMenuStates() {
  const { openWindow, toggleIsStartMenuOpen, activeWindowsByApp } = useUIStore();
  const { setCurrentPath } = useFileExplorerStore();

  const startMenuApps = [
    {
      id: 1,
      label: 'Internet Explorer',
      action: () => {
        openWindow({
          id: INTERNET_EXPLORER_WINDOW_ID,
          title: 'Internet Explorer',
          appName: 'InternetExplorer' as AppName,
          iconSrc: internetExplorerIcon,
        });
      },
      icon: internetExplorerIcon,
    },
    {
      id: 2,
      label: 'File Explorer',
      action: () => {
        const activeWindows = activeWindowsByApp();
        if (!activeWindows['FileExplorer'] || activeWindows['FileExplorer']?.length === 0) {
          setCurrentPath(FILE_EXPLORER_INITIAL_PATH);
        }
        openWindow({
          id: FILE_EXPLORER_WINDOW_ID,
          title: 'File Explorer',
          appName: 'FileExplorer' as AppName,
          iconSrc: fileExplorerIcon,
        });
      },
      icon: fileExplorerIcon,
    },
  ];

  const startMenuShortcuts = [
    {
      id: 1,
      label: 'Fiterman',
      action: () => console.log('Fiterman Shortcut'),
    },
    {
      id: 2,
      label: 'Documentos',
      action: () => {
        setCurrentPath(FILE_EXPLORER_DOCUMENTS_PATH);
        openWindow({
          id: FILE_EXPLORER_WINDOW_ID,
          title: 'File Explorer',
          appName: 'FileExplorer' as AppName,
          iconSrc: fileExplorerIcon,
        });
      },
    },
    {
      id: 3,
      label: 'Imagens',
      action: () => {
        setCurrentPath(FILE_EXPLORER_IMAGES_PATH);
        openWindow({
          id: FILE_EXPLORER_WINDOW_ID,
          title: 'File Explorer',
          appName: 'FileExplorer' as AppName,
          iconSrc: fileExplorerIcon,
        });
      },
    },
  ];

  function handleAppClick(event: React.MouseEvent<HTMLDivElement>, action: () => void) {
    event.stopPropagation();
    action();
    toggleIsStartMenuOpen();
  }

  return { startMenuApps, startMenuShortcuts, handleAppClick };
}

export default useStartMenuStates;
