import React from "react";
import "./linklogo.css";
import { ThemeProvider } from "styled-components";
import { StyledTypography } from "../atoms/typography/mixins";
import Line from '../atoms/styledcomponets/boxes'

const themes = {
  mode: "light"
};

function HeaderSkills3() {
  return (
    <ThemeProvider theme={themes}>
      <div className=" col-8 d-flex flex-column justify-content-end align-items-center">
        <StyledTypography
          fontsize="xlarge"
          color="secondary"
          fontfamily="primary"
          children="Latest Work"
        />
        <Line
        style={{height:"2px",width:"100px", backgroundColor:"white"}}
        backgroundColor="primary"
        padding="nopadd"
        margin="nomarg"
        />
        <br></br>
        <StyledTypography
        style={{textAlign:"center"}}
          fontsize="xsmall"
          color="secondary"
          fontfamily="primary"
          fontweight="primary"
          children="Akeem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut hdk. sed do eiusmod tempor incididunt ut hdk"
        />
      </div>
    </ThemeProvider>
  );
}
export default HeaderSkills3;
