import FooterHeader from '../src/organisms/footer-header'
import React from 'react'
import { StyledImage } from '../src/atoms/images/index'


export default {
    title: "organism_footer",
    component: FooterHeader,
  };

  export const FooterOrganism = () => (
     
      <section className="bg-dark">
      <div className="d-flex justify-content-around">
      <FooterHeader/>     
      </div>
      </section>
    
  );
