import React from "react";
import StyledLogo from "../src/atoms/logo";
import "bootstrap/dist/css/bootstrap.css";
import { withA11y } from "@storybook/addon-a11y";
import { theme } from "styled-theming";
import { ThemeProvider } from "styled-components";

export default {
  title: "Logos",
  component: StyledLogo,
  decorator: [withA11y]
};

const themes = {
  mode: "light"
};

export const logo = () => (
  <ThemeProvider theme={themes}>  
    <section className="bg-dark">
      <StyledLogo
      color="secondary"
      > Personal</StyledLogo>
    </section>
  </ThemeProvider>
);
