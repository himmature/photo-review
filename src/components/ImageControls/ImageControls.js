import React from "react";
import { ControlsDivStyled, ControlButtonStyled } from "./ImageControls.styles";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";

export const ImageControls = (props) => {
  const { plusButtonClickHandler, approveImageHandler } = props;
  return (
    <ControlsDivStyled>
      <ControlButtonStyled data-testid='reject' onClick={plusButtonClickHandler}>
        <AiOutlineClose />
      </ControlButtonStyled>
      <ControlButtonStyled data-testid='approve' primary onClick={approveImageHandler}>
        <AiOutlineCheck />
      </ControlButtonStyled>
    </ControlsDivStyled>
  );
};
