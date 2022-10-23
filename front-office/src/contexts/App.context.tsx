import React, { createContext, useContext } from 'react';
import { AuthProvider } from './';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';

export interface AppContextInterface {
  title: string;
  setTitle: (title: string) => void;
}

export interface AppContextProps {
  children: React.ReactNode;
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

  return (
    <AppContext.Provider
      value={{
        title,
        setTitle,
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
