import React from "react";
import { StyledImage } from "../atoms/images/index";
import image4 from "../atoms/images/vkleen.png";
import image5 from "../atoms/images/hire.png";
import image6 from "../atoms/images/cooperative.png";
import image7 from "../atoms/images/hire.png";
import {ThemeProvider} from 'styled-components'
import { StyledButttonNew } from '../atoms/Buttons/button'
import '../App.css';

const themes = {
  mode : "light",
};

function Content_Images() {
  return (
    <React.Fragment>
    <ThemeProvider theme={themes}>
    <div className="col-12 d-flex justify-content-center p-3" style={{height:"45rem",width:"40rem"}}>
    <div>
      <div className="p-2 cont" ><StyledImage className ="image" src={image4} height="xylarge"width="xylarge"/>  
        <div class="middle">
          <div class="text">Web UI</div>
        </div>
      </div>
      <div className="p-2 cont" ><StyledImage className ="image"  src={image5} height="xylarge"width="xylarge"/>
        <div class="middle">
          <div class="text">Web UI</div>
        </div>      
      </div>
      <div className="p-2 cont" ><StyledImage className ="image"  src={image7} height="xylarge"width="xylarge"/>
        <div class="middle">
          <div class="text">Web UI</div>
        </div>       
      </div>
    </div>
    <div>
    <div className="p-2 cont" style={{height:"50%"}} ><StyledImage className ="image"  src={image7} style={{height:"100%",width:"100%"}}/>
    <div class="middle">
          <div class="text">Web UI</div>
        </div>     
    </div>

    <div className="p-2 cont" style={{height:"50%"}} ><StyledImage className ="image"  src={image6} style={{height:"100%",width:"100%"}}/>
        <div class="middle">
          <div class="text">Web UI</div>
        </div>     
    </div>    
    </div>
    <div>
    <div className="p-2 cont" ><StyledImage className ="image" src={image6} height="xylarge"width="xylarge"/>
        <div class="middle">
          <div class="text">Web UI</div>
        </div>       
    </div>
    <div className="p-2 cont" ><StyledImage className ="image" src={image5} height="xylarge"width="xylarge"/>
        <div class="middle">
          <div class="text">Web UI</div>
        </div>       
    </div>
    <div className="p-2 cont" ><StyledImage className ="image" src={image4} height="xylarge"width="xylarge"/>
        <div class="middle">
          <div class="text">Web UI</div>
        </div>  
    </div>      
    </div>
    </div>
    <div className="col-12 d-flex justify-content-center mt-3 mb-3" ><StyledButttonNew text="See More"/></div>
    </ThemeProvider>
    </React.Fragment>
  );
}
export default Content_Images;
