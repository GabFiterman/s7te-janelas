import { InternetExplorer } from '@/components/apps';
import React from 'react';

export type AppName = 'InternetExplorer';

export const AppComponentMap: Record<AppName, React.ComponentType> = {
  InternetExplorer: InternetExplorer,
};

export const getAppComponent = (appName: AppName): React.ComponentType => {
  return AppComponentMap[appName];
};
