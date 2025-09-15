import { FixedMenu, IconLinkLabel } from '@/components';
import defaultWallpaper from '@/assets/wallpapers/main-background.jpg';
import defaultWallpaper from '/wallpapers/main-background.jpg';

import './workspace.scss';

function Workspace() {
    const style = {
        backgroundImage: `url(${defaultWallpaper})`,
    };

    return (
        <>
            <div className="workspace" style={style}>
                <div className="workspace-canvas">
                    <IconLinkLabel label="documentos importantes" />
                    <IconLinkLabel label="arquivos" />
                </div>
                <div className="w-100">
                    <FixedMenu />
                </div>
            </div>
        </>
    );
}

export default Workspace;
