import React from 'react';
import { LinkComponent } from '../Link/Link.component';
import styles from './FooterSection.module.css';

export type FooterSectionType = 'text' | 'icon';

export interface FooterSectionLink {
  label: string;
  link: string;
  href?: boolean;
  newTab?: boolean;
  copy?: boolean;
  icon?: string;
}

export interface FooterSection {
  type: FooterSectionType;
  label: string;
  links: FooterSectionLink[];
}

export interface FooterLinksProps {
  section: FooterSection;
}

export const FooterSectionComponent = ({ section }: FooterLinksProps) => (
  <li className={styles.section}>
    <h5 className={styles.section__label}>{section.label}</h5>
    <ul
      className={`${styles.section__links} ${
        section.type === 'icon' && styles['section__links--icons']
      }`}
    >
      {section.links.map((link, i) => (
        <li className={styles.section__link} key={i}>
          <LinkComponent
            link={link.link}
            href={true}
            copy={link?.copy}
            newTab={link?.newTab}
            icon={link?.icon ? link.icon : null}
            noText={!!link?.icon}
          >
            {link.label}
          </LinkComponent>
        </li>
      ))}
    </ul>
  </li>
);
