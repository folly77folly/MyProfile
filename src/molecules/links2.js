import React from 'react'
import {StyledButton} from '../atoms/Buttons/styles'
import './linklogo.css'
import { ThemeProvider } from "styled-components"

const themes = {
    mode: "light"
  };
  

function Btnlinks () {
    return (
        <ThemeProvider theme={themes}>
        <StyledButton 
        className ="btn badge " 
        color="secondary" 
        fontweight= "primary" 
        backgroundColor="secondary"
        hover ="secondary"
        hoverfontcolor="secondary"
        bordercolor="secondary"
        >
        All</StyledButton>
        <StyledButton 
        className ="btn badge ml-4" 
        color="secondary" 
        fontweight= "primary" 
        backgroundColor="secondary"
        hover ="secondary"
        hoverfontcolor="secondary"
        bordercolor="secondary"
        >
        Illustration</StyledButton>
        <StyledButton 
        className ="btn badge ml-4" 
        color="secondary" 
        fontweight= "primary" 
        backgroundColor="secondary"
        hover ="secondary"
        hoverfontcolor="secondary"
        bordercolor="secondary"
        >
        Packing</StyledButton>
        <StyledButton 
        className ="btn badge ml-4" 
        color="secondary" 
        fontweight= "primary" 
        backgroundColor="secondary"
        hover ="secondary"
        hoverfontcolor="secondary"
        bordercolor="secondary"
        >
        App ui</StyledButton>

        <StyledButton 
        className ="btn badge ml-4" 
        color="secondary" 
        fontweight= "primary" 
        backgroundColor="secondary"
        hover ="secondary"
        hoverfontcolor="secondary"
        bordercolor="secondary"
        >
        web ui</StyledButton>                      
        </ThemeProvider>

    );
  }
export default Btnlinks