import React from "react";
import {CardStyled} from './Card.styles.js';

export const Card = (props) => {
  const { children } = props;
  return <CardStyled>{children}</CardStyled>;
};
