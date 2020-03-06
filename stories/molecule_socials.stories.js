import FooterSocials from '../src/molecules/socials'
import React from 'react'
import { ThemeProvider } from "styled-components";

export default {
    title: "Social Icons",
    component: FooterSocials,
  };

  export const icons = () => (
 
      <section className="bg-dark">
        <FooterSocials
        />       
      </section>
    
  );
