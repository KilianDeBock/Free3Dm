import { BillingAddressSection } from './BillingAddress.section';
import { ShippingAddressSection } from './ShippingAddress.section';
import { PaymentSection } from './Payment.section';
import { ShippingMethodSection } from './ShippingMethod.section';

export interface SectionField {
  name: string;
  placeholder: string;
  type?: string;
}

export interface Section {
  title: string;
  fields: SectionField[];
}

export const sections: Section[] = [
  BillingAddressSection,
  ShippingAddressSection,
  ShippingMethodSection,
  PaymentSection,
];
