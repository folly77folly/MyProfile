import Footer from '../src/organisms/footerfoot'
import React from 'react'
import { StyledImage } from '../src/atoms/images/index'


export default {
    title: "footer",
    component: Footer,
  };

  export const Footers = () => (
     
      <section className="bg-dark">
      <div className="d-flex justify-content-around">
      <Footer/>     
      </div>
      </section>
    
  );
