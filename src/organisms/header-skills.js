import React from "react";
import HeaderSkills from "../molecules/header-skills";
import styled from 'styled-components'

function HeaderSkill() {
  return (
    <SkillsWrapper>
        <HeaderSkills />
      {/* <div>
        <HeaderSkillsRing />
      </div> */}
    </SkillsWrapper>
  );
}
export default HeaderSkill;

const SkillsWrapper = styled.div`
padding :1rem;
display:flex;
flex-direction:column;
align-items:center;
// background-Color : black;

`
