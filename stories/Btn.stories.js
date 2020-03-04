import React from 'react'
// import Button, {Buttonpill, bttn} from '../src/atoms/Buttons/button'
import {StyledButttonNew,StyledButttonNew2} from '../src/atoms/Buttons/button'
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
export const button =()=> (
    <ThemeProvider theme={themes}>
    <StyledButttonNew />
    <br></br>
    <br></br>
    <StyledButttonNew2 />
    </ThemeProvider>
)
