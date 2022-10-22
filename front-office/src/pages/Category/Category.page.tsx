import React from 'react';
import { useApp } from '../../contexts';

export const CategoryPage = (props: any): JSX.Element => {
  useApp()?.setTitle('Home');

  console.log(props);

  return <>EEEE</>;
};
