import React from 'react';
import { Outlet } from 'react-router-dom';
import './reset.css';
import './fonts.css';
import './defaults.css';
import './eggs.css';
import { FooterComponent, HeaderComponent } from '../../components';
import styles from './Base.module.css';

export const BaseLayout = () => (
  <>
    <HeaderComponent />
    <main className={styles.main}>
      <Outlet />
    </main>
    <FooterComponent />
  </>
);
