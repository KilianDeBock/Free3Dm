import React from 'react';
import { LinkComponent } from '../Link/Link.component';

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
  <article>
    <h5>{section.label}</h5>
    <ul>
      {section.links.map((link, i) => (
        <li key={i}>
          <LinkComponent
            link={link.link}
            href={true}
            copy={link?.copy}
            newTab={link?.newTab}
            icon={link?.icon ? link.icon : null}
            noText={true}
          >
            {link.label}
          </LinkComponent>
        </li>
      ))}
    </ul>
  </article>
);
