
import styled from 'styled-components'
import {width, height} from '../typography/mixins'
import {backgroundColor} from '../color/mixins'

const Circletube = styled.div`
border: 6px solid #6f87ff;
border-right: 6px solid #3d2d71;
border-radius:50%;
${height};
${width};
${backgroundColor};
`


export default Circletube
