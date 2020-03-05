import React from 'react'
import ContentHeader from '../molecules/content-header'
import {StyledImage} from '../atoms/images/index'
import image6 from '../atoms/images/image6.jpg'


function Content_Header () {
    return (
         <div className = "d-flex justify-content-center">
           <div className = "col-md-5"><ContentHeader></ContentHeader></div>
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
export default Content_Header