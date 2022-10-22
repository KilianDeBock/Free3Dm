import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import { BaseLayout } from './layouts';
import { ROUTES } from './constants/routes';
import { HomePage, NotFoundPage } from './pages';
import './index.css';
import { AppProvider } from './contexts/App.context';

function App() {
  return (
    <CookiesProvider>
      <AppProvider>
        <Router>
          <Routes>
            <Route element={<BaseLayout />}>
              <Route index path={ROUTES.HOME} element={<HomePage />} />
              {/*<Route path={ROUTES.LANDING_PAGE} element={<NotFoundPage />} />*/}
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </Router>
      </AppProvider>
    </CookiesProvider>
  );
}

export default App;
