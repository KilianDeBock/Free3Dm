import React from 'react';

import styles from './PaymentMethods.module.css';
import { CONSTS, Payments } from '../../constants';

export interface PaymentMethodsProps {
  payments?: Payments;
}

export const PaymentMethodsComponent = ({
  payments = CONSTS.PAYMENTS,
}: PaymentMethodsProps) => {
  return (
    <ul className={styles.payments}>
      {payments.map((payment, index) => (
        <li key={index} className={styles.payment}>
          <img
            src={`/media/icons/${payment.toLowerCase()}.svg`}
            alt={payment}
          />
          {payment}
        </li>
      ))}
    </ul>
  );
};
