import { InternetExplorer, FileExplorer } from '@/components/apps';
import React from 'react';

export type AppName = 'InternetExplorer' | 'FileExplorer';

export const AppComponentMap: Record<AppName, React.ComponentType> = {
  InternetExplorer: InternetExplorer,
  FileExplorer: FileExplorer,
};

export const getAppComponent = (appName: AppName): React.ComponentType => {
  return AppComponentMap[appName];
};
