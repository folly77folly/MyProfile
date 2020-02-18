import React from 'react'
import Button, {Buttonpill} from '../src/atoms/Buttons/button'
import 'bootstrap/dist/css/bootstrap.css';
import { withA11y } from '@storybook/addon-a11y'

export default{
    title: 'Buttons',
    component: Button,
    decorators:[withA11y],
}

export const button_normal =()=> (
   <Button />
)

export const button_pill =()=> (
    <Buttonpill />
 )
 