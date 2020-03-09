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
         children="I am passionate about programming. It’s the one thing I think I could do for free. Cool technologies, cooler gadgets, processing power, plenty of RAM, a clear plan, internet access, headphones and it’s a party for me! I love to take code to production I love the god’ feeling I get when I see someone served by my innovation..."
         />
         <StyledButttonNew text = "Download CV"/>      
        </div>

        </ThemeProvider>

    );
  }
export default HeaderContent