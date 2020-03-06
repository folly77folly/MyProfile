import Content_Images from '../src/organisms/content-image'
import React from 'react'
import { StyledImage } from '../src/atoms/images/index'


export default {
    title: "content_img",
    component: Content_Images,
  };

  export const content_img = () => (
      <section className="bg-dark">
      <div>
      <Content_Images/>
      </div>
    </section>
  );
