import {
  _ShippingAddress,
  _ShippingAddressTitle,
  _ShippingApartment,
  _ShippingCity,
  _ShippingCompany,
  _ShippingCountryRegion,
  _ShippingPhoneNumber,
  _ShippingStateProvince,
  _ShippingZIPPostalCode,
} from '@content/dialogs';
import { Section } from './index';
import * as yup from 'yup';

export const ShippingAddressSection: Section = {
  title: _ShippingAddressTitle,
  fields: [
    {
      name: 'Shipping address',
      placeholder: _ShippingAddress,
      validations: yup.string().required(),
      valueType: 'string',
    },
    {
      name: 'Shipping apartment',
      placeholder: _ShippingApartment,
      validations: yup.string(),
      valueType: 'string',
    },
    {
      name: 'Shipping city',
      placeholder: _ShippingCity,
      validations: yup.string().required(),
      valueType: 'string',
    },
    {
      name: 'Shipping company',
      placeholder: _ShippingCompany,
      validations: yup.string(),
      valueType: 'string',
    },
    {
      name: 'Shipping country/region',
      placeholder: _ShippingCountryRegion,
      validations: yup.string().required(),
      valueType: 'string',
    },
    {
      name: 'Shipping phone number',
      placeholder: _ShippingPhoneNumber,
      validations: yup.number(),
      valueType: 'string',
    },
    {
      name: 'Shipping state/province',
      placeholder: _ShippingStateProvince,
      validations: yup.string().required(),
      valueType: 'string',
    },
    {
      name: 'Shipping ZIP/postal code',
      placeholder: _ShippingZIPPostalCode,
      validations: yup.string().required(),
      valueType: 'string',
    },
  ],
};
