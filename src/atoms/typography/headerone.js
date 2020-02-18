import React from 'react'

class HeaderOne extends React.Component{
    render(){
        return(
        <h1 className='text-white'>{this.props.text}</h1>
        )
    }
}

export default HeaderOne
