import React, { useEffect } from "react";
import {
  ImageDivStyled,
  ImageStyled,
  PlusButtonStyled,
  ParaTextStyled,
} from "./CurrentImage.styles";
import { Section } from "../UI/Section/Section";
import { SectionWithoutBorder } from "../UI/SectionWithoutBorder/SectionWithoutBorder";
import { ImageControls } from "../ImageControls/ImageControls";
import { useDispatch, useSelector } from "react-redux";
import { ACTIONS } from "../../store/Actions";
import { AiOutlinePlusCircle } from "react-icons/ai";

const CLIENT_ID = "qhS7QODXruNu2zwrFaQKWA4b2EmfitQDpGxfTxz-bYA";
const URL = `https://api.unsplash.com/photos/random?client_id=${CLIENT_ID}`;
// const URL = `https://jsonplaceholder.typicode.com/todos/1`;

export const CurrentImage = (props) => {
  const dispatch = useDispatch();
  const currentImage = useSelector((state) => state.currentImage);
  const approvedImages = useSelector((state) => state.approvedImages);

  const plusButtonClickHandler = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    const isDuplicate = approvedImages.find((item) => item.id === data.id);
    if (isDuplicate) {
      plusButtonClickHandler();
    } else {
      const image = {
        id: data.id,
        url: data.urls.regular,
        alt: data.description,
      };
      dispatch({
        type: ACTIONS.CURRENT,
        payload: image,
      });
    }
  };

  const approveImageHandler = () => {
    const isDuplicate = approvedImages.find(
      (item) => item.id === currentImage.id
    );
    !isDuplicate &&
      dispatch({
        type: ACTIONS.APPROVE,
        payload: currentImage,
      });
    plusButtonClickHandler();
  };
  return (
    <>
      <Section>
        <ImageDivStyled>
          {currentImage?.url ? (
            <ImageStyled
              data-testid="current-image"
              src={currentImage.url}
              alt={currentImage.alt}
            />
          ) : (
            <PlusButtonStyled
              data-testid="plus"
              onClick={plusButtonClickHandler}
            >
              <AiOutlinePlusCircle />
            </PlusButtonStyled>
          )}
        </ImageDivStyled>
      </Section>
      <SectionWithoutBorder>
        {currentImage?.url ? (
          <ImageControls
            plusButtonClickHandler={plusButtonClickHandler}
            approveImageHandler={approveImageHandler}
          />
        ) : (
          <ParaTextStyled>
            Click on the{" "}
            <span>
              <AiOutlinePlusCircle style={{ margin: "-2px" }} />
            </span>{" "}
            in order to get image recommendations
          </ParaTextStyled>
        )}
      </SectionWithoutBorder>
    </>
  );
};
