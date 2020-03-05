import Content_Header from '../src/organisms/content-header'
import React from 'react'
import { StyledImage } from '../src/atoms/images/index'


export default {
    title: "organism_Content1",
    component: Content_Header,
  };

  export const Header1molecule = () => (
     
      <section className="bg-dark">
      <div className="d-flex justify-content-around">
      <Content_Header/>
      </div>
      </section>
    
  );
