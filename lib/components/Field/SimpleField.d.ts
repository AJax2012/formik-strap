import React from 'react';
import { FieldInputProps, ErrorMessageProps } from 'formik';
import { InputProps, LabelProps } from 'reactstrap';
declare type SimpleFieldProps = Partial<FieldInputProps<string | number>> & InputProps & {
    errorMessageProps?: ErrorMessageProps;
    labelProps: LabelProps;
    labelText: string;
};
declare const SimpleField: React.FC<SimpleFieldProps>;
export default SimpleField;
