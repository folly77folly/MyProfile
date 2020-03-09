import styled from 'styled-components'
import {fontsize, height, width,padding,margin} from '../typography/mixins'
import {color, backgroundColor } from '../color/mixins'

const Line = styled.div`
overflow-wrap: break-word;
overflow: hidden;
display: flex;
justify-content: center;
align-items: center;
padding : 4rem;
font-weight:bolder;
margin-top:1rem;
margin-left:1rem;
${color};
${height};
${width};
${backgroundColor};
${fontsize};
${padding};
${margin};
`

export default Line
