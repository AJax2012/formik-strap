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
import { useFormikContext } from 'formik';
import React from 'react';
import { Button, Spinner } from 'reactstrap';
const Submit = (_a) => {
    var { withLoading, withSpinner } = _a, props = __rest(_a, ["withLoading", "withSpinner"]);
    const { isSubmitting } = useFormikContext();
    let disabled = withLoading && isSubmitting;
    if (props.disabled) {
        disabled = true;
    }
    return (React.createElement(Button, Object.assign({ type: "submit" }, props, { disabled: disabled }),
        withSpinner && isSubmitting && React.createElement(Spinner, { size: "sm", className: "me-2" }),
        props.children));
};
Submit.defaultProps = {
    color: 'primary',
    withLoading: true,
};
export default Submit;
