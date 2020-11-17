import React from 'react'
import './linklogo.css'
import { ThemeProvider } from "styled-components"
import { StyledButttonNew } from '../atoms/Buttons/button'
import {StyledTypography} from '../atoms/typography/mixins'

const themes = {
    mode: "light"
  };
  

function Header1 () {

  const values = [
    {
      fontsize : "xlarge",
      color : "primarylight",
      fontfamily : "primary",
      children : "Hello"
    },
    {
      fontsize : "xlarge",
      color : "secondary",
      fontfamily : "primary",
      children : "I'M Gbolahan Eniodunmo"
    },
    {
      fontsize : "large",
      color : "secondary",
      fontfamily : "primary",
      fontweight : "primary",
      children : "Pyhton Web Developer - Flask/Django Framework - MySQL, MongoDB, Postgres SQL, SQL Server,Microsoft SQL WOrkbench.",
    }
    ,
    {
      fontsize : "large",
      color : "secondary",
      fontfamily : "primary",
      fontweight : "primary",
      children : "UI/UX Developer - React, HTML5, CSS, Javascript.",
    }
  ]
  
    return (

        <ThemeProvider theme={themes}>

        <div>
          { values.map((value, index)=>(
            <StyledTypography
            fontsize = {value.fontsize}
            color ={value.color}
            fontfamily = {value.fontfamily}
            fontweight = {value.fontweight}
            children ={value.children}
            key ={index}
            />
    ))}
         <StyledButttonNew text = "Hire Me"/>      
        </div>
        </ThemeProvider>

    );
  }
export default Header1