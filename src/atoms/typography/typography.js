import React from 'react'
import {StyledTypography} from './mixins'


export  function StyledTypographyNew() {
    return (
        <StyledTypography fontsize ="large" color="primarylight" fontfamily="primary">Hello</StyledTypography>
        )
}

export  function StyledTypographyLarge() {
    return (
        <StyledTypography fontsize ="xxlarge" color="secondary" fontfamily="primary">I'M JACK BAKY</StyledTypography>
        )
}

export  function StyledTypographySmall() {
    return (
        <StyledTypography fontsize ="medium" color ="secondary" fontfamily="primary"> lorem eposum </StyledTypography>
        )
}