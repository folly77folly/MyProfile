import React from 'react'
import {StyledTypography} from './mixins'


export  function StyledTypographyNew() {
    return (
        <StyledTypography fontsize ="xlarge" color="primarylight" fontfamily="primary">Hello</StyledTypography>
        )
}

export  function StyledTypographyLarge() {
    return (
        <StyledTypography fontsize ="xxlarge" color="secondary" fontfamily="primary">I'M Gbolahan Eniodunmo</StyledTypography>
        )
}

export  function StyledTypographySmall() {
    return (
        <StyledTypography fontsize ="large" color ="secondary" fontfamily="primary" fontweight="primary">
            Expert in Webdesign UX/UI Development
            </StyledTypography>
        )
}