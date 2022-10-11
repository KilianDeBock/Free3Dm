import React from 'react';
import {
  FooterSection,
  FooterSectionComponent,
} from './FooterSection.component';
import styles from './FooterSectionGroup.module.css';

export interface FooterSectionGroupProps {
  sectionGroup: FooterSection[];
}

export const FooterSectionGroupComponent = ({
  sectionGroup,
}: FooterSectionGroupProps) => (
  <ul className={styles.sections}>
    {sectionGroup.map((section, i) => (
      <FooterSectionComponent section={section} key={i} />
    ))}
  </ul>
);
