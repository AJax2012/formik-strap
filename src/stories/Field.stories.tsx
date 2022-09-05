import "bootstrap/dist/css/bootstrap.css";

import { ErrorMessage, Form, Formik } from "formik";
import React from "react";
import { Button, FormFeedback, FormGroup, InputGroup } from "reactstrap";
import { v4 as uuid } from "uuid";
import * as Yup from "yup";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import Field from "../components/Field/Field";
import Label from "../components/Label";

export default {
  title: 'Field',
  component: Field,
  argTypes: {
    active: { control: 'boolean' },
    alt: { control: 'text' },
    block: { control: 'boolean' },
    bsSize: { control: 'select', options: ['lg', 'sm'] },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    invalid: { control: 'boolean' },
    max: { control: 'text' },
    maxLength: { control: 'text' },
    min: { control: 'text' },
    minLength: { control: 'text' },
    name: { control: 'text' },
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
} as ComponentMeta<typeof Field>;

const Template: ComponentStory<typeof Field> = ({ ...args }) => (
  <Formik
    initialValues={{ firstName: '' }}
    onSubmit={(values) => console.log(values)}
  >
    <Field id={uuid()} {...args} />
  </Formik>
);

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

export const HiddenField = Template.bind({});
HiddenField.args = {
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

export const Small = Template.bind({});
Small.args = {
  labelProps: {
    size: 'sm',
  },
  bsSize: 'sm',
};

export const Checkbox = Template.bind({});
Checkbox.args = {
  labelText: 'Accept terms',
  type: 'checkbox',
};

export const Radio = Template.bind({});
Radio.args = {
  labelText: 'Accept terms',
  type: 'radio',
};

export const MultipleRadio: ComponentStory<typeof Field> = () => (
  <Formik
    initialValues={{ choice: '' }}
    onSubmit={(values) => console.log(values)}
  >
    <FormGroup tag="fieldset">
      <legend>Radio Buttons</legend>
      <Field
        id="choice1"
        name="choice"
        labelText="Option one"
        value="1"
        type="radio"
      />
      <Field
        id="choice2"
        name="choice"
        labelText="Option two"
        value="2"
        type="radio"
      />
    </FormGroup>
  </Formik>
);

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

export const Select: ComponentStory<typeof Field> = ({ ...args }) => (
  <Formik
    initialValues={{ country: '' }}
    onSubmit={(values) => console.log(values)}
  >
    <Field type="select" name="country" {...args}>
      <option>---</option>
      <option value="USA">USA</option>
      <option value="Canada">Canada</option>
      <option value="Mexico">Mexico</option>
    </Field>
  </Formik>
);

export const SelectMultiple: ComponentStory<typeof Field> = ({ ...args }) => (
  <Formik
    initialValues={{ country: [] }}
    onSubmit={(values) => console.log(values)}
  >
    <Field type="select" multiple name="country" {...args}>
      <option>---</option>
      <option value="USA">USA</option>
      <option value="Canada">Canada</option>
      <option value="Mexico">Mexico</option>
    </Field>
  </Formik>
);

export const SubmitWithLoading: ComponentStory<typeof Field> = ({
  ...args
}) => (
  <Formik
    initialValues={{ firstName: '' }}
    onSubmit={(values, { setSubmitting }) => {
      console.log('submitting...');
      setTimeout(() => {
        console.log(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 3000);
    }}
  >
    <Form>
      <Field {...args} name="firstName" withLoading />
      <Button type="submit" color="success">
        Submit
      </Button>
    </Form>
  </Formik>
);

export const Validation: ComponentStory<typeof Field> = () => {
  const schema = Yup.object().shape({
    email: Yup.string().email().required(),
    username: Yup.string(),
  });

  return (
    <Formik
      initialValues={{ email: '', username: '' }}
      onSubmit={(values, { setSubmitting }) => {
        console.log('submitting...');
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 3000);
      }}
      validationSchema={schema}
    >
      <Form>
        <Field
          name="email"
          type="email"
          id="emailValidation"
          withLoading
          required
        />
        <Field name="username" />
        <Button type="submit" color="success">
          Submit
        </Button>
      </Form>
    </Formik>
  );
};

export const CustomField: ComponentStory<typeof Field> = ({ ...args }) => (
  <Formik
    initialValues={{ username: '' }}
    onSubmit={(values) => console.log(values)}
  >
    <FormGroup>
      <Label for="username">Username</Label>
      <InputGroup>
        <span className="input-group-text" id="basic-addon1">
          @
        </span>
        <Field {...args} name="username" withTemplate={false} />
      </InputGroup>
    </FormGroup>
  </Formik>
);

const CustomTemplate: ComponentStory<typeof Field> = ({ ...args }) => (
  <Formik
    initialValues={{ firstName: '' }}
    onSubmit={(values) => console.log(values)}
  >
    <FormGroup>
      {!args.withTemplate && <Label for="firstName">First Name</Label>}
      <Field {...args} />
    </FormGroup>
  </Formik>
);

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

export const CustomFieldWithValidation: ComponentStory<typeof Field> = () => {
  const schema = Yup.object().shape({
    firstName: Yup.string().required('First Name is a required field'),
  });

  return (
    <Formik
      validationSchema={schema}
      initialValues={{ firstName: '' }}
      onSubmit={(values) => console.log(values)}
    >
      <FormGroup>
        <Label for="firstName">First Name</Label>
        <FormGroup>
          <Field name="firstName" withTemplate={false} />
          <ErrorMessage component={FormFeedback} name="firstName" />
        </FormGroup>
      </FormGroup>
    </Formik>
  );
};
