import { useRef } from 'react';
import useUIStore from '@/store/uiStore';
import defaultWallpaper from '@/assets/wallpapers/main-background.jpg';

function useWorkspace() {
  const constraintsRef = useRef(null);
  const isStartMenuOpen = useUIStore((state) => state.isStartMenuOpen);
  const setIsStartMenuOpen = useUIStore((state) => state.setIsStartMenuOpen);

  const style = {
    backgroundImage: `url(${defaultWallpaper})`,
  };

  function handleIconClick() {
    if (isStartMenuOpen) {
      setIsStartMenuOpen(false);
    }
  }

  return { constraintsRef, style, handleIconClick };
}

export default useWorkspace;
