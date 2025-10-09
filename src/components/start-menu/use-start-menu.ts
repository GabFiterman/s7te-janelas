import {
  blocksIcon,
  cdPlayerIcon,
  computerColorsIcon,
  fileExplorerIcon,
  gameHubIcon,
  internetExplorerIcon,
  pictureIcon,
  sheetMusicIcon,
  usersIcon,
} from '@/assets/icons';

function useStartMenuStates() {
  const startMenuApps = [
    {
      id: 1,
      label: 'Internet Explorer',
      action: () => console.log('Internet Explorer Start Menu'),
      icon: internetExplorerIcon,
    },
    {
      id: 2,
      label: 'File Explorer',
      action: () => console.log('File Explorer Start Menu'),
      icon: fileExplorerIcon,
    },
    {
      id: 3,
      label: 'Picture',
      action: () => console.log('Picture Start Menu'),
      icon: pictureIcon,
    },
    {
      id: 4,
      label: 'Blocks',
      action: () => console.log('Blocks Start Menu'),
      icon: blocksIcon,
    },
    {
      id: 5,
      label: 'CD Player',
      action: () => console.log('CD Player Start Menu'),
      icon: cdPlayerIcon,
    },
    {
      id: 6,
      label: 'Computer Colors',
      action: () => console.log('Computer Colors Start Menu'),
      icon: computerColorsIcon,
    },
    {
      id: 7,
      label: 'Game Hub',
      action: () => console.log('GameHub Start Menu'),
      icon: gameHubIcon,
    },
    {
      id: 8,
      label: 'Sheet Music',
      action: () => console.log('Sheet Music Start Menu'),
      icon: sheetMusicIcon,
    },
    {
      id: 9,
      label: 'Users',
      action: () => console.log('Users Start Menu'),
      icon: usersIcon,
    },
  ];

  const startMenuShortcuts = [
    {
      id: 1,
      label: 'Fiterman',
      action: () => console.log('Fiterman Shortcut'),
    },
    {
      id: 2,
      label: 'Documentos',
      action: () => console.log('Documents Shortcut'),
    },
    {
      id: 3,
      label: 'Imagens',
      action: () => console.log('Pictures Shortcut'),
    },
    {
      id: 4,
      label: 'Músicas',
      action: () => console.log('Blocks Shortcut'),
    },
  ];
  return { startMenuApps, startMenuShortcuts };
}

export default useStartMenuStates;
