import React from "react";
import "./linklogo.css";
import { ThemeProvider } from "styled-components";
import { StyledTypography } from "../atoms/typography/mixins";
import { StyledButttonNew } from '../atoms/Buttons/button'

const themes = {
  mode: "light"
};

function Footerfoot() {
  return (
    <ThemeProvider theme={themes}>
      <div className="d-flex flex-column align-items-center" style={{marginTop:230}}>
    
      <StyledTypography
          fontsize="xlarge"
          color="secondary"
          fontfamily="primary"
          children="You have any project"
        />
        <StyledButttonNew text = "Hire Me"/>
        
        <StyledTypography
          fontsize="small"
          color="secondary"
          fontfamily="primary"
          fontweight="primary"
          children="Lorem ipsum dolor sit amet, consectetur adipiscing elit, t enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut."
          style={{textAlign:"center", width:"50%"}}/>  
   
      </div>
    </ThemeProvider>
  );
}
export default Footerfoot;
