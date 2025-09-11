import useFixedMenuStates from './states';
import './styles.css';

function FixedMenu() {
    const { menuItems } = useFixedMenuStates();
    return (
        <>
            <div className="fixed-menu">
                {menuItems.map((item) => (
                    <a key={item.id} href={item.link} className="menu-item">
                        <img
                            src={item.icon}
                            alt={item.label}
                            className="menu-icon"
                        />
                    </a>
                ))}
            </div>
        </>
    );
}

export default FixedMenu;
