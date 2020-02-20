import React from 'react'
// import Button, {Buttonpill, bttn} from '../src/atoms/Buttons/button'
import {StyledButttonNew} from '../src/atoms/Buttons/button'
import 'bootstrap/dist/css/bootstrap.css';
import { withA11y } from '@storybook/addon-a11y'
import { theme } from 'styled-theming';
import { ThemeProvider } from 'styled-components';



export default{
    title: 'Buttons',
    component: StyledButttonNew,
    decorator:[withA11y],
}

const themes = {
    mode : "light"
};
export const button_normal =()=> (
    <ThemeProvider theme={themes}>
    <StyledButttonNew />
    </ThemeProvider>
)



export const button_pill =()=> (
    <Buttonpill />
 )