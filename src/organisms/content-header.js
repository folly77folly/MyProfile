import React from "react";
import ContentHeader from "../molecules/content-header";
import  Line  from "../atoms/styledcomponets/boxes";
import styled from 'styled-components';

function Content_Header() {
  return (
    <Wrapper>
      <ActiveStyle>
      <ContentHeader></ContentHeader>
      </ActiveStyle>
      <BoxContainer>
        <Line
          height="xylarge"
          width="xylarge"
          color="primary"
          backgroundColor="primary"
          fontsize="large"
          children="Financial Softwares"
        />
        <InnerBoxContainer>
            <Line
              height="xylarge"
              width="xylarge"
              backgroundColor="primary"
              color="primary"
              fontsize="large"
              children="School Management Solution"
            />
            <Line
            height="xylarge"
            width="xylarge"
            backgroundColor="primary"
            color="primary"
            fontsize="large"
            children="Mobile Application"
            />
        </InnerBoxContainer>
       </BoxContainer>      
    </Wrapper>
  );
}
export default Content_Header;

const Wrapper = styled.div`
width : 100%;
display:flex;
padding: 1rem;


@media(max-width:900px){
  flex-wrap:wrap ;
}
`
const ActiveStyle = styled.div`
width : 50%;

@media(max-width:900px){
  width : 100%;
}
`

const BoxContainer = styled.div`
width : 50%;
display:flex;
align-items:center;
flex-direction:column;

@media(max-width:900px){
  width : 100%;
}
`

const InnerBoxContainer = styled.div`
width : 100%;
display:flex;
justify-content:center;
`