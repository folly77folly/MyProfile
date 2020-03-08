import styled from 'styled-components'
import {fontsize, height, width} from '../typography/mixins'
import {color, backgroundColor } from '../color/mixins'

const Line = styled.div`
overflow-wrap: break-word;
overflow: hidden;
display: flex;
justify-content: center;
align-items: center;
padding : 4rem;
font-weight:bolder;
${color};
${height};
${width};
${backgroundColor};
${fontsize};
`

export default Line
