import React from 'react'
import {Link} from 'react-router-dom'

class NavLink extends React.Component{

    render(){
        return(
        <Link>{this.props.linkname}</Link>
        )
    }
}

export default NavLink