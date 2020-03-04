import Header1 from '../src/molecules/header'
import React from 'react'
import { ThemeProvider } from "styled-components";

export default {
    title: "Header1_molecule",
    component: Header1,
  };

  export const Header1molecule = () => (
 
      <section className="bg-dark">
        <Header1
        />       
      </section>
    
  );
