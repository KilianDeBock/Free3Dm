import React, { useEffect } from 'react';

export const NotFoundPage = (): JSX.Element => {
  useEffect(() => {
    document.title = 'Page Not Found - Free3Dm';
  });

  return (
    <section>
      <h1>404</h1>
      <h2>Page Not Found</h2>
    </section>
  );
};
