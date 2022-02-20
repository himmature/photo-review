import React, { useRef } from "react";
import {
  ScrollerDivStyled,
  LeftScrollStyled,
  RightScrollStyled,
  ScrollerContainer,
  ScrollerItemStyled,
} from "./HorizontalScroller.styles";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

export const HorizontalScroller = (props) => {
  const { children } = props;
  const ref = useRef();
  const rightScrollerHandler = () => {
    ref.current.scrollBy(30, 0);
  };
  const leftScrollerHandler = () => {
    ref.current.scrollBy(-30, 0);
  };
  return (
    <ScrollerContainer>
      <LeftScrollStyled onClick={leftScrollerHandler}>
        <AiOutlineLeft />
      </LeftScrollStyled>
      <ScrollerDivStyled ref={ref}>{children}</ScrollerDivStyled>
      <RightScrollStyled onClick={rightScrollerHandler}>
        <AiOutlineRight />
      </RightScrollStyled>
    </ScrollerContainer>
  );
};
