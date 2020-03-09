import React from "react";
import "./linklogo.css";
import { ThemeProvider } from "styled-components";
import { StyledTypography } from "../atoms/typography/mixins";
import Line from '../atoms/styledcomponets/boxes'

const themes = {
  mode: "light"
};

function HeaderSkills() {
  return (
    <ThemeProvider theme={themes}>
      <div className=" col-12 d-flex flex-column justify-content-end align-items-center">
        <StyledTypography
          fontsize="xlarge"
          color="secondary"
          fontfamily="primary"
          children="My Skills"
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
          children="Server side (Python with Flask Framework, Database modeling and handling with Mysql, Microsoft Sql server, AJAX Technologies)"
        />
        <StyledTypography
        style={{textAlign:"center"}}
          fontsize="xsmall"
          color="secondary"
          fontfamily="primary"
          fontweight="primary"
          children="Front End (HTML 5, CSS, Responsive Website design using Bootstrap Classes and CSS Media Queries, Javascript, JQuery)"
        /> 
        <StyledTypography
        style={{textAlign:"center"}}
          fontsize="xsmall"
          color="secondary"
          fontfamily="primary"
          fontweight="primary"
          children="Version Control using Git, understanding of Agile Software Development using Project Management tools such as Trello, Webservices development, Integration to Payment Gateway"
        />                
      </div>
    </ThemeProvider>
  );
}
export default HeaderSkills;
