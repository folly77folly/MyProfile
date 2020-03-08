import React from 'react';
import './App.css';
import { ThemeProvider } from "styled-components";
import Navlink from "./molecules/links";
import StyledLogo from "./atoms/logo/index";
import Content_Header from './organisms/content-header'

const ThemeContext = React.createContext('light')
const themes = {
  mode: "light"
};


function Services() {
  return (
    <ThemeProvider theme={themes}>
    <div className="App">
      <header className="App-header">
        <div className="d-flex justify-content-around align-items-end">
          <StyledLogo color="secondary" children="Personal"></StyledLogo>
          <Navlink />
        </div>
        <div style={{marginTop:"8rem"}}><Content_Header /></div> 
      </header>
    </div>      
    </ThemeProvider>
  );
}

export default Services;
