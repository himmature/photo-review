import React from "react";
import { Section } from "../UI/Section/Section";
import { useSelector, useDispatch } from "react-redux";
import {
  ImageContainer,
  ImageStyled,
  ApprovedImageIconStyled,
  EmptyScroller,
} from "./ApprovedImages.styles";
import { HorizontalScroller } from "../UI/HorizontalScroller/HorizontalScroller";
import { AiOutlineCheck, AiOutlinePlusCircle } from "react-icons/ai";
import { ACTIONS } from '../../store/Actions';

export const ApprovedImages = (props) => {
  const approvedImages = useSelector((state) => state.approvedImages);
  const dispatch = useDispatch();

  const selectApprovedImageHandler = (id) => {
    const image = approvedImages.find(item => item.id === id);
    dispatch({
      type: ACTIONS.CURRENT,
      payload: image
    });
  }
  return (
    <>
      <h4 className="heading">
        APPROVED IMAGES({approvedImages?.length || 0})
      </h4>
      <Section>
        {approvedImages?.length ? (
          <HorizontalScroller>
            {approvedImages?.map((item) => (
              <ImageContainer key={item.id} onClick={() => selectApprovedImageHandler(item.id)}>
                <ImageStyled key={item.id} src={item.url} alt={item.alt} />
                <ApprovedImageIconStyled>
                  <AiOutlineCheck />
                </ApprovedImageIconStyled>
              </ImageContainer>
            ))}
          </HorizontalScroller>
        ) : (
          <EmptyScroller>
            <AiOutlinePlusCircle />
          </EmptyScroller>
        )}
      </Section>
    </>
  );
};
