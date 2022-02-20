import React from 'react';
import {SectionWithoutBorderStyled} from './SectionWithoutBorder.styles';

export const SectionWithoutBorder = props => {
    const { children } = props;
    return <SectionWithoutBorderStyled>{children}</SectionWithoutBorderStyled>
}