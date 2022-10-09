import React from 'react';
import styles from './Footer.module.css';
import bannerStyles from './Banner.module.css';
import { PageInfoComponent } from '../PageInfo/PageInfo.component';
import { FooterSectionGroupComponent } from '../FooterSectionGroup/FooterSectionGroup.component';
import { FooterSection } from '../FooterSection/FooterSection.component';

const links: FooterSection[] = [
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
    type: 'icon',
    label: 'Follow Us',
    links: [
      {
        label: 'Facebook',
        href: true,
        newTab: true,
        link: 'https://www.facebook.com/',
        icon: '/media/icons/facebook.svg',
      },
      {
        label: 'Twitter',
        href: true,
        newTab: true,
        link: 'https://www.twitter.com/',
        icon: '/media/icons/twitter.svg',
      },
      {
        label: 'Google',
        href: true,
        newTab: true,
        link: 'https://www.google.com/',
        icon: '/media/icons/google.svg',
      },
      {
        label: 'LinkedIn',
        href: true,
        newTab: true,
        link: 'https://www.linkedin.com/',
        icon: '/media/icons/linkedin.svg',
      },
    ],
  },
];

export const FooterComponent = () => (
  <footer className={styles.footer}>
    <PageInfoComponent />
    <section className={styles['footer__main']}>
      <div className={bannerStyles.banner}></div>
      <div className={`container ${styles['footer__main__content']}`}>
        <FooterSectionGroupComponent sectionGroup={links} />
        <section>other stuff</section>
      </div>
    </section>
    <ul className={`container ${styles['footer__last-links']}`}>
      <li>terms & conditions</li>
      <li>Privacy Policy</li>
      <li>Sitemap</li>
    </ul>
  </footer>
);