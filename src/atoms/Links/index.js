import { fontsize } from "../typography/mixins";
import { fontweight } from "../typography/mixins";
import { fontfamily } from "../typography/mixins";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledLink = styled.span`
  ${fontsize};
  ${fontweight};
  ${fontfamily};
  color:white !important;
  padding-right: 0.6em;
  padding-left: 0.6em;
  text-decoration: none;
`;

StyledLink.propTypes = {
  variant: PropTypes.oneOf([
    "primary",
    "secondary",
    "primarylight",
    "secondarylight"
  ])
};


export default StyledLink;
