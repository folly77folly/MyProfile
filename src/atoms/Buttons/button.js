import React, { useState } from "react";
import Loader from "react-loader-spinner";
import { StyledButton } from "./styles";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export function StyledButttonNew(props) {
  const [isLoading, setIsLoading] = useState(false);

  const getDownload = () => {
    setIsLoading(!isLoading);
  };
  const spinner = (
    <Loader type="ThreeDots" color="#271661" height={15} width={100} />
  );
  return (
    <StyledButton
      className="btn"
      color="primary"
      fontweight="secondary"
      backgroundColor="primary"
      onClick={() => getDownload()}
    >
      {isLoading ? spinner : props.text}
    </StyledButton>
  );
}

export function StyledButttonNew2() {
  return (
    <StyledButton
      className="btn badge-pill"
      color="secondary"
      fontweight="primary"
      backgroundColor="secondary"
      hover="secondary"
      hoverfontcolor="secondary"
      bordercolor="secondary"
    >
      illustration
    </StyledButton>
  );
}
