import React from 'react';
import './reset.css';
import './fonts.css';
import './defaults.css';
import './eggs.css';
import { FooterComponent, HeaderComponent } from '../../components';
import styles from './Base.module.css';
import { TutorialLayout } from '../Tutorial/Tutorial.layout';

export const BaseLayout = () => (
  <>
    <HeaderComponent />
    <main className={styles.main}>
      <TutorialLayout />
    </main>
    <FooterComponent />
  </>
);
