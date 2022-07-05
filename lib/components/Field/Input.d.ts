import { FieldInputProps, FormikProps, FormikValues } from 'formik';
import React from 'react';
import { InputProps as ReactstrapInputProps } from 'reactstrap';
declare type InputProps = {
    field: Partial<FieldInputProps<string | number>>;
    form: FormikProps<FormikValues>;
    props?: ReactstrapInputProps;
};
declare const Input: React.FC<InputProps>;
export default Input;
