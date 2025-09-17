import { FixedMenu, IconLinkLabel } from '@/components';
import useUIStore from '@/store/uiStore';

import defaultWallpaper from '@/assets/wallpapers/main-background.jpg';
import './workspace.scss';

function Workspace() {
    const icons = useUIStore((state) => state.workspaceIcons);
    const style = {
        backgroundImage: `url(${defaultWallpaper})`,
    };

    return (
        <>
            <div className="workspace" style={style}>
                <div className="workspace-canvas">
                    <div className="workspace-canvas-icons">
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
                <div className="w-100">
                    <FixedMenu />
                </div>
            </div>
        </>
    );
}

export default Workspace;
