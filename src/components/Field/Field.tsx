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
    labelProps?: LabelProps;
    labelText?: string;
    removeBottomMargin?: boolean;
    withLoading?: boolean;
    withTemplate?: boolean;
  };

const Field: React.FC<FieldProps> = ({
  errorMessageProps,
  labelProps,
  labelText,
  removeBottomMargin,
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
          removeBottomMargin={removeBottomMargin as boolean}
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
  disabled: false,
  removeBottomMargin: false,
  withTemplate: true,
  withLoading: true,
};

export default Field;
