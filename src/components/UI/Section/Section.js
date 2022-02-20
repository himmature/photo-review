import React from "react";
import {SectionStyled} from './Section.styles.js';

export const Section = (props) => {
  const { children } = props;
  return <SectionStyled>{children}</SectionStyled>;
};
