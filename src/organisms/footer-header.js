import React from "react";
import FooterSide from "../molecules/footer-header";
import { StyledImage } from "../atoms/images/index";
import image6 from "../atoms/images/image6.jpg";

function FooterHeader() {
  return (
    <div className="d-flex justify-content-center" style={{height:"25rem"}}>
      <div className="col-md-5" style={{height:"50%"}}>
        <div style={{height:"30%"}}></div>
        <div style={{height:"30%"}}><FooterSide></FooterSide></div>
        <div style={{height:"30%"}}></div>
      </div>
      <div className="col-md-5" style={{height:"100%"}}>
        <StyledImage
          src={image6}
          height="100%"
        />
      </div>
    </div>
  );
}
export default FooterHeader;
