import React from "react";
import FooterSocials from "../molecules/socials";
import Footerfoot from "../molecules/footer";

function Footer() {
  return (
    <div className="d-flex flex-column align-items-center">
      <div className="col-md">
        <div ><Footerfoot></Footerfoot></div>
      </div>
      <div className="col-md">
        <FooterSocials
        />
      </div>
    </div>
  );
}
export default Footer;
