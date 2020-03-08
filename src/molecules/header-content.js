import React from 'react'
import './linklogo.css'
import { ThemeProvider } from "styled-components"
import { StyledButttonNew } from '../atoms/Buttons/button'
import {StyledTypography} from '../atoms/typography/mixins'
import Line from '../atoms/styledcomponets/boxes'

const themes = {
    mode: "light"
  };
  

function HeaderContent () {
    return (
        <ThemeProvider theme={themes}>
        <div>
         <StyledTypography
         fontsize ="xlarge" 
         color="secondary" 
         fontfamily="primary"
         children ="About Me"
          />
        <Line
        style={{height:"2px",width:"100px", backgroundColor:"white"}}
        backgroundColor="primary"
        padding="nopadd"
        margin="nomarg"
        />
        <br></br>            
         <StyledTypography
         fontsize ="small" 
         color ="secondary" 
         fontfamily="primary" 
         fontweight="primary"
         children="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
         />
         <StyledButttonNew text = "Download CV"/>      
        </div>

        </ThemeProvider>

    );
  }
export default HeaderContent