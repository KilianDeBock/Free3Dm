import React from 'react';
import { Outlet } from 'react-router-dom';
import './reset.css';
import './fonts.css';
import './defaults.css';
import './eggs.css';
import { HeaderComponent } from '../../components';
import { FooterComponent } from '../../components/Footer/Footer.component';
import styles from './Base.module.css';

const BaseLayout = () => (
  <>
    <HeaderComponent />
    <main className={styles.main}>
      <Outlet />
    </main>
    <FooterComponent />
  </>
);

export default BaseLayout;
