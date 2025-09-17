import useFixedMenuStates from './use-fixed-menu';
import './fixed-menu.scss';

function FixedMenu() {
    const { menuItems } = useFixedMenuStates();
    return (
        <>
            <div className="fixed-menu">
                <img
                    src={menuItems[0].icon}
                    alt={menuItems[0].label}
                    className="main-icon"
                />
            </div>
        </>
    );
}

export default FixedMenu;
