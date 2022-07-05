import React from 'react';
import cn from 'classnames';
import {
  ErrorMessage,
  FieldInputProps,
  Field as FormikField,
  ErrorMessageProps,
} from 'formik';
import { FormFeedback, InputProps, LabelProps } from 'reactstrap';
import Input from './Input';
import Label from '../Label';

type SimpleFieldProps = Partial<FieldInputProps<string | number>> &
  InputProps & {
    errorMessageProps?: ErrorMessageProps;
    labelProps: LabelProps;
    labelText: string;
  };

const SimpleField: React.FC<SimpleFieldProps> = ({
  errorMessageProps,
  labelProps,
  labelText,
  ...props
}) => (
  <>
    {props.type !== 'checkbox' && (
      <Label
        {...labelProps}
        className={cn(labelProps.className, {
          required: props.required,
        })}
      >
        {labelText}
      </Label>
    )}
    <FormikField
      id={props.id}
      name={props.name}
      component={Input}
      props={props}
    />
    {props.type === 'checkbox' && (
      <Label
        className={cn(labelProps.className, {
          required: props.required,
        })}
        {...labelProps}
      >
        {labelText}
      </Label>
    )}
    <ErrorMessage
      component={FormFeedback}
      name={props.name as string}
      {...errorMessageProps}
    />
  </>
);

export default SimpleField;
