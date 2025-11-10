import { useEffect, useState } from 'react';

import { NotepadController, NotepadCanvas } from './components';
import { type FileSystemItem } from '@/constants';

import './notepad.scss';

export interface NotepadProps {
  initialItem?: FileSystemItem;
}

function getAssetPath(item: FileSystemItem | undefined): string | null {
  if (!item) return null;

  const ssoBasePath = 'C:/USUÁRIOS/FITERMAN/';
  const assetBasePath = '/media-center/';

  if (item.path.toUpperCase().startsWith(ssoBasePath)) {
    const relativePath = item.path.substring(ssoBasePath.length);
    return assetBasePath + relativePath;
  }
  return null;
}

function Notepad({ initialItem }: NotepadProps) {
  const [initialTextSource, setInitialTextSource] = useState('');

  useEffect(() => {
    const assetPath = getAssetPath(initialItem);
    if (assetPath) {
      fetch(assetPath)
        .then((response) => response.text())
        .then((text) => {
          if (text.startsWith('<!doctype html>')) {
            return;
          } else {
            setInitialTextSource(text);
          }
        });
    }
  }, [initialItem]);

  return (
    <div className="notepad-container">
      <NotepadController />
      <NotepadCanvas defaultValue={initialTextSource} />
    </div>
  );
}

export default Notepad;
