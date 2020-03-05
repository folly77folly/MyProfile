
import styled from 'styled-components'
import {width, height} from '../typography/mixins'
import {backgroundColor} from '../color/mixins'

const Circletube = styled.div`
border: 6px solid #6f87ff;
border-right: 6px solid #3d2d71;
border-radius:50%;
color: white;
margin: 25px 30px 55px;
overflow-wrap: break-word;
overflow: hidden;
display: flex;
justify-content: center;
align-items: center;
padding : 4rem;
${height};
${width};
${backgroundColor};

`


export default Circletube
