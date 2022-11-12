import React from 'react';
import { useApp } from '../../contexts';
import { _HomePageBottomBanner } from '@content/main/footer';

export const NotFoundPage = (): JSX.Element => {
  const app = useApp();
  app?.setTitle('Page Not Found');
  app?.setFooterInfoText(_HomePageBottomBanner);

  return (
    <section>
      <h1>404</h1>
      <h2>Page Not Found</h2>
    </section>
  );
};
