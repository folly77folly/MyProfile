import React from 'react'
import {Butttonnormal, Butttonpill} from './styles'


export default function Button() {
    return (
        <Butttonnormal className = "btn btn-light" children ="Click Me" />
        )
}

export  function Buttonpill() {
    return (
        <Butttonpill className = "badge btn badge-pill" children ="Click Pill" />
        )
}