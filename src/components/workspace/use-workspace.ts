import { useRef } from 'react';
import defaultWallpaper from '@/assets/wallpapers/main-background.jpg';

function useWorkspace() {
    const style = {
        backgroundImage: `url(${defaultWallpaper})`,
    };
    const constraintsRef = useRef(null);

    return { style, constraintsRef };
}

export default useWorkspace;
