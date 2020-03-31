import React from 'react';
import './App.css';
import { ThemeProvider } from "styled-components";
import ContentHeader from './organisms/content-header'

const themes = {
  mode: "light"
};


function Services() {
  return (
    <ThemeProvider theme={themes}>
    <div className="App">
      <header className="App-header">
        <div style={{marginTop:"8rem"}}><ContentHeader /></div> 
      </header>
    </div>      
    </ThemeProvider>
  );
}

export default Services;
