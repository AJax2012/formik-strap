var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import cn from 'classnames';
import { ErrorMessage, Field as FormikField, } from 'formik';
import { FormFeedback } from 'reactstrap';
import Input from './Input';
import Label from '../Label';
const SimpleField = (_a) => {
    var { errorMessageProps, labelProps, labelText } = _a, props = __rest(_a, ["errorMessageProps", "labelProps", "labelText"]);
    return (React.createElement(React.Fragment, null,
        props.type !== 'checkbox' && (React.createElement(Label, Object.assign({}, labelProps, { className: cn(labelProps.className, {
                required: props.required,
            }) }), labelText)),
        React.createElement(FormikField, { id: props.id, name: props.name, component: Input, props: props }),
        props.type === 'checkbox' && (React.createElement(Label, Object.assign({ className: cn(labelProps.className, {
                required: props.required,
            }) }, labelProps), labelText)),
        React.createElement(ErrorMessage, Object.assign({ component: FormFeedback, name: props.name }, errorMessageProps))));
};
export default SimpleField;
