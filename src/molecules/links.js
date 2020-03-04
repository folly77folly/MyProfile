import React from 'react'
import InboundLink from '../atoms/Links'
import './linklogo.css'
import { ThemeProvider } from "styled-components"

const themes = {
    mode: "light"
  };
  

function Navlink () {
    return (
        <ThemeProvider theme={themes}>
        <ul className="d-flex link">
            <li><InboundLink  href="/">Home</InboundLink></li>
            <li><InboundLink  href="/">About</InboundLink></li>
            <li><InboundLink  href="/">Service</InboundLink></li>
            <li><InboundLink  href="/">Portfolio</InboundLink></li>
            <li><InboundLink  href="/">Contact</InboundLink></li>
        </ul>            
        </ThemeProvider>

    );
  }
export default Navlink