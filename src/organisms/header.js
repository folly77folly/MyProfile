import React from 'react'
import Header1 from '../molecules/header'
import StyledImage from '../atoms/images/index'


function HeaderImage () {
    return (
         <div className = "d-flex justify-content-around align-items-end">
             <Header1></Header1>
             <StyledImage />
         </div>   
    );
  }
export default HeaderImage