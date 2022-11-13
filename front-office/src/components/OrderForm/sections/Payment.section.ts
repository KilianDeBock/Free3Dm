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

export const PaymentSection: Section = {
  title: _PaymentMethodTitle,
  fields: [
    {
      name: 'payment_PromotionalCode',
      placeholder: _PromotionalCode,
    },
    {
      name: 'payment_CardNumber',
      placeholder: _CardNumber,
    },
    {
      name: 'payment_NameOnCard',
      placeholder: _NameOnCard,
    },
    {
      name: 'payment_CVC',
      placeholder: _CVC,
    },
    {
      name: 'payment_Month',
      placeholder: _Month,
    },
    {
      name: 'payment_Year',
      placeholder: _Year,
    },
  ],
};
