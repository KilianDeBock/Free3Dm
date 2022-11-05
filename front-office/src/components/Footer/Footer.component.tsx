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
import {
  _CompanyDetailsButton,
  _ContactUsButton,
  _FAQsButton,
  _JobsButton,
  _NewsletterSubscriptionButton,
  _PrivacyPolicyButton,
  _ReturnPolicyButton,
  _ShippingDeliveryButton,
  _SitemapButton,
  _SustainabilityButton,
  _TermsConditionsButton,
  _WarrantyRepairPolicyButton,
} from '@content/buttons';
import {
  _NewsletterEmail,
  _PhoneNumberBE,
  _PhoneNumberCA,
} from '@content/dialogs';
import { _NewsletterFooter } from '@content/main/footer';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { _TertiaryNavigation } from '@content/main/header';

const links: FooterSection[] = [
  {
    type: 'text',
    label: 'Customer Service',
    links: [
      {
        label: _ShippingDeliveryButton,
        link: ROUTES.DELIVERY_POLICY,
      },
      {
        label: _ReturnPolicyButton,
        link: ROUTES.RETURN_POLICY,
      },
      {
        label: _WarrantyRepairPolicyButton,
        link: ROUTES.WARRANTY_REPAIR_POLICY,
      },
      {
        label: _FAQsButton,
        link: ROUTES.FAQ,
      },
    ],
  },
  {
    type: 'text',
    label: 'About Us',
    links: [
      {
        label: _CompanyDetailsButton,
        link: ROUTES.COMPANY,
      },
      {
        label: _JobsButton,
        link: '/',
      },
      {
        label: _SustainabilityButton,
        link: ROUTES.SUSTAINABILITY,
      },
    ],
  },
  {
    type: 'text',
    label: _ContactUsButton,
    links: [
      {
        link: `tel:${_PhoneNumberCA}`,
        href: true,
        label: _PhoneNumberCA,
      },
      {
        link: `tel:${_PhoneNumberBE}`,
        href: true,
        label: _PhoneNumberBE,
      },
      {
        label: _TertiaryNavigation.split('\n')[2],
        copy: true,
        link: _TertiaryNavigation.split('\n')[2],
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
    label: _TermsConditionsButton,
    href: true,
    link: ROUTES.TERMS_AND_CONDITIONS,
  },
  {
    label: _PrivacyPolicyButton,
    href: true,
    link: ROUTES.PRIVACY_POLICY,
  },
  {
    label: _SitemapButton,
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
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {_NewsletterFooter.split('\n')[0]}
              </ReactMarkdown>
            </span>
            <span className={styles['footer__subscribe__text']}>
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {_NewsletterFooter.split('\n')[1]}
              </ReactMarkdown>
            </span>
            <SearchComponent
              placeholderTxt={_NewsletterEmail}
              submitTxt={_NewsletterSubscriptionButton}
            />
          </article>
          <article>
            <span>
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {_NewsletterFooter.split('\n')[2]}
              </ReactMarkdown>
            </span>
            <PaymentMethodsComponent />
          </article>
        </section>
      </div>
    </section>
    <FooterLastSectionComponent links={lastLinks} />
  </footer>
);
