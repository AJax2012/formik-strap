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
    removeBottomMargin: boolean;
  };

const SimpleField: React.FC<SimpleFieldProps> = ({
  className,
  errorMessageProps,
  labelProps,
  labelText,
  removeBottomMargin,
  ...props
}) => {
  const typeIsCheckboxOrRadio =
    props.type === 'checkbox' || props.type === 'radio';
  return (
    <>
      {!typeIsCheckboxOrRadio && (
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
        name={props.name}
        component={Input}
        props={{
          className: cn(className, {
            'mb-3': !removeBottomMargin,
          }),
          ...props,
        }}
      />
      {typeIsCheckboxOrRadio && (
        <Label
          className={cn('ms-2', labelProps.className, {
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
};

export default SimpleField;
