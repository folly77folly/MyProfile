import theme from "styled-theming";
import {color, backgroundColor} from '../color/mixins'
import styled from 'styled-components'
import PropTypes from 'prop-types'


export const fontsize = theme.variants("mode", "fontsize", {
    primary: { light: "font-size :0.8rem", dark: "font-size :10rem" },
    medium: { light: "font-size :0.7rem", dark: "font-size :0.7rem" },
    xxsmall: { light: "font-size :0.3rem", dark: "font-size :0.7rem" },
    xsmall: { light: "font-size :0.7rem", dark: "font-size :0.7rem" },
    large: { light: "font-size :1.2rem", dark: "font-size :1.2rem" },
    xlarge: { light: "font-size :2rem", dark: "font-size :2rem" },
    xxlarge: { light: "font-size :3.5rem", dark: "font-size :3.5rem" },
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
    xsmall : {light : "width :100px", dark :"width :100px"},
    small: { light: "width :1rem", dark: "width :1rem" },
    medium: { light: "width :2rem", dark: "width :2rem" },
    large: { light: "width :6rem", dark: "width :6rem" },
    xlarge: { light: "width :8rem", dark: "width :8rem" },
    xylarge: { light: "width :10rem", dark: "width :10rem" },
    xxlarge: { light: "width :15rem", dark: "width :15rem" },
    
  });

  export const height = theme.variants("mode", "height", {
    xsmall: { light: "height :2px", dark: "height :2px" },
    small: { light: "height :1rem", dark: "height :1rem" },
    medium: { light: "height :2rem", dark: "height :2rem" },
    large: { light: "height :6rem", dark: "height :6rem" },
    xlarge: { light: "height :8rem", dark: "height :8rem" },
    xxlarge: { light: "height :15rem", dark: "height :15rem" },
    xylarge: { light: "height :10rem", dark: "height :10rem" },
    xxxlarge: { light: "height :25rem", dark: "height :25rem" },
    
  });

  export const padding = theme.variants("mode", "padding", {
    small: { light: "padding :1rem", dark: "padding :1rem" },
    medium: { light: "padding :2rem", dark: "padding :2rem" },
    large: { light: "padding :6rem", dark: "padding :6rem" },
    xlarge: { light: "padding :8rem", dark: "padding :8rem" },
    xxlarge: { light: "padding :15rem", dark: "padding :15rem" },
    xxxlarge: { light: "padding :25rem", dark: "padding :25rem" },
    nopadd: { light: "padding :0", dark: "padding :0" },
    
  });

  export const margin = theme.variants("mode", "margin", {
    small: { light: "margin :1rem", dark: "margin :1rem" },
    medium: { light: "margin :2rem", dark: "margin :2rem" },
    large: { light: "margin :6rem", dark: "margin :6rem" },
    xlarge: { light: "margin :8rem", dark: "margin :8rem" },
    xxlarge: { light: "margin :15rem", dark: "margin :15rem" },
    xxxlarge: { light: "margin :25rem", dark: "margin :25rem" },
    nomarg: { light: "margin:0", dark: "margin:0" },
    
  });  
 export const borderradius = theme.variants("mode", "borderradius", {
    primary: { light: "0.2rem", dark: "0.2rem" },
    secondary: { light: "0.5rem", dark: "0.5rem" },
    circle: { light: "50%", dark: "50%" },
  });

  export const StyledTypography = styled.p`
  ${color};
  ${fontsize};
  ${fontweight};
  ${fontfamily};
  ${padding};
  ${margin};
  ${height};
  ${width};
  ${backgroundColor};
  text-align:${props=> props.center ? "center" : ''};
  `
  
  StyledTypography.PropTypes ={
    variant:PropTypes.oneOf(["primary","secondary","primarylight","nomargin","nopadding"])
  }
  
  StyledTypography.defaultProps = {
    variant: "primary",
  };
  
  