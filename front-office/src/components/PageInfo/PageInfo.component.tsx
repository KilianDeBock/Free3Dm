import React from 'react';

interface PageInfoProps {
  children?: React.ReactNode;
}

export const PageInfoComponent = ({ children }: PageInfoProps) => (
  <section>This is a description of the current page!</section>
);
