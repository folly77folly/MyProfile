import React from "react";
import HeaderSkills3 from "../molecules/header-skills2";
import Btnlinks from "../molecules/links2";

function ContentHeadContent() {
  return (
    <div className="d-flex flex-column align-items-center">
      <div className="col-8 d-flex justify-content-center">
        <HeaderSkills3 />
      </div>
      <div>
        <Btnlinks />
      </div>
    </div>
  );
}
export default ContentHeadContent;
