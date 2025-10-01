import useUIStore from '@/store/uiStore';

import windowIcon from '@/assets/logo/windows-logo.png';
import internetExplorerIcon from '@/assets/icons/internet_explorer.webp';
import pictureIcon from '@/assets/icons/picture.webp';
import fileExplorerIcon from '@/assets/icons/file_explorer.webp';

// TODO: Utilizar UUID para gerar os ids do sistema
const generateId = () =>
    Date.now().toString() + Math.random().toString(36).substring(2, 9);

function useFixedMenuStates() {
    const { toggleIsStartMenuOpen, openWindow } = useUIStore();

    const mainItem = {
        id: 1,
        label: 'FloatMenu',
        action: toggleIsStartMenuOpen,
        icon: windowIcon,
    };

    const menuItems = [
        {
            id: generateId(),
            label: 'Internet Explorer',
            action: () =>
                openWindow({
                    id: generateId(),
                    title: 'Internet Explorer',
                    appName: 'InternetExplorer',
                    width: 600,
                    height: 400,
                }),
            icon: internetExplorerIcon,
        },
        {
            id: 3,
            label: 'File Explorer',
            action: () => console.log('File Explorer'),
            icon: fileExplorerIcon,
        },
        {
            id: 4,
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
