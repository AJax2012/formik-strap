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
import { Form, Formik } from 'formik';
import { Button, FormGroup, InputGroup } from 'reactstrap';
import Field from './Field';
import Label from '../Label';
import 'bootstrap/dist/css/bootstrap.css';
export default {
    title: 'Field',
    component: Field,
    argTypes: {
        active: { control: 'boolean' },
        alt: { control: 'string' },
        block: { control: 'boolean' },
        bsSize: { control: 'select', options: ['lg', 'sm'] },
        checked: { control: 'boolean' },
        disabled: { control: 'boolean' },
        invalid: { control: 'boolean' },
        max: { control: 'string' },
        maxLength: { control: 'string' },
        min: { control: 'string' },
        minLength: { control: 'string' },
        name: { control: 'string' },
        plaintext: { control: 'boolean' },
        required: { control: 'boolean' },
        size: { control: 'select', options: ['lg', 'md', 'sm'] },
        type: {
            control: 'select',
            options: [
                'text',
                'email',
                'select',
                'file',
                'radio',
                'checkbox',
                'switch',
                'textarea',
                'button',
                'reset',
                'submit',
                'date',
                'datetime-local',
                'hidden',
                'image',
                'month',
                'number',
                'range',
                'search',
                'tel',
                'url',
                'week',
                'password',
                'datetime',
                'time',
                'color',
            ],
            valid: { control: 'boolean' },
        },
    },
    args: {
        name: 'firstName',
    },
};
const Template = (_a) => {
    var args = __rest(_a, []);
    return (React.createElement(Formik, { initialValues: { firstName: '' }, onSubmit: (values) => console.log(values) },
        React.createElement(Field, Object.assign({}, args))));
};
export const Basic = Template.bind({});
export const CustomLabel = Template.bind({});
CustomLabel.args = {
    labelText: 'Custom First Name',
};
export const CustomPlaceholder = Template.bind({});
CustomPlaceholder.args = {
    placeholder: 'Custom Placeholder',
};
export const Disabled = Template.bind({});
Disabled.args = {
    disabled: true,
};
export const Required = Template.bind({});
Required.args = {
    required: true,
};
export const CustomId = Template.bind({});
CustomId.args = {
    id: 'customId',
};
export const Hidden = Template.bind({});
Hidden.args = {
    hidden: true,
};
export const HiddenLabel = Template.bind({});
HiddenLabel.args = {
    labelProps: {
        hidden: true,
    },
    placeholder: 'First Name',
};
export const Large = Template.bind({});
Large.args = {
    labelProps: {
        size: 'lg',
    },
    bsSize: 'lg',
};
export const Checkbox = Template.bind({});
Checkbox.args = {
    labelText: 'Accept terms',
    type: 'checkbox',
};
export const Password = Template.bind({});
Password.args = {
    labelText: 'Password',
    type: 'password',
};
export const Url = Template.bind({});
Url.args = {
    labelText: 'URL',
    type: 'url',
};
export const Number = Template.bind({});
Number.args = {
    labelText: 'Pick a Number',
    type: 'number',
};
export const DateTime = Template.bind({});
DateTime.args = {
    labelText: 'Date Time',
    type: 'datetime',
};
export const Date = Template.bind({});
Date.args = {
    labelText: 'Date',
    type: 'date',
};
export const Time = Template.bind({});
Time.args = {
    labelText: 'Time',
    type: 'time',
};
export const Color = Template.bind({});
Color.args = {
    labelText: 'Color',
    type: 'color',
};
export const TextArea = Template.bind({});
TextArea.args = {
    labelText: 'Bio',
    type: 'textarea',
};
export const File = Template.bind({});
File.args = {
    labelText: 'Attachment',
    type: 'file',
};
export const Range = Template.bind({});
Range.args = {
    labelText: 'Range',
    type: 'range',
};
export const Select = (_a) => {
    var args = __rest(_a, []);
    return (React.createElement(Formik, { initialValues: { country: '' }, onSubmit: (values) => console.log(values) },
        React.createElement(Field, Object.assign({}, args, { type: "select", name: "country" }),
            React.createElement("option", null, "---"),
            React.createElement("option", { value: "USA" }, "USA"),
            React.createElement("option", { value: "Canada" }, "Canada"),
            React.createElement("option", { value: "Mexico" }, "Mexico"))));
};
export const SelectMultiple = Select.bind({});
SelectMultiple.args = {
    multiple: true,
};
export const SubmitWithLoading = (_a) => {
    var args = __rest(_a, []);
    return (React.createElement(Formik, { initialValues: { firstName: '' }, onSubmit: (values, { setSubmitting }) => {
            console.log('submitting...');
            setTimeout(() => {
                console.log(JSON.stringify(values, null, 2));
                setSubmitting(false);
            }, 3000);
        } },
        React.createElement(Form, null,
            React.createElement(Field, Object.assign({}, args, { name: "firstName", className: "mb-3", withLoading: true })),
            React.createElement(Button, { type: "submit", color: "success" }, "Submit"))));
};
export const CustomField = (_a) => {
    var args = __rest(_a, []);
    return (React.createElement(Formik, { initialValues: { username: '' }, onSubmit: (values) => console.log(values) },
        React.createElement(FormGroup, null,
            React.createElement(Label, { for: "username" }, "Username"),
            React.createElement(InputGroup, null,
                React.createElement("span", { className: "input-group-text", id: "basic-addon1" }, "@"),
                React.createElement(Field, Object.assign({}, args, { name: "username", withTemplate: false }))))));
};
const CustomTemplate = (_a) => {
    var args = __rest(_a, []);
    return (React.createElement(Formik, { initialValues: { firstName: '' }, onSubmit: (values) => console.log(values) },
        React.createElement(FormGroup, null,
            !args.withTemplate && React.createElement(Label, { for: "firstName" }, "First Name"),
            React.createElement(Field, Object.assign({}, args)))));
};
export const CustomHiddenField = CustomTemplate.bind({});
CustomHiddenField.args = {
    withTemplate: false,
    hidden: true,
};
export const CustomDisabledField = CustomTemplate.bind({});
CustomDisabledField.args = {
    withTemplate: false,
    disabled: true,
};
