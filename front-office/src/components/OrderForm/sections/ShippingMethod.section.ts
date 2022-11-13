import {
  _ExpeditedShipping,
  _ShippingMethodTitle,
  _StandardShipping,
} from '@content/dialogs';
import { Section } from './index';

export const ShippingMethodSection: Section = {
  title: _ShippingMethodTitle,
  fields: [
    {
      name: 'payment_StandardShipping',
      placeholder: _StandardShipping,
      type: 'checkbox',
    },
    {
      name: 'payment_ExpeditedShipping',
      placeholder: _ExpeditedShipping,
      type: 'checkbox',
    },
  ],
};
