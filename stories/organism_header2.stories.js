import HeaderContent1 from '../src/organisms/header-content'
import React from 'react'
import { ThemeProvider } from 'styled-components';

export default {
    title: "organism_Header2",
    component: HeaderContent1,
  };

  const themes = {
    mode : "light",
    size : "60px",
};

  export const Header2organism = () => (
    <ThemeProvider theme={themes}>
      <section className="bg-dark">
       <HeaderContent1/>      
      </section>
      </ThemeProvider>
    
  );
