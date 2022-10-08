import React from 'react';
import { Outlet } from 'react-router-dom';
import { LinkComponent } from '../../components';
import './reset.css';
import './defaults.css';
import styles from './Base.module.css';

const BaseLayout = () => (
  <>
    <header className={styles.header}>
      <ul>
        <li>
          <LinkComponent link="/">Free3Dm</LinkComponent>
        </li>
        <li>
          <LinkComponent link="/wishlist">My wishlist</LinkComponent>
        </li>
        <li>
          <LinkComponent link="/login">Sign in</LinkComponent>
        </li>
      </ul>
      <p></p>
    </header>
    <Outlet />
    <footer>Footer</footer>
  </>
);

export default BaseLayout;
