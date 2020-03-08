import React from "react";
import ContentHeader from "../molecules/content-header";
import { StyledImage } from "../atoms/images/index";
import  Line  from "../atoms/styledcomponets/boxes";
import image6 from "../atoms/images/image6.jpg";

function Content_Header() {
  return (
    <div className="d-flex justify-content-center">
      <div className="col-md-5 ">
        <ContentHeader></ContentHeader>
      </div>
      <div className="col-md-5 d-flex flex-column justify-content-end">
        <div className="d-flex justify-content-center">
        <Line
          height="xylarge"
          width="xylarge"
          backgroundColor="primarylight"
          color="secondary"
          fontsize="large"
          children="Elegant Themes"
        />
        </div>
        <div className="d-flex justify-content-center ">
          <div>
          <Line
          height="xylarge"
          width="xylarge"
          backgroundColor="primary"
          color="primary"
          fontsize="large"
          children="Ecology Themes"
        />
          </div>
          <div>
          <Line
          height="xylarge"
          width="xylarge"
          backgroundColor="primary"
          color="primary"
          fontsize="large"
          children="Avada Themes"
        />
          </div>
        </div>
       </div>      
    </div>
  );
}
export default Content_Header;
