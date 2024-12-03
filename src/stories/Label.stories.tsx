import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Label from '../components/Label';
import 'bootstrap/dist/css/bootstrap.css';

const meta: Meta<typeof Label> = {
  title: 'Label',
  component: Label,
  args: {
    children: 'label text',
  },
};

export default meta;
type Story = StoryObj<typeof Label>;

const Template: Story = {
  render: ({ ...args }) => (
    <Label {...args}>{args.children}</Label>
  )
};

export const Basic: Story = { ...Template };

export const Stylized: Story = {
  ...Template,
  args: {
    className: 'text-danger fw-bold',
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

export const Required: Story = {
  ...Template,
  args: {
    className: 'required',
  }
};

export const Disabled: Story = {
  ...Template,
  args: {
    disabled: true,
  }
};
