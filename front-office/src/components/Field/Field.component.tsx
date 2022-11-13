import React from 'react';
import { Field, useField } from 'formik';
import styles from './Field.module.css';

export interface FieldProps {
  placeholder: string;
  name: string;
  type: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FieldComponent = ({ ...props }: FieldProps) => {
  const [field, meta] = useField(props);

  const errorText = meta.error && meta.touched ? meta.error : '';

  return (
    <article className={styles.field}>
      {props.type === 'checkbox' && <label>{props.placeholder}</label>}
      <Field
        placeholder={props.placeholder}
        name={props.name}
        type={props.type}
      />
      {errorText && <p>{errorText}</p>}
    </article>
  );
};
