import React from "react";
import {ControlsDivStyled, ControlButtonStyled} from './ImageControls.styles';

export const ImageControls = props => {
    return (
        <ControlsDivStyled>
            <ControlButtonStyled>Reject</ControlButtonStyled>
            <ControlButtonStyled primary>Approve</ControlButtonStyled>
        </ControlsDivStyled>
    )
}