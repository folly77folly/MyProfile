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
    xlarge: { light: "font-size :2rem", dark: "font-size :2rem" },
    xxlarge: { light: "font-size :2rem", dark: "font-size :2rem" },
  });


  export const fontweight = theme.variants("mode", "fontweight", {
    primary: { light: "font-weight :normal", dark: "font-weight :normal" },
    secondary: { light: "font-weight :bold", dark: "font-weight :bold" },
  });

  export const fontfamily = theme.variants("mode", "fontfamily", {
    primary: { light: "font-family :Montserrat", dark: "font-size :Montserrat" },
    secondary: { light: "font-family :Montserrat", dark: "font-size :Montserrat" },
    
  });

  export const width = theme.variants("mode", "width", {
    small: { light: "width :1rem", dark: "width :1rem" },
    medium: { light: "width :2rem", dark: "width :2rem" },
    large: { light: "width :6rem", dark: "width :6rem" },
    xlarge: { light: "width :8rem", dark: "width :8rem" },
    xxlarge: { light: "width :15rem", dark: "width :15rem" },
    
  });

  export const height = theme.variants("mode", "height", {
    small: { light: "height :1rem", dark: "height :1rem" },
    medium: { light: "height :2rem", dark: "height :2rem" },
    large: { light: "height :6rem", dark: "height :6rem" },
    xlarge: { light: "height :8rem", dark: "height :8rem" },
    xxlarge: { light: "height :15rem", dark: "height :15rem" },
    xxxlarge: { light: "height :25rem", dark: "height :25rem" },
    
  });

 export const borderradius = theme.variants("mode", "borderradius", {
    primary: { light: "0.2rem", dark: "0.2rem" },
    secondary: { light: "0.5rem", dark: "0.5rem" },
    circle: { light: "50%", dark: "50%" },
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
  
  