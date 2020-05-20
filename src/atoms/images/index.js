import styled from 'styled-components'
// import logos from '../images/logo512.png'
import { height,width } from '../typography/mixins'


export const StyledImage = styled.img.attrs({
    alt : 'myimage',
})

`${height};
${width};
border-radius : 50%;
transition-duration: 0.8s;
transition-property: transform;
&:hover{
    -webkit-transform:rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
};
`