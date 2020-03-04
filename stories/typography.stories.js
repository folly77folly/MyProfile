import React from 'react'
// import Button, {Buttonpill, bttn} from '../src/atoms/Buttons/button'
import {StyledTypographyNew, StyledTypographyLarge, StyledTypographySmall} from '../src/atoms/typography/typography'
import 'bootstrap/dist/css/bootstrap.css';
import { withA11y } from '@storybook/addon-a11y'
import { theme } from 'styled-theming';
import { ThemeProvider } from 'styled-components';



export default{
    title: 'Typography',
    component: StyledTypographyNew,
    decorator:[withA11y],
}

const themes = {
    mode : "light",
    size : "60px",
};
export const Typography =()=> (
    <ThemeProvider theme={themes}>
        <section className = "bg-dark">
        <StyledTypographyNew />
        <StyledTypographyLarge />
        <StyledTypographySmall size/>

        </section>

    </ThemeProvider>
)

