import React from "react";
import FooterSocials from "../molecules/socials";
import Footerfoot from "../molecules/footer";

function Footer() {
  return (
    <div className="d-flex flex-column align-items-center">
      {/* <div className="col-md one"> */}
        <Footerfoot></Footerfoot>
      {/* </div> */}
      <div className="col-md two">
        <FooterSocials
        />
      </div>
    </div>
  );
}
export default Footer;
