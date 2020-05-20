import React from 'react';
import './App.css';
import { ThemeProvider } from "styled-components";

import HeaderContent1 from './organisms/header-content'
import HeaderSkill from './organisms/header-skills'
import styled from 'styled-components'

const themes = {
  mode: "light"
};


function About() {
  return (
    <ThemeProvider theme={themes}>
    <div className="App">
      <header className="App-header">
        <Wrapper>
          <HeaderContent1/>
        </Wrapper>
        <div style={{marginTop:"4rem"}}><HeaderSkill /></div>       
      </header>
    </div>      
    </ThemeProvider>  

  );
}

export default About;

const Wrapper = styled.div`
margin-top:8rem;
padding: 0.5rem 4rem;

@media(max-width : 900px){
  margin-top:2rem;
padding: 0;
}
`;