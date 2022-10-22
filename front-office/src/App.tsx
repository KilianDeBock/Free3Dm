import React from 'react';
import './index.css';
import { AppProvider } from './contexts';
import { pages } from './pages';

function App() {
  return (
    <AppProvider>
      {pages({
        layout: 'base',
        notFoundPage: true,
      })}
    </AppProvider>
  );
}

export default App;
