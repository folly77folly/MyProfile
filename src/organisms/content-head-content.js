import React from "react";
import HeaderSkills2 from "../molecules/header-skills";
import Btnlinks from "../molecules/links2";

function ContentHeadContent() {
  return (
    <div className="d-flex flex-column align-items-center">
      <div className="col-8">
        <HeaderSkills2 />
      </div>
      <div>
        <Btnlinks />
      </div>
    </div>
  );
}
export default ContentHeadContent;
