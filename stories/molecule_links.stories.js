import Btnlinks from '../src/molecules/links2'
import React from 'react'
import { ThemeProvider } from "styled-components";

export default {
    title: "Btnmolecule",
    component: Btnlinks,
  };

  export const Btnmolecule = () => (
 
      <section className="bg-dark">
        <Btnlinks
        />       
      </section>
    
  );
