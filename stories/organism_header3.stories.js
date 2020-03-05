import HeaderSkill from '../src/organisms/header-skills'
import React from 'react'
import { ThemeProvider } from 'styled-components';

export default {
    title: "organism_Header3",
    component: HeaderSkill,
  };

  const themes = {
    mode : "light",
    size : "60px",
};

  export const Header3organism = () => (
    <ThemeProvider theme={themes}>
      <section className="bg-dark">
       <HeaderSkill/>      
      </section>
      </ThemeProvider>
    
  );
