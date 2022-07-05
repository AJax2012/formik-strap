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
import Label from './Label';
import 'bootstrap/dist/css/bootstrap.css';
export default {
    title: 'Label',
    component: Label,
    args: {
        children: 'label text',
    },
};
const Template = (_a) => {
    var args = __rest(_a, []);
    return (React.createElement(Label, Object.assign({}, args), args.children));
};
export const Basic = Template.bind({});
export const Stylized = Template.bind({});
Stylized.args = {
    className: 'text-danger fw-bold',
};
export const Large = Template.bind({});
Large.args = {
    size: 'lg',
};
export const Small = Template.bind({});
Small.args = {
    size: 'sm',
};
export const Required = Template.bind({});
Required.args = {
    className: 'required',
};
export const Disabled = Template.bind({});
Disabled.args = {
    disabled: true,
};
