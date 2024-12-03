import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Form, Formik } from 'formik';
import Field from '../components/Field';
import Submit from '../components/Submit';
import 'bootstrap/dist/css/bootstrap.css';

const meta: Meta<typeof Submit> = {
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

export default meta;
type Story = StoryObj<typeof Submit>;

const Template: Story = {
  render: ({ ...args }) => (
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
  )
};

export const Basic: Story = { ...Template, };

export const WithLoading: Story = {
  ...Template,
  args: {
    withLoading: true,
  }
};

export const WithSpinner: Story = {
  ...Template,
  args: {
    withLoading: false,
    withSpinner: true,
  }
};

export const WithLoadingAndSpinner: Story = {
  ...Template,
  args: {
    withLoading: true,
    withSpinner: true,
  }
};

export const Green: Story = {
  ...Template,
  args: {
    color: 'success',
  }
};

export const Large: Story = {
  ...Template,
  args: {
    size: 'lg',
  }
};

export const Small: Story = {
  ...Template,
  args: {
    size: 'sm',
  }
};

export const Active: Story = {
  ...Template,
  args: {
    active: true,
  }
};

export const Block: Story = {
  ...Template,
  args: {
    block: true,
  }
};

export const Outline: Story = {
  ...Template,
  args: {
    outline: true,
  }
};

export const Disabled: Story = {
  ...Template,
  args: {
    disabled: true,
  }
};
