import React from 'react';
import { Input as ReactstrapInput, } from 'reactstrap';
const Input = ({ field, form: { touched, errors }, props, }) => (React.createElement(ReactstrapInput, Object.assign({ invalid: !!touched[field.name] && !!errors[field.name] }, field, props)));
export default Input;
