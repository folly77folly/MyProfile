import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Button from './atoms/Buttons/button'
// import NavLink from './atoms/navlink'
// import HeaderOne from './atoms/typography/headerone'
// import DescriptionText from './atoms/typography/description'
import Ring from './atoms/styledcomponets/ring'
// import Boxes from './atoms/boxes'
import CircleTube from "./atoms/circle"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { RedZap } from './atoms/icons/mixins'
import { YellowStar } from './atoms/icons/mixins'

function App() {
  const btnname = 'Hire Me'
  const linkname = "Home"
  const text = "I'M ENIODUNMO AKEEM"
  return (
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {/* <Button buttonname = {btnname}/>
        <div><NavLink linkname = {linkname} /></div>
        <div><HeaderOne text = {text} /></div>
        <DescriptionText text = {text} />
        <div><Ring /></div>
        <div><Boxes/></div> */}
        <Ring></Ring>
        <CircleTube></CircleTube>
        <FontAwesomeIcon icon={faCoffee} />
        <RedZap></RedZap>
        <YellowStar></YellowStar>


      </header>
      
      
    </div>
  );
}

export default App;
