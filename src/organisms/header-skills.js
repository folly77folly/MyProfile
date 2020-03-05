import React from 'react'
import HeaderSkills from '../molecules/header-skills'
import HeaderSkillsRing from '../molecules/header-skills-ring'
import image6 from '../atoms/images/image6.jpg'


function HeaderSkill () {
    return (
         <div className="d-flex flex-column align-items-center">
          <div className ="col-4 ">
           <HeaderSkills/>
          </div>
          <div><HeaderSkillsRing /></div>
         </div>   
    );
  }
export default HeaderSkill