import React, { createContext, useContext } from 'react';
import { AuthProvider } from './';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';

export type Path = [string, string][];

export interface AppContextInterface {
  title: string;
  setTitle: (title: string) => void;
  navigationInfo: NavigationInfo;
  setNavigationInfo: (path: Path | 'reset' | null, text?: string) => void;
  setNavigationUpdate: (update: () => void) => void;
}

export interface AppContextProps {
  children: React.ReactNode;
}

export interface NavigationInfo {
  path: Path;
  text: string;
}

export const AppContext = createContext<AppContextInterface | null>(null);
export const useApp = () => useContext(AppContext);

export const AppProvider = ({ children }: AppContextProps) => {
  // I'm not using a useState since it does not matter if the title is updated
  // and the component is not re-rendered
  let title = 'Home';

  const setTitle = (newTitle: string) => {
    if (newTitle) {
      title = newTitle;
      document.title = `${newTitle} - Free3Dm`;
    }
  };

  let updateNavigation = () => {};
  const setNavigationUpdate = (update: () => void) => {
    updateNavigation = update;
  };

  const navigationInfo: NavigationInfo = {
    path: [['Home', '/']],
    text: '',
  };

  const setNavigationInfo = (
    path: Path | 'reset' | null,
    text: string = ''
  ) => {
    const newNavigationInfo = { ...navigationInfo };
    if (typeof path === 'string' && path === 'reset')
      newNavigationInfo.path = [['Home', '/']];
    else if (path) newNavigationInfo.path = [['Home', '/'], ...path];
    if (text) newNavigationInfo.text = text;
    if (
      JSON.stringify(navigationInfo.path) !==
        JSON.stringify(newNavigationInfo.path) ||
      navigationInfo.text !== newNavigationInfo.text
    ) {
      navigationInfo.path = newNavigationInfo.path;
      navigationInfo.text = newNavigationInfo.text;
      updateNavigation();
    }
  };

  return (
    <AppContext.Provider
      value={{
        title,
        setTitle,
        navigationInfo,
        setNavigationInfo,
        setNavigationUpdate,
      }}
    >
      <CookiesProvider>
        <AuthProvider>
          <Router>
            <Routes>{children}</Routes>
          </Router>
        </AuthProvider>
      </CookiesProvider>
    </AppContext.Provider>
  );
};
