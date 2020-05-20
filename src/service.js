import React from 'react';
import './App.css';
import { ThemeProvider } from "styled-components";
import ContentHeader from './organisms/content-header'
import styled from 'styled-components';

const themes = {
  mode: "light"
};


function Services() {
  return (
    <ThemeProvider theme={themes}>
          <Wrapper>
          <ContentHeader />
          </Wrapper>   
    </ThemeProvider>
  );
}

export default Services;

const Wrapper = styled.div`
margin-top:8rem;
padding: 0.5rem 4rem;

@media(max-width:900px){
  padding :0;
  margin-top:2rem;
}
`;
