import React from 'react'
import './linklogo.css'
import { ThemeProvider } from "styled-components"
import { StyledButttonNew } from '../atoms/Buttons/button'
import {StyledTypography} from '../atoms/typography/mixins'
import Line from '../atoms/styledcomponets/boxes'
import styled from 'styled-components'

const themes = {
    mode: "light"
  };
  

function HeaderContent () {
    return (
        <ThemeProvider theme={themes}>
        <Wrapper>
         <StyledTypography
         fontsize ="xlarge" 
         color="secondary" 
         fontfamily="primary"
         children ="About Me"
          />
        <Line
        // style={{height:"2px",width:"100px", backgroundColor:"white"}}
        className ="line"
        padding="nopadd"
        margin="nomarg"
        />
        <br></br>

         <StyledTypography
         className = "about_me"
         fontsize ="small" 
         color ="secondary" 
         fontfamily="primary" 
         fontweight="primary"
         children="I am passionate about programming. It’s the one thing I think I could do for free. Cool technologies, cooler gadgets, processing power, plenty of RAM, a clear plan, internet access, headphones and it’s a party for me! I love to take code to production I love the god’ feeling I get when I see someone served by my innovation..."
         />
         <StyledButttonNew text = "Download CV"/> 
        </Wrapper>

        </ThemeProvider>

    );
  }
export default HeaderContent

const Wrapper = styled.div`
width:70%;
height:inherit;
padding :1rem;

.about_me{
  line-height: "5px";
}
.line{
  height : 3px;
  width : 100px;
  background-color:white;
}
@media(max-width:900px){
  display:flex;
  flex-direction:column;
  align-items:center;
  width:100%;
}
`