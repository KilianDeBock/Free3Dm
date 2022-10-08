import React from 'react';
import { Outlet } from 'react-router-dom';
import './reset.css';
import './defaults.css';
import './eggs.css';
import { HeaderComponent } from '../../components';

const BaseLayout = () => (
  <>
    <HeaderComponent />
    <Outlet />
    <footer>Footer</footer>
  </>
);

export default BaseLayout;
