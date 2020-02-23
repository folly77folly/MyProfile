import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { withA11y } from "@storybook/addon-a11y";
import { ThemeProvider } from "styled-components";
import CircleTube  from '../src/atoms/circle'

export default {
  title: "Circle",
  component: CircleTube,
  decorator: [withA11y]
};

const themes = {
  mode: "light"
};

export const circles = () => (
  <ThemeProvider theme={themes}>  
    <section className="bg-dark">
      <CircleTube
      height ="large"
      width ="large"
      backgroundColor="secondary"
      ></CircleTube>
    </section>
  </ThemeProvider>
);
