import { InternetExplorer, FileExplorer, Notepad, MediaCenterImage } from '@/components/apps';
import React from 'react';

export type AppName = 'InternetExplorer' | 'FileExplorer' | 'Notepad' | 'MediaCenterImage';

export const AppComponentMap: Record<AppName, React.ComponentType> = {
  InternetExplorer: InternetExplorer,
  FileExplorer: FileExplorer,
  Notepad: Notepad,
  MediaCenterImage: MediaCenterImage,
};

export const getAppComponent = (appName: AppName): React.ComponentType => {
  return AppComponentMap[appName];
};
