import React from 'react';
import cn from 'classnames';
import {
  ErrorMessage,
  FieldInputProps,
  Field as FormikField,
  ErrorMessageProps,
} from 'formik';
import { FormFeedback, FormGroup, InputProps, LabelProps } from 'reactstrap';
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
  <FormGroup check={props.type === 'checkbox' || props.type === 'radio'}>
    <Label
      {...labelProps}
      className={cn(labelProps.className, {
        required: props.required,
      })}
    >
      {labelText}
    </Label>
    <FormikField name={props.name} component={Input} props={props} />
    <ErrorMessage
      component={FormFeedback}
      name={props.name as string}
      {...errorMessageProps}
    />
  </FormGroup>
);

export default SimpleField;
