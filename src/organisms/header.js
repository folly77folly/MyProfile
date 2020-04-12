import React from "react";
import Header1 from "../molecules/header";
import { StyledImage } from "../atoms/images/index";
import profile from "../atoms/images/profile1.jpg";
import styled from 'styled-components'

function HeaderImage() {
  return (
    <DivContainer>
      <TextContainer>
        <Header1></Header1>
      </TextContainer>
      <ImageContainer>
        <StyledImage
          src={profile}
          className="rounded-circle"
          height="xxxlarge"
          width="xxxlarge"
        />
      </ImageContainer>
    </DivContainer>
  );
}

const DivContainer = styled.div`
margin:0.5rem 4rem;
display:flex;
justify-content: space-between;
flex-wrap : wrap;

@media(max-width:900px){
  margin:0;
  padding:1rem;

}
`

const TextContainer = styled.div`
margin:0;
padding:0;
width : 50%;

@media(max-width:900px){
  width : 100%;
}
`
const ImageContainer = styled.div`
display:flex;
justify-content:flex-end;

@media(max-width:900px){
  justify-content:center;
  img{
    height:100%;
    width:90%;
  }

}
`
export default HeaderImage;
