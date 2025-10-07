import useUIStore from '@/store/uiStore';
import useStartMenuStates from './use-start-menu';

import { indicationArrowIcon, personalUserIcon } from '@/assets/icons';
import './start-menu.scss';

function StartMenu() {
    const { isStartMenuOpen } = useUIStore();

    const { startMenuApps, startMenuShortcuts } = useStartMenuStates();

    return (
        isStartMenuOpen && (
            <div className="start-menu">
                <div className="start-menu-left-container">
                    <div className="start-menu-apps">
                        {startMenuApps.map((item) => (
                            <div className="start-menu-app-item" key={item.id}>
                                <img
                                    src={item.icon}
                                    className="start-menu-icon"
                                    onClick={item.action}
                                />
                                <span>{item.label}</span>
                            </div>
                        ))}
                    </div>
                    <div className="start-menu-app-controller">
                        <div className="start-menu-app-divider" />
                        <div className="start-menu-app-all-apps">
                            <img src={indicationArrowIcon} />

                            <span>Todos os programas</span>
                        </div>
                        <div className="start-menu-app-search">
                            {/* TODO: Fazer componente personalizado para input, com o ícone embutido */}
                            <input
                                id="start-menu-app-search"
                                type="text"
                                placeholder="Pesquisar programas e arquivos"
                            />
                        </div>
                    </div>
                </div>
                <div className="start-menu-right-container">
                    <div className="start-menu-right-top">
                        <div className="start-menu-user-image">
                            <img src={personalUserIcon} />
                        </div>
                        <div className="start-menu-shortcuts-container">
                            <div className="start-menu-shortcuts">
                                {startMenuShortcuts.map((item) => (
                                    <div
                                        key={item.id}
                                        className="start-menu-shortcut-item"
                                        onClick={item.action}
                                    >
                                        <span>{item.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="start-menu-right-bottom">
                        <div className="start-menu-buttons-container">
                            <button
                                className="start-menu-button button-turn-off"
                                onClick={() => console.log('DESLIGAR')}
                            >
                                Desligar
                            </button>
                            <button
                                className="start-menu-button button-more-options"
                                onClick={() => console.log('LIMPAR')}
                            >
                                <img src={indicationArrowIcon} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    );
}

export default StartMenu;
