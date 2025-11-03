import { InternetExplorer, FileExplorer, Notepad } from '@/components/apps';
import React from 'react';

export type AppName = 'InternetExplorer' | 'FileExplorer' | 'Notepad';

export const AppComponentMap: Record<AppName, React.ComponentType> = {
  InternetExplorer: InternetExplorer,
  FileExplorer: FileExplorer,
  Notepad: Notepad,
};

export const getAppComponent = (appName: AppName): React.ComponentType => {
  return AppComponentMap[appName];
};
