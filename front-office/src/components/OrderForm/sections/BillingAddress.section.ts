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

export const BillingAddressSection: Section = {
  title: _BillingAddressTitle,
  fields: [
    {
      name: 'billingAddress_Address',
      placeholder: _BillingAddress,
    },
    {
      name: 'billingAddress_Apartment',
      placeholder: _BillingApartment,
    },
    {
      name: 'billingAddress_City',
      placeholder: _BillingCity,
    },
    {
      name: 'billingAddress_Company',
      placeholder: _BillingCompany,
    },
    {
      name: 'billingAddress_CountryRegion',
      placeholder: _BillingCountryRegion,
    },
    {
      name: 'billingAddress_PhoneNumber',
      placeholder: _BillingPhoneNumber,
    },
    {
      name: 'billingAddress_StateProvince',
      placeholder: _BillingStateProvince,
    },
    {
      name: 'billingAddress_ZIPPostalCode',
      placeholder: _BillingZIPPostalCode,
    },
  ],
};
