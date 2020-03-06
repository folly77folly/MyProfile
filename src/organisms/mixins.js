import React from "react";
import Navlink from "../molecules/links";
import StyledLogo from "../atoms/logo/index";

function LogoNavlink() {
  return (
    <div className="d-flex justify-content-around align-items-end">
      <StyledLogo color="secondary">Personal</StyledLogo>
      <Navlink />
    </div>
  );
}
export default LogoNavlink;
