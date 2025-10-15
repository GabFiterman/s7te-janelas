import useWorkspace from './use-workspace';
import useUIStore from '@/store/uiStore';

import { FixedMenu, StartMenu, Window } from '@/components';
import { IconLinkLabel } from './components';

import './workspace.scss';

function Workspace() {
  const { workspaceIcons, windows } = useUIStore();
  const { style, constraintsRef, handleIconClick } = useWorkspace();

  return (
    <div className="workspace" style={style} onMouseDown={() => handleIconClick()}>
      <div className="workspace-canvas">
        {windows.map((window) => (
          <Window key={window.id} id={window.id} />
        ))}

        <div className="workspace-canvas-icons" ref={constraintsRef}>
          {workspaceIcons.map((icon) => (
            <IconLinkLabel
              key={icon.id}
              id={icon.id}
              label={icon.label}
              icon={icon.iconUrl}
              constraintsRef={constraintsRef}
            />
          ))}
        </div>
      </div>
      <div className="workspace-floating-menu-container">
        <StartMenu />
      </div>
      <div className="workspace-fixed-menu-container">
        <FixedMenu />
      </div>
    </div>
  );
}

export default Workspace;
