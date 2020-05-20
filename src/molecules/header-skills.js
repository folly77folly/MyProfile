import React from "react";
import "./linklogo.css";
import { ThemeProvider } from "styled-components";
import { StyledTypography } from "../atoms/typography/mixins";
import Line from '../atoms/styledcomponets/boxes'
import styled from 'styled-components'

const themes = {
  mode: "light"
};

function HeaderSkills() {
  return (
    <ThemeProvider theme={themes}>
      {/* <div className=" col-12 d-flex flex-column justify-content-end align-items-center"> */}
      <Wrapper>
        <StyledTypography
          center
          fontsize="xlarge"
          color="secondary"
          fontfamily="primary"
          children="Technical Skills"
        />
        <Line
        // style={{height:"2px",width:"100px", backgroundColor:"white"}}
        className ="line"
        padding="nopadd"
        margin="nomarg"
        />
        <br></br>
        <SkillsStyle>
        <StyledTypography
        center
          fontsize="large"
          color="secondary"
          fontfamily="primary"
          fontweight="primary"
          children="Server side (Python with Flask, Django Framework and Cake-PHP, Database modeling and handling with Postgres SQL, Mysql, Microsoft Sql server, AJAX Technologies)"
        />
        <IconStyle>
          <i class="devicon-python-plain"></i>
          <i class="devicon-postgresql-plain"></i>
          <i class="devicon-django-plain"></i>
          <i class="devicon-php-plain"></i>
        </IconStyle>
        </SkillsStyle>
        <SkillsStyle>
        <StyledTypography
        center
          fontsize="large"
          color="secondary"
          fontfamily="primary"
          fontweight="primary"
          children="Front End (React, HTML 5, CSS with Utility Tools, Responsive Website design using Styled Component,Bootstrap Classes and CSS Media Queries, Javascript, JQuery)"
        /> 
        <IconStyle>
        <i class="devicon-react-original"></i>
        <i class="devicon-html5-plain"></i>
        <i class="devicon-css3-plain"></i>
        <i class="devicon-jquery-plain"></i>
        </IconStyle>
        </SkillsStyle>
        <SkillsStyle>
        <StyledTypography
        center
          fontsize="large"
          color="secondary"
          fontfamily="primary"
          fontweight="primary"
          children="Version Control using Git, Docker understanding of Agile Software Development using Project Management tools such as Trello, Webservices development, Integration to Payment Gateways"          
        /> 
        <IconStyle>
        <i class="devicon-github-plain"></i>
        <i class="devicon-trello-plain"></i>
        <i class="devicon-docker-plain"></i>
        <i class="devicon-gitlab-plain"></i>

        </IconStyle>
        </SkillsStyle>                
      </Wrapper>
    </ThemeProvider>
  );
}
export default HeaderSkills;

const Wrapper = styled.div`
display :flex;
flex-direction :column;
align-items :center;


.line{
  height : 3px;
  width : 250px;
  background-color:white;
}
@media(max-width:900px){
  width:100%;
  display:flex;
  flex-direction:column;
  align-items:center;
}
`
const SkillsStyle = styled.div`
width :50%;
margin-top:1rem;
@media(max-width:600px){
  width :100%;
}
`
const IconStyle = styled.div`
width:100%;
display : flex;
justify-content:center;
i{
  font-size : 5rem;
  margin-left : 1rem;
  color : white;
}

`