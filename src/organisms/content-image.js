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
    <div className="col-12 d-flex justify-content-center p-3" style={{height:"45rem",width:"40rem", borderColor:"yellow"}}>
    <div>
      <div className="p-2" ><StyledImage src={image6} height="xylarge"width="xylarge"/></div>
      <div className="p-2" ><StyledImage src={image6} height="xylarge"width="xylarge"/></div>
      <div className="p-2" ><StyledImage src={image6} height="xylarge"width="xylarge"/></div>
    </div>
    <div>
    <div className="p-2" style={{height:"50%"}} ><StyledImage src={image6} style={{height:"100%",width:"100%"}}/></div>

    <div className="p-2" style={{height:"50%"}} ><StyledImage src={image6} style={{height:"100%",width:"100%"}}/></div>    
    </div>
    <div>
    <div className="p-2" ><StyledImage src={image6} height="xylarge"width="xylarge"/></div>
    <div className="p-2" ><StyledImage src={image6} height="xylarge"width="xylarge"/></div>
    <div className="p-2" ><StyledImage src={image6} height="xylarge"width="xylarge"/></div>      
    </div>
    </div>
    <div className="col-12 d-flex justify-content-center mt-3 mb-3" ><StyledButttonNew text="See More"/></div>
    </ThemeProvider>
    </React.Fragment>
  );
}
export default Content_Images;
