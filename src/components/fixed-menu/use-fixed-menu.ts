import windowIcon from '@/assets/logo/windows-logo.png';

function useFixedMenuStates() {
    const menuItems = [
        {
            id: 1,
            label: 'FloatMenu',
            link: '/float-menu',
            icon: windowIcon,
        },
    ];
    return {
        menuItems,
    };
}

export default useFixedMenuStates;
