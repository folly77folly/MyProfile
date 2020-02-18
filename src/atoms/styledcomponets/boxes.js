import React from 'react'
import styled from 'styled-components'

const Box = styled.div`
height :5em;
width : 7em;
background : ${props => props.colored ? "#6f87ff" : "white"}
`

// class Ring extends React.Component{
//     render(){
//         return(
//             <div className="progress">
//             <div className="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">ddjghggjkjhgjhghgjgjkgjhgkjkkjgjkhkg</div>
//             </div>
//         )
//     }
// }

export default Box
