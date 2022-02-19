import React from "react";
import styled from "styled-components";

const SectionStyled = styled.section`
  padding: 2%;
  border-bottom: 1px solid #cecece;
`;

export const Section = (props) => {
  const { children } = props;
  return <SectionStyled>{children}</SectionStyled>;
};
