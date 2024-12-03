import "bootstrap/dist/css/bootstrap.css";

import { ErrorMessage, Form, Formik } from "formik";
import React from "react";
import { Button, FormFeedback, FormGroup, InputGroup } from "reactstrap";
import { v4 as uuid } from "uuid";
import * as Yup from "yup";

import { Meta, StoryObj } from "@storybook/react";

import Field from "../components/Field";
import Label from "../components/Label";

const meta: Meta<typeof Field> = {
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
};

export default meta;
type Story = StoryObj<typeof Field>;

const Template: Story = {
  render: ({ ...args }) => (
    <Formik
      initialValues={{ firstName: '' }}
      onSubmit={(values) => console.log(values)}
    >
      <Field id={uuid()} {...args} />
    </Formik>
  )
};

export const Basic: Story = {
  ...Template,
};

export const CustomLabel: Story = {
  ...Template,
  args: {
    labelText: 'Custom First Name',
  }
};

export const CustomPlaceholder: Story = {
  ...Template,
  args: {
    placeholder: 'Custom Placeholder',
  }
};

export const Disabled: Story = {
  ...Template,
  args: {
    disabled: true,
  }
};

export const Required: Story = {
  ...Template,
  args: {
    required: true,
  }
};

export const CustomId: Story = {
  ...Template,
  args: {
    id: 'customId',
  }
};

export const HiddenField: Story = {
  ...Template,
  args: {
    hidden: true,
  }
};

export const HiddenLabel: Story = {
  ...Template,
  args: {
    labelProps: {
      hidden: true,
    },
    placeholder: 'First Name',
  }
};

export const Large: Story = {
  ...Template,
  args: {
    labelProps: {
      size: 'lg',
    },
    bsSize: 'lg',
  }
};

export const Small: Story = {
  ...Template,
  args: {
    labelProps: {
      size: 'sm',
    },
    bsSize: 'sm',
  }
};

export const Checkbox: Story = {
  ...Template,
  args: {
    labelText: 'Accept terms',
    type: 'checkbox',
  }
};

export const Radio: Story = {
  ...Template,
  args: {
    labelText: 'Accept terms',
    type: 'radio',
  }
};

export const MultipleRadio: Story = {
  render: () => (
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
  )
};

export const Password: Story = {
  ...Template,
  args: {
    labelText: 'Password',
    type: 'password',
  }
};

export const Url: Story = {
  ...Template,
  args: {
    labelText: 'URL',
    type: 'url',
  }
};

export const Number: Story = {
  ...Template,
  args: {
    labelText: 'Pick a Number',
    type: 'number',
  }
};

export const DateTime: Story = {
  ...Template, 
  args: {
    labelText: 'Date Time',
    type: 'datetime',
  }
};

export const Date: Story = {
  ...Template,
  args: {
    labelText: 'Date',
    type: 'date',
  }
};

export const Time: Story = {
  ...Template,
  args: {
    labelText: 'Time',
    type: 'time',
  }
};

export const Color: Story = {
  ...Template,
  args: {
    labelText: 'Color',
    type: 'color',
  }
};

export const TextArea: Story = {
  ...Template,
  args: {
    labelText: 'Bio',
    type: 'textarea',
  }
};

export const File: Story = {
  ...Template,
  args: {
    labelText: 'Attachment',
    type: 'file',
  }
};

export const Range: Story = {
  ...Template,
  args: {
    labelText: 'Range',
    type: 'range',
  }
};

export const Select: Story = {
  render: ({ ...args }) => (
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
  )
};

export const SelectMultiple: Story = {
  render: ({ ...args }) => (
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
  )
};

export const SubmitWithLoading: Story = {
  render: ({ ...args }) => (
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
  )
};

export const Validation: Story = {
  render: () => {
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
  }
};

export const CustomField: Story = {
  render: ({ ...args }) => (
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
  )
};

const CustomTemplate: Story = {
  render: ({ ...args }) => (
    <Formik
      initialValues={{ firstName: '' }}
      onSubmit={(values) => console.log(values)}
    >
      <FormGroup>
        {!args.withTemplate && <Label for="firstName">First Name</Label>}
        <Field {...args} />
      </FormGroup>
    </Formik>
  )
};

export const CustomHiddenField: Story = {
  ...CustomTemplate,
  args: {
    withTemplate: false,
    hidden: true,
  }
};

export const CustomDisabledField: Story = {
  ...CustomTemplate, 
  args: {
    withTemplate: false,
    disabled: true,
  }
};

export const CustomFieldWithValidation: Story = {
  render: () => {
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
  }
};
