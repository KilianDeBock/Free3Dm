import React, { createContext, useContext, useEffect, useState } from 'react';
import { CONSTS } from '../constants';

export interface AuthContextInterface {
  currentUser: string | null;
  login: (username: string, password: string) => Promise<boolean>;
  register: (
    username: string,
    email: string,
    password: string
  ) => Promise<boolean>;
  logout: () => void;
}

export interface AuthContextProps {
  children: React.ReactNode;
}

export const AuthContext = createContext<AuthContextInterface | null>(null);
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: AuthContextProps) => {
  const [currentUser, setCurrentUser] = useState<string | null>(null);

  useEffect(() => {
    localStorage.setItem(
      CONSTS.AUTH_KEY_LOCALSTORAGE,
      JSON.stringify(currentUser)
    );
  }, [currentUser]);

  const login = async (username: string, password: string) => {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username,
          password,
        }),
      });
      const user = await response.json();
      if (!user?.id) return false;
      setCurrentUser(user);
      return true;
    } catch (error) {
      return false;
    }
  };

  const register = async (
    username: string,
    email: string,
    password: string
  ) => {
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });
      const user = await response.json();
      if (user?.error) {
        throw new Error('register failed');
      }

      if (!user?.id) return false;
      setCurrentUser(user);
      return true;
    } catch (error) {
      return false;
    }
  };

  const logout = async () => {
    try {
      setCurrentUser(null);
      const response = await fetch('/api/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(currentUser),
      });
      const userLoggedOut = await response.json();
    } catch (error) {
      return false;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
