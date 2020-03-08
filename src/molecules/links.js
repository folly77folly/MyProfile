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
            <li><InboundLink  href="/about">About</InboundLink></li>
            <li><InboundLink  href="/service">Service</InboundLink></li>
            <li><InboundLink  href="/portfolio">Portfolio</InboundLink></li>
            <li><InboundLink  href="/contactus">Contact</InboundLink></li>
        </ul>            
        </ThemeProvider>

    );
  }
export default Navlink