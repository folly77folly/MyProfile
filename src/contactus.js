import React from 'react';
import './App.css';
import { ThemeProvider } from "styled-components";
import FooterHeader from './organisms/footer-header'
import Footer from './organisms/footerfoot'


const themes = {
  mode: "light"
};


function ContactUs() {
  return (
    <ThemeProvider theme={themes}>
    <div className="App">
      <header className="App-header">
        <div style={{marginTop:"1rem"}}><FooterHeader /></div> 
        <div style={{marginTop:"1rem"}}><Footer /></div> 
      </header>
    </div>      
    </ThemeProvider>
  );
}

export default ContactUs;
