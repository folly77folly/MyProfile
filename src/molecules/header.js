import React from 'react'
import './linklogo.css'
import { ThemeProvider } from "styled-components"
import { StyledButttonNew } from '../atoms/Buttons/button'
import {StyledTypography} from '../atoms/typography/mixins'

const themes = {
    mode: "light"
  };
  

function Header1 () {
    return (
        <ThemeProvider theme={themes}>
        <div>
        <StyledTypography 
        fontsize ="xlarge" 
        color="primarylight" 
        fontfamily="primary"
        children ="Hello"      
        />
         <StyledTypography
         fontsize ="xlarge" 
         color="secondary" 
         fontfamily="primary"
         children ="I'M Gbolahan Eniodunmo"
          />
         <StyledTypography
         fontsize ="large" 
         color ="secondary" 
         fontfamily="primary" 
         fontweight="primary"
         children="Expert in web design and development ui designer
         dribble behance labs"
         />
         <StyledButttonNew text = "Hire Me"/>      
        </div>

        </ThemeProvider>

    );
  }
export default Header1