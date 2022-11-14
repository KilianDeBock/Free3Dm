import React from 'react';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import { BaseSchema } from 'yup';
import { FieldComponent } from '../Field/Field.component';
import { sections } from './sections';
import styles from './OrderForm.module.css';
import { ButtonComponent } from '../Button/Button.component';

export interface OrderFormProps {
  onSubmit?: (e: any) => void;
}

export interface FieldInitialValues {
  [key: string]: string | number | boolean;
}

export interface FieldValidations {
  [key: string]: BaseSchema;
}

const fieldInitialValues: FieldInitialValues = {};
const fieldValidations: FieldValidations = {};
sections.forEach((section) =>
  section.fields.forEach((field) => {
    // Add validation for current field
    fieldValidations[field.name] = field.validations;
    // Add initial value for current field
    switch (field.valueType) {
      case 'string':
        fieldInitialValues[field.name] = '';
        break;
      case 'number':
        fieldInitialValues[field.name] = 0;
        break;
      case 'boolean':
        fieldInitialValues[field.name] = false;
        break;
      default:
        fieldInitialValues[field.name] = '';
    }
    fieldInitialValues[field.name] = '';
  })
);

const validationSchema = yup.object({
  ...fieldValidations,
});

export const OrderFormComponent = ({
  onSubmit,
}: OrderFormProps): JSX.Element => {
  const [active, setActive] = React.useState<string>(sections[0].title);

  return (
    <Formik
      initialValues={fieldInitialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(true);
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 1000);
      }}
    >
      {({ values, handleChange, isSubmitting, errors }) => (
        <Form>
          <ol className={styles.sections}>
            {sections.map((section) => (
              <li key={section.title} className={styles.section}>
                <ButtonComponent
                  type="tertiary"
                  handleClick={(e) => {
                    e.preventDefault();
                    setActive(section.title);
                  }}
                  noAnimation={true}
                >
                  <h2>{section.title}</h2>
                </ButtonComponent>
                <article
                  className={`${styles.fields} ${
                    active === section.title ? styles.active : ''
                  }`}
                >
                  {section.fields.map((field, i) => (
                    <FieldComponent
                      key={field.name + i}
                      name={field.name}
                      placeholder={field.placeholder}
                      type={field?.type ?? 'input'}
                    />
                  ))}
                </article>
              </li>
            ))}
          </ol>
        </Form>
      )}
    </Formik>
  );
};
