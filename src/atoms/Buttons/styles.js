
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.css';
import theme from "styled-theming";
import propTypes from 'prop-types';
import {color,backgroundColor} from "../color/mixins"
import {fontsize, fontweight} from "../typography/mixins"



  const hover = theme.variants("mode", "hover", {
    secondary: { light: "#6f87ff", dark: "#ffff" },
  });

  const hoverfontcolor = theme.variants("mode", "hoverfontcolor", {
    secondary: { light: "white", dark: "#ffff" },
  });

  const bordercolor = theme.variants("mode", "bordercolor", {
    secondary: { light: "#6f87ff", dark: "#ffff" },
  });

export const StyledButton = styled.button`
${backgroundColor};
${color};
${fontsize};
${fontweight};
&:hover {background-color: ${hover};color:${hoverfontcolor};font-weight:bold};
border :2px solid ${bordercolor};
padding-right: 0.6em;
padding-left: 0.6em;
text-align: center;
`

StyledButton.propTypes ={
  variant:propTypes.oneOf(["primary","secondary"])
}

StyledButton.defaultProps = {
  variant: "primary",
};

