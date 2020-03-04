import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Button from './atoms/Buttons/button'
// import NavLink from './atoms/navlink'
// import HeaderOne from './atoms/typography/headerone'
import { ThemeProvider } from "styled-components";
import Ring from './atoms/styledcomponets/ring'
// import Boxes from './atoms/boxes'
import CircleTube from "./atoms/circle"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { RedZap } from './atoms/icons/mixins'
import { YellowStar } from './atoms/icons/mixins'
import { StyledButttonNew, StyledButttonNew2 } from '../src/atoms/Buttons/button'

const ThemeContext = React.createContext('light')
const themes = {
  mode: "dark"
};


function App() {
  const btnname = 'Hire Me'
  const linkname = "Home"
  const text = "I'M ENIODUNMO AKEEM"
  return (
    <ThemeProvider theme={themes}>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ThemeContext.Provider value ="dark">
        <Ring></Ring>
        <CircleTube></CircleTube>
        <FontAwesomeIcon icon={faCoffee} />
        {/* <RedZap></RedZap>
        <YellowStar></YellowStar> */}
        </ThemeContext.Provider>
        <StyledButttonNew />
        <StyledButttonNew2 />
      </header>
    </div>      
    </ThemeProvider>  

  );
}

export default App;
