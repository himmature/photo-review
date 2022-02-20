import styled from "styled-components";

export const ControlsDivStyled = styled.div`
    display: flex;
    justify-content: center;
`
export const ControlButtonStyled = styled.button`
    border-radius: 12px;
    padding: 2%;
    width: 22%;
    margin: 0 5px;
    color: #fff;
    font-size: 1.5rem;
    font-weight: 600;
    background-color: ${props => props.primary ? "#2b69ce" : "#464040"}
`