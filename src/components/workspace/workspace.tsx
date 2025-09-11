import { FixedMenu } from '@/components';
import defaultWallpaper from '/wallpapers/main-background.jpg';

import './workspace.scss';

function Workspace() {
    const style = {
        backgroundImage: `url(${defaultWallpaper})`,
    };

    return (
        <>
            <div className="workspace" style={style}>
                <div>Workspace</div>
                <FixedMenu />
            </div>
        </>
    );
}

export default Workspace;
