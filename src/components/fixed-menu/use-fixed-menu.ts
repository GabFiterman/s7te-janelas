import useUIStore from '@/store/uiStore';

import { type AppName } from '@/components/apps/app-config';

import { internetExplorerIcon, pictureIcon, fileExplorerIcon } from '@/assets/icons';
import windowIcon from '@/assets/logo/windows-logo.png';

// TODO: Utilizar UUID para gerar os ids do sistema
const generateId = () => Date.now().toString() + Math.random().toString(36).substring(2, 9);

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
      id: generateId(),
      label: 'Internet Explorer',
      appName: 'InternetExplorer',
      action: () =>
        openWindow({
          id: generateId(),
          title: 'Internet Explorer',
          appName: 'InternetExplorer',
          width: 1200,
          height: 800,
          iconSrc: internetExplorerIcon,
        }),
      icon: internetExplorerIcon,
    },
    {
      id: generateId(),
      label: 'File Explorer',
      appName: 'FileExplorer',
      action: () =>
        openWindow({
          id: generateId(),
          title: 'File Explorer',
          appName: 'FileExplorer',
          width: 1200,
          height: 800,
          iconSrc: fileExplorerIcon,
        }),
      icon: fileExplorerIcon,
    },
    {
      id: generateId(),
      label: 'Picture',
      action: () => console.log('Picture'),
      icon: pictureIcon,
    },
  ];

  return {
    menuItems,
    mainItem,
  };
}

export default useFixedMenuStates;
