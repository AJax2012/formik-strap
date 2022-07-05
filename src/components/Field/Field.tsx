import React from 'react';
import {
  ErrorMessageProps,
  Field as FormikField,
  FieldInputProps,
  useFormikContext,
} from 'formik';
import { InputProps, LabelProps } from 'reactstrap';
import Input from './Input';
import SimpleField from './SimpleField';

type FieldProps = Partial<FieldInputProps<string | number>> &
  InputProps & {
    errorMessageProps?: ErrorMessageProps;
    withTemplate?: boolean;
    labelProps?: LabelProps;
    labelText?: string;
    withLoading?: boolean;
  };

const Field: React.FC<FieldProps> = ({
  errorMessageProps,
  labelProps,
  labelText,
  withTemplate,
  withLoading,
  ...props
}) => {
  const { isSubmitting } = useFormikContext();
  let disabled = isSubmitting && withLoading;

  if (props.disabled) {
    disabled = true;
  }

  const inputId = props.id ?? props.name;
  const label =
    labelText ?? props.name?.replace(/([A-Z])/g, ' $1').trim() ?? '';

  const correctedLabelProps: LabelProps = {
    for: inputId,
    ...labelProps,
  };

  return (
    <>
      {withTemplate ? (
        <SimpleField
          id={inputId}
          labelProps={correctedLabelProps}
          labelText={label}
          errorMessageProps={errorMessageProps}
          {...props}
          disabled={disabled}
        />
      ) : (
        <FormikField
          id={props.id}
          name={props.name}
          component={Input}
          disabled={disabled}
          props={props}
        />
      )}
    </>
  );
};

Field.defaultProps = {
  withTemplate: true,
  withLoading: true,
  disabled: false,
};

export default Field;
