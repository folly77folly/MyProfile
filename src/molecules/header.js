import React from 'react'
import {StyledTypographyNew ,StyledTypographyLarge,StyledTypographySmall}from '../atoms/typography/typography'
import './linklogo.css'
import { ThemeProvider } from "styled-components"
import { StyledButttonNew } from '../atoms/Buttons/button'

const themes = {
    mode: "light"
  };
  

function Header1 () {
    return (
        <ThemeProvider theme={themes}>
        <div>
        <StyledTypographyNew />
         <StyledTypographyLarge />
         <StyledTypographySmall />
         <StyledButttonNew text = "Hire Me"/>      
        </div>

        </ThemeProvider>

    );
  }
export default Header1