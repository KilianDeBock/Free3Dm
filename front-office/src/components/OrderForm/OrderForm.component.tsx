import React from 'react';

export interface OrderFormProps {
  onSubmit: (e: any) => void;
}

export const OrderFormComponent = ({
  onSubmit,
}: OrderFormProps): JSX.Element => {
  return (
    <ol>
      <li>
        <h2>Shipping Address</h2>
      </li>
    </ol>
  );
};
