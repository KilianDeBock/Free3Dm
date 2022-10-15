import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import { BaseLayout } from './layouts';
import { ROUTES } from './constants/routes';
import { HomePage, NotFoundPage } from './pages';
import './index.css';

function App() {
  return (
    <CookiesProvider>
      <Router>
        <Routes>
          <Route element={<BaseLayout />}>
            <Route index path={ROUTES.HOME} element={<HomePage />} />
            {/*<Route path={ROUTES.LANDING_PAGE} element={<NotFoundPage />} />*/}
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Router>
    </CookiesProvider>
  );
}

export default App;
