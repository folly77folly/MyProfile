import React from 'react'

class DescriptionText extends React.Component{
    render(){
        return(
        <span className='text-white text-muted'>{this.props.text}</span>
        )
    }
}

export default DescriptionText
