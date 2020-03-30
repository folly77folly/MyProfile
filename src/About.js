import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from "styled-components";
import Navlink from "./molecules/links";
import StyledLogo from "./atoms/logo/index";
import HeaderContent1 from './organisms/header-content'
import HeaderSkill from './organisms/header-skills'

const ThemeContext = React.createContext('light')
const themes = {
  mode: "light"
};


function About() {
  return (
    <ThemeProvider theme={themes}>
    <div className="App">
      <header className="App-header">
        <div style={{marginTop:"8rem"}}><HeaderContent1 /></div>
        <div style={{marginTop:"4rem"}}><HeaderSkill /></div>       
      </header>
    </div>      
    </ThemeProvider>  

  );
}

export default About;
