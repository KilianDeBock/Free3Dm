import { ROUTES } from './routes';
import { CategoryPage, HomePage } from '../pages';
import React from 'react';
import { Layouts } from '../layouts';

export interface Page {
  path: ROUTES;
  element: React.ReactNode;
}

export type Pages = {
  [key in Layouts]: Page[];
};

export const PAGES: Pages = {
  base: [
    {
      path: ROUTES.HOME,
      element: <HomePage />,
    },
    {
      path: ROUTES.CATEGORIES,
      element: <CategoryPage />,
    },
  ],
};
