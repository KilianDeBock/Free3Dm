import { BillingAddressSection } from './BillingAddress.section';
import { ShippingAddressSection } from './ShippingAddress.section';
import { PaymentSection } from './Payment.section';
import { ShippingMethodSection } from './ShippingMethod.section';
import { BaseSchema } from 'yup';

export interface SectionField {
  name: string;
  placeholder: string;
  validations: BaseSchema;
  valueType: 'string' | 'number' | 'boolean';
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
