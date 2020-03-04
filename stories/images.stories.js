import React from "react";
import {zapped} from "../src/atoms/icons/mixins";
import "bootstrap/dist/css/bootstrap.css";
import { withA11y } from "@storybook/addon-a11y";
import { ThemeProvider } from "styled-components";
import { StyledImage } from '../src/atoms/images/index'
import image6  from '../src/atoms/images/image6.jpg';
import image7  from '../src/atoms/images/image7.jpg';

export default {
  title: "images",
  component: StyledImage,
  decorator: [withA11y]
};

const themes = {
  mode: "light"
};

export const image = () => (
  <ThemeProvider theme={themes}>  
    <section className="bg-dark">
      <StyledImage
      src = {image6}
      height = "xxlarge"
      width = "xxlarge"
      />
      <br>
      </br>
      <div>Longer Image</div>
      <StyledImage
      src = {image7}
      height = "xxxlarge"
      width = "xxlarge"
      />                
    </section>
  </ThemeProvider>
);
