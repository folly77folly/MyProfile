import Header1 from '../src/molecules/header'
import React from 'react'
import { StyledImage } from '../src/atoms/images/index'
import image6 from '../src/atoms/images/image6.jpg'

export default {
    title: "organism_Header1",
    component: Header1,
  };

  export const Header1molecule = () => (
     
      <section className="bg-dark">
      <div className="d-flex justify-content-around">
      <Header1/>
      <StyledImage
       src = {image6}
       className="rounded-circle"
       height = "xxxlarge"
       width = "xxxlarge"
       />        
      </div>
      </section>
    
  );
