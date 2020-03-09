import React from 'react'
import './linklogo.css'
import { ThemeProvider } from "styled-components"
import { StyledButttonNew } from '../atoms/Buttons/button'
import {StyledTypography} from '../atoms/typography/mixins'
import Line from '../atoms/styledcomponets/boxes'

const themes = {
    mode: "light"
  };
  

function ContentHeader () {
    return (
        <ThemeProvider theme={themes}>
        <div>
         <StyledTypography
         fontsize ="xlarge" 
         color="secondary" 
         fontfamily="primary"
         children ="Active Jobs"
          />
        <Line
        style={{height:"2px",width:"100px", backgroundColor:"white"}}
        backgroundColor="primary"
        padding="nopadd"
        margin="nomarg"
        />
        <br></br>          
         <StyledTypography
         fontsize ="small" 
         color ="secondary" 
         fontfamily="primary" 
         fontweight="primary"
         children="Currently I provide services for Ten(10)
         different organisations ranging from financial organisations
         Asset Management Individuals and a few cooperative societies.
         All these businesses comsume four(4) diffent software solutions
         developed and maintained by me."
         />
         <StyledTypography
         fontsize ="small" 
         color ="secondary" 
         fontfamily="primary" 
         fontweight="primary"
         children="My business is not limited to developing and deploying software, we also provide quality and reliable information on IT for business managers to enable them take wise business decisions. The companies that engaged My services have continued to retain My services for we saved them both time and money as they implemented their IT infrastructure."
         />         
         <StyledButttonNew text = "Read More"/>  
        </div>

        </ThemeProvider>

    );
  }
export default ContentHeader