import React from "react";
import HeaderContent from "../molecules/header-content";
import { StyledImage } from "../atoms/images/index";
import profile1 from "../atoms/images/profile1.jpg";
import styled from 'styled-components'

function HeaderContent1() {
  return (
    <Wrapper>
      <ActiveStyle>
        <StyledImage
          src={profile1}
          height="xxxlarge"
          width="xxxlarge"
        />
      </ActiveStyle>

      <AboutStyle>
        <HeaderContent />
      </AboutStyle>
    </Wrapper>
  );
}
export default HeaderContent1;

const Wrapper = styled.div`
width : 100%;
display:flex;
@media(max-width:900px){
  width : 100%;
  flex-wrap:wrap;
}
`


const ActiveStyle = styled.div`
width : 50%;

@media(max-width:900px){
  display:flex;
  justify-content:center;
  width : 100%;
}
`
const AboutStyle = styled.div`
display : flex;
justify-content: flex-end;
width : 50%;

@media(max-width:900px){
  width : 100%;
  display:flex;
  justify-content:center;

  p{
    display:flex;
    justify-content:center;
  }
}
`