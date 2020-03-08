import React from 'react';
import './App.css';
import { ThemeProvider } from "styled-components";
import Navlink from "./molecules/links";
import StyledLogo from "./atoms/logo/index";
import HeaderImage from './organisms/header'

const ThemeContext = React.createContext('light')
const themes = {
  mode: "light"
};


function App() {
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

export default App;
