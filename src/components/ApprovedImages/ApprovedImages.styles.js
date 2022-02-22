import styled from "styled-components";

export const ImageContainer = styled.div`
  position: relative;
  margin: 0 2%;
  border: 1px solid black;
  min-width: 80px;
  height: 100%;
  box-shadow: 0 0 8px #cecece;
  border-radius: 8px;
`;

export const ImageStyled = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
`;

export const ApprovedImageIconStyled = styled.div`
  position: absolute;
  width: fit-content;
  top: 0;
  right: 0;
  color: #fff;
  font-size: 1.8rem;
`;

export const EmptyScroller = styled.div`
  width: 80px;
  height: 50px;
  background-color: #d8d3d3;
  box-shadow: 0 0 8px #cecece;
  border-radius 5px;
  color: #8e7e7e;
  font-size: 1.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
