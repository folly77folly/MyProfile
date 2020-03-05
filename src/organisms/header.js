import React from 'react'
import Header1 from '../molecules/header'
import {StyledImage} from '../atoms/images/index'
import image6 from '../atoms/images/image6.jpg'


function HeaderImage () {
    return (
         <div className = "d-flex justify-content-center">
           <div className = "col-md-5"><Header1></Header1></div>
           <div className = "col-md-5">
           <StyledImage
            src = {image6}
            className="rounded-circle"
            height = "xxxlarge"
            width = "xxxlarge"              
              />             
           </div>
         </div>   
    );
  }
export default HeaderImage