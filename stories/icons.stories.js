import React from "react";
import {zapped} from "../src/atoms/icons/mixins";
import "bootstrap/dist/css/bootstrap.css";
import { withA11y } from "@storybook/addon-a11y";
import { ThemeProvider } from "styled-components";
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { RedZap } from '../src/atoms/icons/mixins'
import { YellowStar, Whitefacebook, Whitetwitter, Whitegoogle, Whitelinkedin, Whiteyoutube } from '../src/atoms/icons/mixins'

export default {
  title: "icons",
  component: RedZap,
  decorator: [withA11y]
};

const themes = {
  mode: "light"
};

export const icons = () => (
  <ThemeProvider theme={themes}>  
    <section className="bg-dark">
      <YellowStar
      width ="small"
      height ="small"
      />
      <br></br>
      <Whitefacebook
      width ="small"
      height ="small"
      backgroundColor="secondary"
      />
      <br></br>
      <Whitetwitter
      width ="small"
      height ="small"
      />     
      <br></br>
      <Whitegoogle
      width ="small"
      height ="small"
      />
      <br></br>
      <Whitelinkedin
      width ="small"
      height ="small"
      />
      <br></br>
      <Whiteyoutube
      width ="small"
      height ="small"
      />               
    </section>
  </ThemeProvider>
);
