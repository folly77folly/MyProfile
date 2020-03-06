import React from "react";
import { ThemeProvider } from "styled-components";
import { YellowStar } from "../atoms/icons/mixins";

const themes = {
  mode: "light"
};

function HeaderStars() {
  return (
    <ThemeProvider theme={themes}>
      <div className="d-flex">
      <YellowStar
            width ="small"
            height ="small" />
      <YellowStar
            width ="small"
            height ="small" />
      <YellowStar
            width ="small"
            height ="small" />
      <YellowStar
            width ="small"
            height ="small" />
      <YellowStar 
            width ="small"
            height ="small"/>
      </div>
    </ThemeProvider>
  );
}
export default HeaderStars;
