import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
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
} as ComponentMeta<typeof Submit>;

const Template: ComponentStory<typeof Submit> = ({ ...args }) => (
  <Formik
    initialValues={{ field: '' }}
    onSubmit={(values, { setSubmitting }) => {
      console.log('submitting...');
      setTimeout(() => {
        console.log(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 3000);
    }}
  >
    <Form>
      <Field name="field" hidden withTemplate={false} />
      <Submit {...args} />
    </Form>
  </Formik>
);

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
