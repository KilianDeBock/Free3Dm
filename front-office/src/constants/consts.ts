export type Payments = string[];

interface Consts {
  APP_NAME: string;
  PAYMENTS: Payments;
}

export const CONSTS: Consts = {
  APP_NAME: 'Free3Dm',
  PAYMENTS: ['Bancontact', 'Paypal', 'Visa', 'Mastercard', 'Maestro'],
};
