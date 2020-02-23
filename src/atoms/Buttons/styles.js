
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.css';
import theme from "styled-theming";
import PropTypes from 'prop-types';
import {color,backgroundColor} from "../color/mixins"
import {fontsize, borderradius} from "../typography/mixins"



  const hover = theme.variants("mode", "variant", {
    secondary: { light: "#6f87ff", dark: "#6f87ff" },
  });

  const bordercolor = theme.variants("mode", "variant", {
    secondary: { light: "#6f87ff", dark: "#6f87ff" },
  });

export const StyledButton = styled.button`
${backgroundColor};
border-radius : ${borderradius};
${color};
${fontsize};
&:hover {background-color: ${hover}};
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

