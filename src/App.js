import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './atoms/Buttons/button'
import NavLink from './atoms/navlink'
import HeaderOne from './atoms/typography/headerone'
import DescriptionText from './atoms/typography/description'
import Ring from './atoms/styledcomponets/ring'
import Boxes from './atoms/boxes'

function App() {
  const btnname = 'Hire Me'
  const linkname = "Home"
  const text = "I'M ENIODUNMO AKEEM"
  return (
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button buttonname = {btnname}/>
        <div><NavLink linkname = {linkname} /></div>
        <div><HeaderOne text = {text} /></div>
        <DescriptionText text = {text} />
        <div><Ring /></div>
        <div><Boxes/></div>
      </header>
      
      
    </div>
  );
}

export default App;
