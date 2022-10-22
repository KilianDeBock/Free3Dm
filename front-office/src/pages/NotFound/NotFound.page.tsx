import React from 'react';
import { useApp } from '../../contexts';

export const NotFoundPage = (): JSX.Element => {
  useApp()?.setTitle('Page Not Found');

  return (
    <section>
      <h1>404</h1>
      <h2>Page Not Found</h2>
    </section>
  );
};
