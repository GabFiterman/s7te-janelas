import { FixedMenu, IconLinkLabel, StartMenu } from '@/components';
import useUIStore from '@/store/uiStore';

import defaultWallpaper from '@/assets/wallpapers/main-background.jpg';
import './workspace.scss';

function Workspace() {
    const icons = useUIStore((state) => state.workspaceIcons);
    const style = {
        backgroundImage: `url(${defaultWallpaper})`,
    };
    const setIsStartMenuOpen = useUIStore((state) => state.setIsStartMenuOpen);

    return (
        <>
            <div className="workspace" style={style}>
                <div className="workspace-canvas">
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
