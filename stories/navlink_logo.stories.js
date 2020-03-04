import React from 'react'
import LogoNavlink from '../src/organisms/mixins'
import { ThemeProvider } from "styled-components";


export default {
    title: "Navlinkorganisms",
    component: LogoNavlink,
  };

  const themes = {
    mode: "light"
  };

  export const logo_navlinks = () => (
    <ThemeProvider theme={themes}>  
      <section className="bg-dark">
        <LogoNavlink></LogoNavlink>
      </section>
    </ThemeProvider>
  );