import React from 'react'
import './linklogo.css'
import { ThemeProvider } from "styled-components"
import Circletube from '../atoms/circle/index'

const themes = {
    mode: "light"
  };
  

function HeaderSkillsRing () {
    return (
        <ThemeProvider theme={themes}>
        <div className="d-flex">
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
        </div>
        </ThemeProvider>

    );
  }
export default HeaderSkillsRing