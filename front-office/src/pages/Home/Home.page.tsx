import React, { useEffect } from 'react';

export const HomePage = (): JSX.Element => {
  useEffect(() => {
    document.title = 'Home - Free3Dm';
  });

  return (
    <section>
      <h1>Hello world, to Free3Dm</h1>
    </section>
  );
};
