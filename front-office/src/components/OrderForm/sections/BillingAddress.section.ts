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
      name: 'Billing address',
      placeholder: _BillingAddress,
      validations: yup.string().required(),
      valueType: 'string',
    },
    {
      name: 'Billing apartment',
      placeholder: _BillingApartment,
      validations: yup.string(),
      valueType: 'string',
    },
    {
      name: 'Billing city',
      placeholder: _BillingCity,
      validations: yup.string().required(),
      valueType: 'string',
    },
    {
      name: 'Billing company',
      placeholder: _BillingCompany,
      validations: yup.string(),
      valueType: 'string',
    },
    {
      name: 'Billing country/region',
      placeholder: _BillingCountryRegion,
      validations: yup.string().required(),
      valueType: 'string',
    },
    {
      name: 'Billing phone number',
      placeholder: _BillingPhoneNumber,
      validations: yup.number(),
      valueType: 'number',
    },
    {
      name: 'Billing state/province',
      placeholder: _BillingStateProvince,
      validations: yup.string().required(),
      valueType: 'string',
    },
    {
      name: 'Billing ZIP/postal code',
      placeholder: _BillingZIPPostalCode,
      validations: yup.string().required(),
      valueType: 'string',
    },
  ],
};
