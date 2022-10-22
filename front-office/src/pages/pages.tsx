import { LAYOUTS, Layouts } from '../layouts';
import { Route } from 'react-router-dom';
import { Page, PAGES } from '../constants';
import { NotFoundPage } from './NotFound/NotFound.page';
import React from 'react';

export interface PagesProps {
  layout: Layouts;
  notFoundPage?: boolean;
}

export const pages = ({ layout, notFoundPage = false }: PagesProps) => {
  return (
    <Route element={LAYOUTS[layout]()}>
      {PAGES[layout].map((page: Page, index: number) => (
        <Route key={index} path={page.path} element={page.element} />
      ))}

      {/* If no pages were found throw error */}
      {notFoundPage && <Route path="*" element={<NotFoundPage />} />}
    </Route>
  );
};
