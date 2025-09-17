import windowIcon from '@/assets/logo/windows-logo.png';
import internetExplorerIcon from '@/assets/icons/internet_explorer.webp';
import pictureIcon from '@/assets/icons/picture.webp';
import fileExplorerIcon from '@/assets/icons/file_explorer.webp';

function useFixedMenuStates() {
    const mainItem = {
        id: 1,
        label: 'FloatMenu',
        action: () => console.log('FloatMenu'),
        icon: windowIcon,
    };

    const menuItems = [
        {
            id: 2,
            label: 'Internet Explorer',
            action: () => console.log('Internet Explorer'),
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
