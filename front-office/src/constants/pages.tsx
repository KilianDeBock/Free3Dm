import React from 'react';
import { Layouts } from '../layouts';
import { ROUTES } from './routes';
import {
  CategoryPage,
  ContentPage,
  HomePage,
  ProductPage,
  SearchPage,
} from '../pages';
import {
  _AboutPage,
  _CompanyDetailsPage,
  _CompanyDetailsTitlePage,
  _ContactUsPage,
  _FAQsPage,
  _FAQsTitlePage,
  _GettingStartedGuidePage,
  _PrivacyPolicyPage,
  _PrivacyPolicyTitlePage,
  _ReturnPolicyPage,
  _ReturnPolicyTitlePage,
  _ShippingDeliveryPage,
  _ShippingDeliveryTitlePage,
  _SustainabilityPage,
  _SustainabilityTitlePage,
  _TermsConditionsPage,
  _TermsConditionsTitlePage,
  _WarrantyRepairPolicyPage,
  _WarrantyRepairPolicyTitlePage,
} from '@content/pages';
import { CheckoutPage } from '../pages/Checkout/Checkout.page';

export interface Page {
  path: ROUTES;
  element: React.ReactNode;
}

export type Pages = {
  [key in Layouts]: Page[];
};

export const PAGES: Pages = {
  base: [
    {
      path: ROUTES.HOME,
      element: <HomePage />,
    },
    {
      path: ROUTES.CATEGORIES,
      element: <CategoryPage />,
    },
    {
      path: ROUTES.PRODUCT,
      element: <ProductPage />,
    },
    {
      path: ROUTES.CHECKOUT,
      element: <CheckoutPage />,
    },
    {
      path: ROUTES.SEARCH,
      element: <SearchPage />,
    },
    {
      path: ROUTES.ABOUT,
      element: <ContentPage title={'About'} content={_AboutPage} />,
    },
    {
      path: ROUTES.COMPANY,
      element: (
        <ContentPage
          title={_CompanyDetailsTitlePage}
          content={_CompanyDetailsPage}
        />
      ),
    },
    {
      path: ROUTES.SUSTAINABILITY,
      element: (
        <ContentPage
          title={_SustainabilityTitlePage}
          content={_SustainabilityPage}
        />
      ),
    },
    {
      path: ROUTES.CONTACT,
      element: <ContentPage title={'Contact Us'} content={_ContactUsPage} />,
    },
    {
      path: ROUTES.FAQ,
      element: <ContentPage title={_FAQsTitlePage} content={_FAQsPage} />,
    },
    {
      path: ROUTES.PRIVACY_POLICY,
      element: (
        <ContentPage
          title={_PrivacyPolicyTitlePage}
          content={_PrivacyPolicyPage}
        />
      ),
    },
    {
      path: ROUTES.RETURN_POLICY,
      element: (
        <ContentPage
          title={_ReturnPolicyTitlePage}
          content={_ReturnPolicyPage}
        />
      ),
    },
    {
      path: ROUTES.DELIVERY_POLICY,
      element: (
        <ContentPage
          title={_ShippingDeliveryTitlePage}
          content={_ShippingDeliveryPage}
        />
      ),
    },
    {
      path: ROUTES.TERMS_AND_CONDITIONS,
      element: (
        <ContentPage
          title={_TermsConditionsTitlePage}
          content={_TermsConditionsPage}
        />
      ),
    },
    {
      path: ROUTES.WARRANTY_REPAIR_POLICY,
      element: (
        <ContentPage
          title={_WarrantyRepairPolicyTitlePage}
          content={_WarrantyRepairPolicyPage}
        />
      ),
    },
    {
      path: ROUTES.GETTING_STARTED,
      element: (
        <ContentPage
          title={'Getting Started'}
          content={_GettingStartedGuidePage}
        />
      ),
    },
  ],
};
