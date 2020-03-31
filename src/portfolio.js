import React from 'react';
import './App.css';
import { ThemeProvider } from "styled-components";
import ContentHeadContent from './organisms/content-head-content'
import ContentImages from './organisms/content-image'
const themes = {
  mode: "light"
};


function Portfolio() {
  return (
    <ThemeProvider theme={themes}>
    <div className="App">
      <header className="App-header">
        <div style={{marginTop:"2rem"}}><ContentHeadContent /></div> 
        <div className="d-flex flex-column align-items-center" style={{marginTop:"2rem"}}><ContentImages /></div> 
      </header>
    </div>      
    </ThemeProvider>
  );
}

export default Portfolio;
