import React from "react";
import "./linklogo.css";
import { ThemeProvider } from "styled-components";
import { StyledTypography } from "../atoms/typography/mixins";
import HeaderStars from './footer-stars'

const themes = {
  mode: "light"
};

function FooterSide() {
  return (
    <ThemeProvider theme={themes}>
      <div className="d-flex flex-column align-items-center">
      <div>
      <StyledTypography
          fontsize="xlarge"
          color="secondary"
          fontfamily="primary"
          children="Rubel Ahamed"
          padding="nopadd"
          margin="nomarg"
        />
        <HeaderStars />
        <br></br>
        <StyledTypography
          fontsize="small"
          color="secondary"
          fontfamily="primary"
          fontweight="primary"
          children="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate."

        />        
      </div>
      </div>
    </ThemeProvider>
  );
}
export default FooterSide;
