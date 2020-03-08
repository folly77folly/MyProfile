import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from "styled-components";
import { StyledButttonNew, StyledButttonNew2 } from './atoms/Buttons/button'
import Navlink from "./molecules/links";
import StyledLogo from "./atoms/logo/index";

const ThemeContext = React.createContext('light')
const themes = {
  mode: "light"
};


function About() {
  return (
    <ThemeProvider theme={themes}>
    <div className="App">
      <header className="App-header">
        <div className="d-flex justify-content-around align-items-end">
          <StyledLogo color="secondary" children="Personal"></StyledLogo>
          <Navlink />
        </div>
        <div style={{marginTop:"8rem"}}><HeaderImage /></div>         
      </header>
    </div>      
    </ThemeProvider>  

  );
}

export default About;
