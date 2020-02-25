import React from 'react'
import InboundLink from '../atoms/Links'
import './linklogo.css'


function Navlink () {
    return (
        <ul className="d-flex link">
            <li><InboundLink href="/">Home</InboundLink></li>
            <li><InboundLink href="/">About</InboundLink></li>
            <li><InboundLink href="/">Service</InboundLink></li>
            <li><InboundLink href="/">Portfolio</InboundLink></li>
            <li><InboundLink href="/">Contact</InboundLink></li>
        </ul>
    );
  }
export default Navlink