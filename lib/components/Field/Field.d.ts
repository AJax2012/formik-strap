import React from 'react';
import { ErrorMessageProps, FieldInputProps } from 'formik';
import { InputProps, LabelProps } from 'reactstrap';
declare type FieldProps = Partial<FieldInputProps<string | number>> & InputProps & {
    errorMessageProps?: ErrorMessageProps;
    withTemplate?: boolean;
    labelProps?: LabelProps;
    labelText?: string;
    withLoading?: boolean;
};
declare const Field: React.FC<FieldProps>;
export default Field;
