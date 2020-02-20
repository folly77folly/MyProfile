import theme from "styled-theming";
import {color} from '../color/mixins'

import styled from 'styled-components'
import PropTypes from 'prop-types'


export const fontsize = theme.variants("mode", "fontsize", {
    primary: { light: "font-size :0.8rem", dark: "font-size :0.8rem" },
    medium: { light: "font-size :0.7rem", dark: "font-size :0.7rem" },
    xxsmall: { light: "font-size :0.3rem", dark: "font-size :0.7rem" },
    xsmall: { light: "font-size :0.5rem", dark: "font-size :0.7rem" },
    large: { light: "font-size :1rem", dark: "font-size :1rem" },
    xxlarge: { light: "font-size :2rem", dark: "font-size :2rem" },
  });


  export const fontweight = theme.variants("mode", "fontweight", {
    primary: { light: "font-size :0.8rem", dark: "font-size :0.8rem" },
    secondary: { light: "font-size :3rem", dark: "font-size :3rem" },
    primarylight: { light: "font-weight :regular", dark: "font-weight :regular" },
    secondarylight: { light: "font-weight :normal", dark: "font-weight :normal" },
    
  });

  export const fontfamily = theme.variants("mode", "fontfamily", {
    primary: { light: "font-family :Montserrat", dark: "font-size :Montserrat" },
    secondary: { light: "font-family :Montserrat", dark: "font-size :Montserrat" },
    
  });


  export const StyledTypography = styled.h1`
  ${color};
  ${fontsize};
  ${fontweight};
  ${fontfamily};
  padding-right: 0.6em;
  padding-left: 0.6em;
  `
  
  StyledTypography.PropTypes ={
    variant:PropTypes.oneOf(["primary","secondary","primarylight"])
  }
  
  StyledTypography.defaultProps = {
    variant: "primary",
  };
  
  