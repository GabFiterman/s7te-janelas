import { useRef } from 'react';
import useUIStore from '@/store/uiStore';
import defaultWallpaper from '@/assets/wallpapers/main-background.jpg';
import leavesWallpaper from '@/assets/wallpapers/leaves.jpg';

function useWorkspace() {
  const constraintsRef = useRef(null);
  const isStartMenuOpen = useUIStore((state) => state.isStartMenuOpen);
  const setIsStartMenuOpen = useUIStore((state) => state.setIsStartMenuOpen);

  const randomWallpaper = Math.random() < 0.5;
  const wallpaper = randomWallpaper ? defaultWallpaper : leavesWallpaper;

  const style = {
    backgroundImage: `url(${wallpaper})`,
  };

  function handleIconClick() {
    if (isStartMenuOpen) {
      setIsStartMenuOpen(false);
    }
  }

  return { constraintsRef, style, handleIconClick };
}

export default useWorkspace;
