import React, { createContext, useContext, useEffect, useState } from 'react';
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
  const [title, setTitle] = useState<string>('Home');

  useEffect(() => {
    document.title = `${title} - Free3Dm`;
  }, [title]);

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
