import HeaderImage from '../src/organisms/header'
import React from 'react'
import { StyledImage } from '../src/atoms/images/index'


export default {
    title: "organism_Header1",
    component: HeaderImage,
  };

  export const Header1molecule = () => (
     
      <section className="bg-dark">
      <div className="d-flex justify-content-around">
      <HeaderImage/>     
      </div>
      </section>
    
  );
