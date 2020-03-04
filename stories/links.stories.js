import React from "react";
import OutBoundLink from "../src/atoms/Links";
import "bootstrap/dist/css/bootstrap.css";
import { withA11y } from "@storybook/addon-a11y";
import { theme } from "styled-theming";
import { ThemeProvider } from "styled-components";

export default {
  title: "Links",
  component: OutBoundLink,
  decorator: [withA11y]
};

const themes = {
  mode: "light"
};

export const Link = () => (
  <ThemeProvider theme={themes}>  
    <section className="bg-dark">
      <OutBoundLink href="/">Home</OutBoundLink>
    </section>
  </ThemeProvider>
);
