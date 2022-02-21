import styled from "styled-components";

export const ImageDivStyled = styled.div`
  margin: 0 auto;
  height: 525px;
  box-shadow: 0 0 8px #cecece;
  border-radius: 8px;
  @media screen and (max-height: 695px) {
    height: 50vh;
  }
`;
export const ImageStyled = styled.img`
  border-radius: 8px;
  width: 100%;
  height: 100%;
`;
export const PlusButtonStyled = styled.button`
  border-radius: 8px;
  width: 100%;
  font-size: 6rem;
  color: #cecece;
  height: 100%;
`;
export const ParaTextStyled = styled.p`
  text-align: center;
`;
