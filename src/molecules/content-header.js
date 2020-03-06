import React from 'react'
import './linklogo.css'
import { ThemeProvider } from "styled-components"
import { StyledButttonNew } from '../atoms/Buttons/button'
import {StyledTypography} from '../atoms/typography/mixins'

const themes = {
    mode: "light"
  };
  

function ContentHeader () {
    return (
        <ThemeProvider theme={themes}>
        <div>
         <StyledTypography
         fontsize ="xlarge" 
         color="secondary" 
         fontfamily="primary"
         children ="Active Jobs"
          />
         <StyledTypography
         fontsize ="large" 
         color ="secondary" 
         fontfamily="primary" 
         fontweight="primary"
         children="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
         />
         <StyledButttonNew text = "Read More"/>  
        </div>

        </ThemeProvider>

    );
  }
export default ContentHeader