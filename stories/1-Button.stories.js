import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
// import 'bootstrap/dist/css/bootstrap.css';

export default {
  title: 'Button',
  component: Button,
};

export const Text = () => <Button class ='btn btn-primary' onClick={action('clicked')}>Hello Button</Button>;
export const Text2 = () => <Button className ="btn btn-primary">Hello Button</Button>;

