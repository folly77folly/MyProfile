
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.css';
import theme from "styled-theming";
import PropTypes from 'prop-types';

const backgroundColor = theme.variants("mode", "variant", {
    primary: { light: "white", dark: "darkgray" },
    secondary: { light: "#271661", dark: "#271661" },
  });

  const borderradius = theme.variants("mode", "variant", {
    primary: { light: "0.2rem", dark: "0.2rem" },
    secondary: { light: "0.5rem", dark: "0.5rem" },
  });

  const fontcolor = theme.variants("mode", "variant", {
    primary: { light: "black", dark: "white" },
    secondary: { light: "white", dark: "black" },
  });

  const hover = theme.variants("mode", "variant", {
    secondary: { light: "#6f87ff", dark: "#6f87ff" },
  });

  const fontsize = theme.variants("mode", "variant", {
    primary: { light: "0.8rem", dark: "0.8rem" },
    secondary: { light: "0.7rem", dark: "0.7rem" },
  });

  const bordercolor = theme.variants("mode", "variant", {
    secondary: { light: "#6f87ff", dark: "#6f87ff" },
  });

export const StyledButton = styled.button`
background-color : ${backgroundColor};
border-radius : ${borderradius};
color : ${fontcolor};
&:hover {background-color: ${hover}};
font-size : ${fontsize};
border :1px solid ${bordercolor};
font-weight :bold;
padding-right: 0.6em;
padding-left: 0.6em;
text-align: center;
`

StyledButton.PropTypes ={
  variant:PropTypes.oneOf(["primary","secondary"])
}

StyledButton.defaultProps = {
  variant: "primary",
};

