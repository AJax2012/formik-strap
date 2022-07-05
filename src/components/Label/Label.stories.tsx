import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Label from './Label';
import 'bootstrap/dist/css/bootstrap.css';

export default {
  title: 'Label',
  component: Label,
  args: {
    children: 'label text',
  },
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = ({ ...args }) => (
  <Label {...args}>{args.children}</Label>
);

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
