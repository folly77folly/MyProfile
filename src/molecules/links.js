import React from "react";
import styled from "styled-components";
import InboundLink from "../atoms/Links";
import "./linklogo.css";
import { ThemeProvider } from "styled-components";
import { NavLink } from "react-router-dom";
import ThemeContext from '../App'


function Navlink() {
  const contextType = ThemeContext
  let menuArray = [
    ["/", "Home"],
    ["/about", "About Me"],
    ["/service", "Service"],
    ["/portfolio", "Portfolio"],
    ["/contactus", "Contact Me"]
  ];
  console.log("hiiii",contextType)
  
  const myClick = function(){
    var x = document.getElementsByClassName('cont')
    var y = document.getElementsByClassName('link ')
    console.log(y[0]);
    x[0].classList.toggle("change");
    y[0].classList.toggle("responsive");
  }

  return (
    <ThemeProvider theme={contextType}>
      <DivStyle>
      <UlStyle className="link align-items-center">
        {menuArray.map(el => (
          <NavLink to={el[0]} exact activeClassName="active">
            <InboundLink>{el[1]}</InboundLink>
          </NavLink>
        ))}
      </UlStyle>
      <div className ="cont" onClick={myClick}>
            <div className="bar1"/>
            <div className="bar2"/>
            <div className="bar3"/>
        </div>
      </DivStyle>
    </ThemeProvider>
  );
}
export default Navlink;

const UlStyle = styled.ul`
font-size:1.2rem;
  .active a {
    font-weight: bolder;
    text-decoration: underline;
  }
`;

const DivStyle = styled.div`
align-items:flex-end;
display:flex;
`