import styled from "styled-components";

export const ScrollerContainer = styled.div`
  position: relative;
  display: flex;
  height: 65px;
`;

export const ScrollerDivStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
  margin: 0 15px;
`;
export const LeftScrollStyled = styled.div`
  width: fit-content;
  position: absolute;
  left: 0;
  top: 20px;
  cursor: pointer;
`;
export const RightScrollStyled = styled.div`
  width: fit-content;
  position: absolute;
  right: 0;
  top: 20px;
  cursor: pointer;
`;
