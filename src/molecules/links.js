import React from "react";
import styled from "styled-components";
import InboundLink from "../atoms/Links";
import "./linklogo.css";
import { ThemeProvider } from "styled-components";
import { NavLink } from "react-router-dom";
import ThemeContext from '../App'

const themes = {
  mode: "light"
};

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
  return (
    <ThemeProvider theme={contextType}>
      
      <UlStyle className="d-flex link">
        {menuArray.map(el => (
          <NavLink to={el[0]} exact activeClassName="active">
            <InboundLink>{el[1]}</InboundLink>
          </NavLink>
        ))}
      </UlStyle>
    </ThemeProvider>
  );
}
export default Navlink;

const UlStyle = styled.ul`
  .active a {
    font-weight: bolder;
    text-decoration: underline;
  }
`;
