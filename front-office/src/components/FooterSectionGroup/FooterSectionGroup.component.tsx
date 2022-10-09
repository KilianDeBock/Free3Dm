import React from 'react';
import {
  FooterSection,
  FooterSectionComponent,
} from '../FooterSection/FooterSection.component';

export interface FooterSectionGroupProps {
  sectionGroup: FooterSection[];
}

export const FooterSectionGroupComponent = ({
  sectionGroup,
}: FooterSectionGroupProps) => (
  <section>
    <nav>
      {sectionGroup.map((section) => (
        <FooterSectionComponent section={section} />
      ))}
    </nav>
  </section>
);
