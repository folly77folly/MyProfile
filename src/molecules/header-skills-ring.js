import React from 'react'
import './linklogo.css'
import { ThemeProvider } from "styled-components"
import Circletube from '../atoms/circle/index'
import styled from 'styled-components'

const themes = {
    mode: "light"
  };
  

function HeaderSkillsRing () {
    return (
        <ThemeProvider theme={themes}>
        <Wrapper>
         <Circletube children="Django"
          height ="xlarge"
          width ="xlarge"
          backgroundColor="secondary"
         />
         <Circletube children="Python"
          height ="xlarge"
          width ="xlarge"
          backgroundColor="secondary"
         />
         <Circletube children="HMTL & CSS"
          height ="xlarge"
          width ="xlarge"
          backgroundColor="secondary"
         />
         <Circletube children="React"
          height ="xlarge"
          width ="xlarge"
          backgroundColor="secondary"
         />                           
        </Wrapper>
        </ThemeProvider>

    );
  }
export default HeaderSkillsRing
const Wrapper = styled.div`
display:flex;
flex-wrap:wrap;

@media(max-width:900px){
  width :100%;
  display:flex;
  justify-content:center;
}

`