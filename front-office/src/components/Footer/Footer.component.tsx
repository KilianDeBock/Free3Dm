import React from 'react';
import styles from './Footer.module.css';
import { PageInfoComponent } from '../PageInfo/PageInfo.component';

const links = [
  {
    type: 'text',
    label: 'Customer Service',
    links: [
      {
        label: 'orders & delivery',
        link: '/',
      },
      {
        label: 'payments',
        link: '/',
      },
      {
        label: 'retouring',
        link: '/',
      },
      {
        label: 'warranty & repair',
        link: '/',
      },
    ],
  },
  {
    type: 'text',
    label: 'About Us',
    links: [
      {
        label: 'Company details',
        link: '/',
      },
      {
        label: 'News',
        link: '/',
      },
      {
        label: 'Jobs',
        link: '/',
      },
      {
        label: 'Sustainability',
        link: '/',
      },
    ],
  },
  {
    type: 'text',
    label: 'Contact Us',
    links: [
      {
        label: '+3200 000 000',
        href: true,
        link: 'tel:+3200000000',
      },
      {
        label: 'info@Free3Dm.org',
        href: true,
        link: 'mailto:info@Free3Dm.org',
      },
      {
        label: 'BE00 000 000 000',
        copy: true,
        link: 'BE00 000 000 000',
      },
    ],
  },
  {
    type: 'icons',
    label: 'Follow Us',
    links: [
      {
        label: 'facebook',
        href: true,
        link: 'https://www.facebook.com/',
        icon: '/media/icons/facebook.svg',
      },
      {
        label: 'Twitter',
        href: true,
        link: 'https://www.twitter.com/',
        icon: '/media/icons/twitter.svg',
      },
      {
        label: 'Google',
        href: true,
        link: 'https://www.google.com/',
        icon: '/media/icons/google.svg',
      },
      {
        label: 'LinkedIn',
        href: true,
        link: 'https://www.linkedin.com/',
        icon: '/media/icons/linkedin.svg',
      },
    ],
  },
];

export const FooterComponent = () => (
  <footer className={styles.footer}>
    <PageInfoComponent />
    Footer
  </footer>
);
