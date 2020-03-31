import React from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import HeaderImage from "./organisms/header";

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
