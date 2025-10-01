import { FixedMenu, IconLinkLabel, StartMenu, Window } from '@/components';
import useUIStore from '@/store/uiStore';

import defaultWallpaper from '@/assets/wallpapers/main-background.jpg';
import './workspace.scss';

function Workspace() {
    const icons = useUIStore((state) => state.workspaceIcons);
    const windows = useUIStore((state) => state.windows);
    const setIsStartMenuOpen = useUIStore((state) => state.setIsStartMenuOpen);

    const style = {
        backgroundImage: `url(${defaultWallpaper})`,
    };

    return (
        <>
            <div className="workspace" style={style}>
                <div className="workspace-canvas">
                    {windows.map((window) => (
                        <Window key={window.id} id={window.id} />
                    ))}

                    <div
                        className="workspace-canvas-icons"
                        onClick={() => setIsStartMenuOpen(false)}
                    >
                        {icons.map((icon) => (
                            <IconLinkLabel
                                key={icon.id}
                                id={icon.id}
                                label={icon.label}
                                icon={icon.iconUrl}
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
        </>
    );
}

export default Workspace;
