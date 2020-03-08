import React from 'react';
import './App.css';
import { ThemeProvider } from "styled-components";
import Navlink from "./molecules/links";
import StyledLogo from "./atoms/logo/index";
import ContentHeadContent from './organisms/content-head-content'
import Content_Images from './organisms/content-image'

const ThemeContext = React.createContext('light')
const themes = {
  mode: "light"
};


function Portfolio() {
  return (
    <ThemeProvider theme={themes}>
    <div className="App">
      <header className="App-header">
        <div className="d-flex justify-content-around align-items-end">
          <StyledLogo color="secondary" children="Personal"></StyledLogo>
          <Navlink />
        </div>
        <div style={{marginTop:"2rem"}}><ContentHeadContent /></div> 
        <div className="d-flex flex-column align-items-center" style={{marginTop:"2rem"}}><Content_Images /></div> 
      </header>
    </div>      
    </ThemeProvider>
  );
}

export default Portfolio;
