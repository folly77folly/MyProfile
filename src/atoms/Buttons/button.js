import React from 'react'
import {StyledButton} from './styles'


export  function StyledButttonNew() {
    return (
        <StyledButton className ="btn" 
        color="primary" 
        fontweight= "secondary"
        >Download CV</StyledButton>
        )
}

export  function StyledButttonNew2() {
    return (
        <StyledButton 
        className ="btn badge-pill" 
        color="secondary" 
        fontweight= "primary" 
        backgroundColor="secondary"
        hover ="secondary"
        hoverfontcolor="secondary"
        bordercolor="secondary"
        >
        illustration</StyledButton>
        )
}