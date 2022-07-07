import React, { useMemo } from 'react';
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
    withLoading?: boolean;
    withTemplate?: boolean;
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

  const disabled = useMemo(() => {
    if (props.disabled) {
      return true;
    }

    return isSubmitting && withLoading;
  }, [isSubmitting, withLoading, props.disabled]);

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
  disabled: false,
  withTemplate: true,
  withLoading: true,
};

export default Field;
