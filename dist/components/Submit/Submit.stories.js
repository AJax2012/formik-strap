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
import Submit from './Submit';
import 'bootstrap/dist/css/bootstrap.css';
import { Form, Formik } from 'formik';
import Field from '../Field';
export default {
    title: 'Submit',
    component: Submit,
    argTypes: {
        children: { control: 'text' },
        active: { control: 'boolean' },
        block: { control: 'boolean' },
        disabled: { control: 'boolean' },
        size: { control: 'select', options: ['lg', 'md', 'sm'] },
        color: {
            control: 'select',
            options: [
                'primary',
                'secondary',
                'success',
                'danger',
                'warning',
                'info',
                'light',
                'dark',
            ],
        },
        withLoading: { control: 'boolean' },
        withSpinner: { control: 'boolean' },
    },
    args: {
        children: 'Submit',
    },
};
const Template = (_a) => {
    var args = __rest(_a, []);
    return (React.createElement(Formik, { initialValues: { field: '' }, onSubmit: (values, { setSubmitting }) => {
            console.log('submitting...');
            setTimeout(() => {
                console.log(JSON.stringify(values, null, 2));
                setSubmitting(false);
            }, 3000);
        } },
        React.createElement(Form, null,
            React.createElement(Field, { name: "field", hidden: true, withTemplate: false }),
            React.createElement(Submit, Object.assign({}, args)))));
};
export const Basic = Template.bind({});
export const WithLoading = Template.bind({});
WithLoading.args = {
    withLoading: true,
};
export const WithSpinner = Template.bind({});
WithSpinner.args = {
    withSpinner: true,
};
export const WithLoadingAndSpinner = Template.bind({});
WithLoadingAndSpinner.args = {
    withLoading: true,
    withSpinner: true,
};
export const Green = Template.bind({});
Green.args = {
    color: 'success',
};
export const Large = Template.bind({});
Large.args = {
    size: 'lg',
};
export const Small = Template.bind({});
Small.args = {
    size: 'sm',
};
export const Active = Template.bind({});
Active.args = {
    active: true,
};
export const Block = Template.bind({});
Block.args = {
    block: true,
};
export const Outline = Template.bind({});
Outline.args = {
    outline: true,
};
export const Disabled = Template.bind({});
Disabled.args = {
    disabled: true,
};
