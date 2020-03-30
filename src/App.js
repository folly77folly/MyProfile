import React from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import Navlink from "./molecules/links";
import StyledLogo from "./atoms/logo/index";
import HeaderImage from "./organisms/header";
import NavBar from "./organisms/navbar";

const ThemeContext = React.createContext("light");
const themes = {
  mode: "light"
};

function App() {
  return (
    <ThemeContext.Provider value='dark'>
    <ThemeProvider theme={themes}>
      <div className="App">
        <header className="App-header">
          <div style={{ marginTop: "8rem" }}>
            <HeaderImage />
          </div>
        </header>
      </div>
    </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
