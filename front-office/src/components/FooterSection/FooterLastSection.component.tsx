import React from 'react';
import { LinkComponent } from '../Link/Link.component';
import styles from './FooterLastSection.module.css';
import { FooterSectionLink } from './FooterSection.component';
import { _Copyright } from '@content/main/footer';
import { MarkdownComponent } from '../Markdown/Markdown.component';

export interface FooterLinksProps {
  links: FooterSectionLink[];
}

export const FooterLastSectionComponent = ({ links }: FooterLinksProps) => (
  <ul className={`container ${styles['footer__last-links']}`}>
    {links.map((link, index) => (
      <li className={styles.footer__link} key={index}>
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

    <li className={styles.disclaimer}>
      <MarkdownComponent content={_Copyright} />
    </li>
  </ul>
);
