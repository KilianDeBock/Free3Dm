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

export const ShippingAddressSection: Section = {
  title: _ShippingAddressTitle,
  fields: [
    {
      name: 'shippingAddress_Address',
      placeholder: _ShippingAddress,
    },
    {
      name: 'shippingAddress_Apartment',
      placeholder: _ShippingApartment,
    },
    {
      name: 'shippingAddress_City',
      placeholder: _ShippingCity,
    },
    {
      name: 'shippingAddress_Company',
      placeholder: _ShippingCompany,
    },
    {
      name: 'shippingAddress_CountryRegion',
      placeholder: _ShippingCountryRegion,
    },
    {
      name: 'shippingAddress_PhoneNumber',
      placeholder: _ShippingPhoneNumber,
    },
    {
      name: 'shippingAddress_StateProvince',
      placeholder: _ShippingStateProvince,
    },
    {
      name: 'shippingAddress_ZIPPostalCode',
      placeholder: _ShippingZIPPostalCode,
    },
  ],
};
