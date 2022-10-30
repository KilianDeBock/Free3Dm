import React from 'react';
import styles from './Footer.module.css';
import bannerStyles from './Banner.module.css';
import {
  FooterSection,
  FooterSectionGroupComponent,
  FooterSectionLink,
  PageInfoComponent,
  PaymentMethodsComponent,
  SearchComponent,
} from '../';
import { ROUTES } from '../../constants';
import { FooterLastSectionComponent } from '../FooterSection/FooterLastSection.component';

const links: FooterSection[] = [
  {
    type: 'text',
    label: 'Customer Service',
    links: [
      {
        label: 'orders & delivery',
        link: ROUTES.DELIVERY_POLICY,
      },
      {
        label: 'payments',
        link: '/',
      },
      {
        label: 'retouring',
        link: ROUTES.RETURN_POLICY,
      },
      {
        label: 'warranty & repair',
        link: ROUTES.WARRANTY_REPAIR_POLICY,
      },
    ],
  },
  {
    type: 'text',
    label: 'About Us',
    links: [
      {
        label: 'Company details',
        link: ROUTES.COMPANY,
      },
      {
        label: 'Jobs',
        link: '/',
      },
      {
        label: 'Sustainability',
        link: ROUTES.SUSTAINABILITY,
      },
      {
        label: 'Frequently asked questions',
        link: ROUTES.FAQ,
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

const lastLinks: FooterSectionLink[] = [
  {
    label: 'terms & conditions',
    href: true,
    link: ROUTES.TERMS_AND_CONDITIONS,
  },
  {
    label: 'Privacy Policy',
    href: true,
    link: ROUTES.PRIVACY_POLICY,
  },
  {
    label: 'Sitemap',
    href: true,
    link: '/',
  },
];

export const FooterComponent = () => (
  <footer className={styles.footer}>
    <PageInfoComponent />
    <section className={styles['footer__main']}>
      <div className={bannerStyles.banner}></div>
      <div className={`container ${styles['footer__main__content']}`}>
        <FooterSectionGroupComponent sectionGroup={links} />
        <section className={styles['footer__payments']}>
          <article>
            <span className={styles['footer__subscribe__title']}>
              Save up to -10%
            </span>
            <span className={styles['footer__subscribe__text']}>
              Subscribe to our newsletter
            </span>
            <SearchComponent placeholderTxt={'Ender email'} submitTxt={'Go!'} />
          </article>
          <article>
            <span>100% save transactions</span>
            <PaymentMethodsComponent />
          </article>
        </section>
      </div>
    </section>
    <FooterLastSectionComponent links={lastLinks} />
  </footer>
);
