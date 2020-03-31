import React from "react";
import { ThemeProvider } from "styled-components";
import Navlink from "../molecules/links";
import StyledLogo from "../atoms/logo/index";
import styled from "styled-components";

const themes = {
  mode: "light"
};

function NavBar() {
  return (
    <ThemeProvider theme={themes}>
  >   <DivStyle >
        <NavLogoStyle href="/">
          <StyledLogo color="secondary" children="MY PROFILE"></StyledLogo>
        </NavLogoStyle>
          <Navlink color="secondary"/>
      </DivStyle>
    </ThemeProvider>
  );
}
export default NavBar;

const DivStyle = styled.div`
padding:0.5rem 4rem;
display:flex;
flex-wrap:wrap;
justify-content:space-between;
overflow:hidden;

@media(max-width:900px){
  padding:1rem;
  h1{
    font-size:2rem;
  }
  div{
    align-items:start;
    ul a{
      display:none;
    }
    .cont{
      display:block;
    }
    .responsive a{
      display:block;
      font-size:2rem;
    }
  }
}
`;

const NavLogoStyle = styled.a`
text-decoration: none;
&:hover{text-decoration:none;}
`;


