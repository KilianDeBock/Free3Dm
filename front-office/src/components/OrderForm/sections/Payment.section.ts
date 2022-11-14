import {
  _CardNumber,
  _CVC,
  _Month,
  _NameOnCard,
  _PaymentMethodTitle,
  _PromotionalCode,
  _Year,
} from '@content/dialogs';
import { Section } from './index';
import * as yup from 'yup';

export const PaymentSection: Section = {
  title: _PaymentMethodTitle,
  fields: [
    {
      name: 'Promotional Code',
      placeholder: _PromotionalCode,
      validations: yup.string(),
      valueType: 'string',
    },
    {
      name: 'Card Number',
      placeholder: _CardNumber,
      validations: yup.string().required(),
      valueType: 'string',
    },
    {
      name: 'Name On Card',
      placeholder: _NameOnCard,
      validations: yup.string().required(),
      valueType: 'string',
    },
    {
      name: 'CVC',
      placeholder: _CVC,
      validations: yup.string().required(),
      valueType: 'string',
    },
    {
      name: 'Month',
      placeholder: _Month,
      validations: yup.number().min(1).max(12).required(),
      valueType: 'number',
    },
    {
      name: 'Year',
      placeholder: _Year,
      validations: yup.number().min(1000).max(9999).required(),
      valueType: 'number',
    },
  ],
};
