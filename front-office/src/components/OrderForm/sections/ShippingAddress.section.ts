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
      name: 'Shipping Address',
      placeholder: _ShippingAddress,
      validations: yup.string().required(),
      valueType: 'string',
    },
    {
      name: 'Shipping Apartment',
      placeholder: _ShippingApartment,
      validations: yup.string(),
      valueType: 'string',
    },
    {
      name: 'Shipping City',
      placeholder: _ShippingCity,
      validations: yup.string().required(),
      valueType: 'string',
    },
    {
      name: 'Shipping Company',
      placeholder: _ShippingCompany,
      validations: yup.string(),
      valueType: 'string',
    },
    {
      name: 'Shipping Country Region',
      placeholder: _ShippingCountryRegion,
      validations: yup.string().required(),
      valueType: 'string',
    },
    {
      name: 'Shipping Phone Number',
      placeholder: _ShippingPhoneNumber,
      validations: yup.number(),
      valueType: 'string',
    },
    {
      name: 'Shipping State Province',
      placeholder: _ShippingStateProvince,
      validations: yup.string().required(),
      valueType: 'string',
    },
    {
      name: 'Shipping ZIP Postal Code',
      placeholder: _ShippingZIPPostalCode,
      validations: yup.string().required(),
      valueType: 'string',
    },
  ],
};
