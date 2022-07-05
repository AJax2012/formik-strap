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
import { Field as FormikField, useFormikContext, } from 'formik';
import Input from './Input';
import SimpleField from './SimpleField';
const Field = (_a) => {
    var _b, _c, _d;
    var { errorMessageProps, labelProps, labelText, withTemplate, withLoading } = _a, props = __rest(_a, ["errorMessageProps", "labelProps", "labelText", "withTemplate", "withLoading"]);
    const { isSubmitting } = useFormikContext();
    let disabled = isSubmitting && withLoading;
    if (props.disabled) {
        disabled = true;
    }
    const inputId = (_b = props.id) !== null && _b !== void 0 ? _b : props.name;
    const label = (_d = labelText !== null && labelText !== void 0 ? labelText : (_c = props.name) === null || _c === void 0 ? void 0 : _c.replace(/([A-Z])/g, ' $1').trim()) !== null && _d !== void 0 ? _d : '';
    const correctedLabelProps = Object.assign({ for: inputId }, labelProps);
    return (React.createElement(React.Fragment, null, withTemplate ? (React.createElement(SimpleField, Object.assign({ id: inputId, labelProps: correctedLabelProps, labelText: label, errorMessageProps: errorMessageProps, disabled: disabled }, props))) : (React.createElement(FormikField, { id: props.id, name: props.name, component: Input, disabled: disabled, props: props }))));
};
Field.defaultProps = {
    withTemplate: true,
    withLoading: true,
    disabled: false,
};
export default Field;
