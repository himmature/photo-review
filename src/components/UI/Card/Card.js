import React from "react";
import styled from "styled-components";

const CardStyled = styled.div`
  border: 1px solid #cdcdcd;
  box-shadow: 0 0 8px 0 #cecece;
  margin: 4px auto;
  width: 60%;
  border-radius: 8px;
`;

export const Card = (props) => {
  const { children } = props;
  return <CardStyled>{children}</CardStyled>;
};