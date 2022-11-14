import {
  _BillingAddress,
  _BillingAddressTitle,
  _BillingApartment,
  _BillingCity,
  _BillingCompany,
  _BillingCountryRegion,
  _BillingPhoneNumber,
  _BillingStateProvince,
  _BillingZIPPostalCode,
} from '@content/dialogs';
import { Section } from './index';
import * as yup from 'yup';

export const BillingAddressSection: Section = {
  title: _BillingAddressTitle,
  fields: [
    {
      name: 'Billing Address',
      placeholder: _BillingAddress,
      validations: yup.string().required(),
      valueType: 'string',
    },
    {
      name: 'Billing Apartment',
      placeholder: _BillingApartment,
      validations: yup.string(),
      valueType: 'string',
    },
    {
      name: 'Billing City',
      placeholder: _BillingCity,
      validations: yup.string().required(),
      valueType: 'string',
    },
    {
      name: 'Billing Company',
      placeholder: _BillingCompany,
      validations: yup.string(),
      valueType: 'string',
    },
    {
      name: 'Billing Country Region',
      placeholder: _BillingCountryRegion,
      validations: yup.string().required(),
      valueType: 'string',
    },
    {
      name: 'Billing Phone Number',
      placeholder: _BillingPhoneNumber,
      validations: yup.number(),
      valueType: 'number',
    },
    {
      name: 'Billing State Province',
      placeholder: _BillingStateProvince,
      validations: yup.string().required(),
      valueType: 'string',
    },
    {
      name: 'Billing ZIP Postal Code',
      placeholder: _BillingZIPPostalCode,
      validations: yup.string().required(),
      valueType: 'string',
    },
  ],
};
