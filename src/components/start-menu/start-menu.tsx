import useUIStore from '@/store/uiStore';
import useStartMenuStates from './use-start-menu';

import { InputAndIcon } from '@/components';
import { indicationArrowIcon, personalUserIcon } from '@/assets';
import './start-menu.scss';

function StartMenu() {
  const { isStartMenuOpen } = useUIStore();

  const { handleAppClick, startMenuApps, startMenuShortcuts } = useStartMenuStates();

  return (
    isStartMenuOpen && (
      <div className="start-menu" onMouseDown={(event) => event.stopPropagation()}>
        <div className="start-menu-left-container">
          <div className="start-menu-apps">
            {startMenuApps.map((item) => (
              <div
                className="start-menu-app-item"
                key={item.id}
                onMouseDown={(event) => handleAppClick(event, item.action)}
              >
                <img src={item.icon} className="start-menu-icon" />
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
              <InputAndIcon type="text" placeholder="Pesquisar programas e arquivos" />
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
                    onMouseDown={(event) => handleAppClick(event, item.action)}
                  >
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="start-menu-right-bottom">
            <div className="start-menu-buttons-container">
              <button className="start-menu-button button-turn-off" onClick={() => console.log('DESLIGAR')}>
                Desligar
              </button>
              <button className="start-menu-button button-more-options" onClick={() => console.log('LIMPAR')}>
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
