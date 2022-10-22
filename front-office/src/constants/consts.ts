export type Payments = string[];

interface Consts {
  APP_NAME: string;
  PAYMENTS: Payments;
  AUTH_KEY_LOCALSTORAGE: string;
}

export const CONSTS: Consts = {
  APP_NAME: 'Free3Dm',
  PAYMENTS: ['Bancontact', 'Paypal', 'Visa', 'Mastercard', 'Maestro'],
  AUTH_KEY_LOCALSTORAGE: 'currentUser',
};
