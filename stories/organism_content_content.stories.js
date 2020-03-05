import ContentHeadContent from '../src/organisms/content-head-content'
import React from 'react'
import { StyledImage } from '../src/atoms/images/index'


export default {
    title: "content_content",
    component: ContentHeadContent,
  };

  export const content_content = () => (
     
      <section className="bg-dark">
      <div className="d-flex justify-content-around">
      <ContentHeadContent/>
      </div>
      </section>
  );
