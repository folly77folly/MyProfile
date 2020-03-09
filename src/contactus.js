import React from 'react';
import './App.css';
import { ThemeProvider } from "styled-components";
import Navlink from "./molecules/links";
import StyledLogo from "./atoms/logo/index";
import FooterHeader from './organisms/footer-header'
import Footer from './organisms/footerfoot'

const ThemeContext = React.createContext('light')
const themes = {
  mode: "light"
};


function ContactUs() {
  return (
    <ThemeProvider theme={themes}>
    <div className="App">
      <header className="App-header">
        <div className="d-flex justify-content-around align-items-end">
          <StyledLogo color="secondary" children="MY PROFILE"></StyledLogo>
          <Navlink />
        </div>
        <div style={{marginTop:"1rem"}}><FooterHeader /></div> 
        <div style={{marginTop:"1rem"}}><Footer /></div> 
      </header>
    </div>      
    </ThemeProvider>
  );
}

export default ContactUs;
