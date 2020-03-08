import React from "react";
import HeaderContent from "../molecules/header-content";
import { StyledImage } from "../atoms/images/index";
import image6 from "../atoms/images/image6.jpg";

function HeaderContent1() {
  return (
    <div className="d-flex justify-content-around">
      <div className="col-md-4">
        <StyledImage
          src={image6}
          className="rounded-circle"
          height="xxxlarge"
          width="xxxlarge"
        />
      </div>

      <div className="col-md-4">
        <HeaderContent />
      </div>
    </div>
  );
}
export default HeaderContent1;
