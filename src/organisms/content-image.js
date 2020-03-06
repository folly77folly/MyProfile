import React from "react";
import { StyledImage } from "../atoms/images/index";
import image6 from "../atoms/images/image6.jpg";
import {ThemeProvider} from 'styled-components'
import { StyledButttonNew } from '../atoms/Buttons/button'

const themes = {
  mode : "light",
};

function Content_Images() {
  return (
    <React.Fragment>
    <ThemeProvider theme={themes}>
    <div className="col-12 d-flex justify-content-center">
    <div>
      <div className="p-1" ><StyledImage src={image6} height="xlarge"width="xlarge"/></div>
      <div className="p-1" ><StyledImage src={image6} height="xlarge"width="xlarge"/></div>
      <div className="p-1" ><StyledImage src={image6} height="xlarge"width="xlarge"/></div>
    </div>
    <div>
    <div className="p-1" ><StyledImage src={image6} height="xlarge"width="xlarge"/></div>
    <div className="p-1" ><StyledImage src={image6} height="xlarge"width="xlarge"/></div>
    <div className="p-1" ><StyledImage src={image6} height="xlarge"width="xlarge"/></div>    
    </div>
    <div>
    <div className="p-1" ><StyledImage src={image6} height="xlarge"width="xlarge"/></div>
    <div className="p-1" ><StyledImage src={image6} height="xlarge"width="xlarge"/></div>
    <div className="p-1" ><StyledImage src={image6} height="xlarge"width="xlarge"/></div>      
    </div>
    </div>
    <div className="col-12 d-flex justify-content-center mt-3" ><StyledButttonNew text="See More"/></div>
    </ThemeProvider>
    </React.Fragment>
  );
}
export default Content_Images;
