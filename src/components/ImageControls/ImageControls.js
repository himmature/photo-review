import React from "react";
import { ControlsDivStyled, ControlButtonStyled } from "./ImageControls.styles";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";

export const ImageControls = (props) => {
  const { plusButtonClickHandler, approveImageHandler } = props;
  return (
    <ControlsDivStyled>
      <ControlButtonStyled onClick={plusButtonClickHandler}>
        <AiOutlineClose />
      </ControlButtonStyled>
      <ControlButtonStyled primary onClick={approveImageHandler}>
        <AiOutlineCheck />
      </ControlButtonStyled>
    </ControlsDivStyled>
  );
};
