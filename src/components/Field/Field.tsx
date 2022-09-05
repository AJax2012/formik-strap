import { ErrorMessageProps, Field as FormikField, FieldInputProps, useFormikContext } from "formik";
import React, { useMemo } from "react";
import { InputProps, LabelProps } from "reactstrap";

import Input from "./Input";
import SimpleField from "./SimpleField";

type FieldProps = Partial<FieldInputProps<string | number>> &
  InputProps & {
    errorMessageProps?: ErrorMessageProps;
    labelProps?: LabelProps;
    labelText?: string;
    withLoading?: boolean;
    withTemplate?: boolean;
  };

const Field: React.FC<FieldProps> = ({
  disabled,
  errorMessageProps,
  labelProps,
  labelText,
  withLoading,
  withTemplate,
  ...props
}) => {
  const { isSubmitting } = useFormikContext();

  const isDisabled = useMemo(() => {
    if (disabled) {
      return true;
    }

    return isSubmitting && withLoading;
  }, [isSubmitting, withLoading, disabled]);

  const inputId = props.id ?? props.name;
  const label =
    labelText ?? props.name?.replace(/([A-Z])/g, ' $1').trim() ?? '';

  const correctedLabelProps: LabelProps = {
    for: inputId,
    ...labelProps,
  };

  props = { ...props, disabled: isDisabled, 'aria-disabled': isDisabled };

  return (
    <>
      {withTemplate ? (
        <SimpleField
          id={inputId}
          labelProps={correctedLabelProps}
          labelText={label}
          errorMessageProps={errorMessageProps}
          {...props}
        />
      ) : (
        <FormikField
          id={props.id}
          name={props.name}
          component={Input}
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
