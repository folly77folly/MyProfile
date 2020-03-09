import React from "react";
import Header1 from "../molecules/header";
import { StyledImage } from "../atoms/images/index";
import profile from "../atoms/images/profile1.jpg";

function HeaderImage() {
  return (
    <div className="col-12 d-flex justify-content-end align-items-center">
      <div className="col-md-5">
        <Header1></Header1>
      </div>
      <div className="col-md-6 d-flex justify-content-center">
        <StyledImage
          src={profile}
          className="rounded-circle"
          height="xxxlarge"
          width="xxxlarge"
        />
      </div>
    </div>
  );
}
export default HeaderImage;
