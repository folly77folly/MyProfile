import React from "react";
import "./linklogo.css";
import { ThemeProvider } from "styled-components";
import { StyledTypography } from "../atoms/typography/mixins";

const themes = {
  mode: "light"
};

function HeaderSkills() {
  return (
    <ThemeProvider theme={themes}>
      <div className="d-flex flex-column align-items-center">
        <StyledTypography
          fontsize="xlarge"
          color="secondary"
          fontfamily="primary"
          children="Latest Work"
        />
        <StyledTypography
          fontsize="large"
          color="secondary"
          fontfamily="primary"
          fontweight="primary"
          children="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut hdk."
        />
      </div>
    </ThemeProvider>
  );
}
export default HeaderSkills;
