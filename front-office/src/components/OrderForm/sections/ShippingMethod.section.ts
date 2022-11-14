import {
  _ExpeditedShipping,
  _ShippingMethodTitle,
  _StandardShipping,
} from '@content/dialogs';
import { Section } from './index';
import * as yup from 'yup';

export const ShippingMethodSection: Section = {
  title: _ShippingMethodTitle,
  fields: [
    {
      name: 'Standard Shipping',
      placeholder: _StandardShipping,
      type: 'checkbox',
      validations: yup.boolean().required(),
      valueType: 'boolean',
    },
    {
      name: 'Expedited Shipping',
      placeholder: _ExpeditedShipping,
      type: 'checkbox',
      validations: yup.boolean().required(),
      valueType: 'boolean',
    },
  ],
};
