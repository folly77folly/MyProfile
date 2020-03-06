import React from "react";
import { ThemeProvider } from "styled-components";
import { Whitelinkedin,Whitefacebook,Whitetwitter,Whitegoogle,Whiteyoutube } from "../atoms/icons/mixins";

const themes = {
  mode: "light"
};

function FooterSocials() {
  return (
    <ThemeProvider theme={themes}>
      <div className="d-flex justify-content-center">
      <Whitelinkedin
            width ="small"
            height ="small" 
            margin ="small"/>
      <Whitegoogle
            width ="small"
            height ="small" 
            margin ="small"/>
      <Whitefacebook
            width ="small"
            height ="small"
            margin ="small" />
      <Whitetwitter
            width ="small"
            height ="small"
            margin ="small" />
      <Whiteyoutube 
            width ="small"
            height ="small"
            margin ="small"/>
      </div>
    </ThemeProvider>
  );
}
export default FooterSocials;
