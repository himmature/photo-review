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

const paraText = "Click on the + in order to get image recommendations";

export const CurrentImage = (props) => {
  const disptach = useDispatch();
  const currentImage = useSelector((state) => state.currentImage);
  const approvedImages = useSelector((state) => state.approvedImages);

  const plusButtonClickHandler = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
    const isDuplicate = approvedImages.find((item) => item.id === data.id);
    if (isDuplicate) {
      plusButtonClickHandler();
    } else {
      const image = {
        id: data.id,
        url: data.urls.regular,
        alt: data.description,
      };
      disptach({
        type: ACTIONS.CURRENT,
        payload: image,
      });
    }
  };

  const approveImageHandler = () => {
    disptach({
      type: ACTIONS.APPROVE,
      payload: currentImage,
    });
    plusButtonClickHandler();
  };
  return (
    <>
      <Section>
        <ImageDivStyled>
          {currentImage.url ? (
            <ImageStyled src={currentImage.url} alt={currentImage.alt} />
          ) : (
            <PlusButtonStyled onClick={plusButtonClickHandler}>
              <AiOutlinePlusCircle />
            </PlusButtonStyled>
          )}
        </ImageDivStyled>
      </Section>
      <SectionWithoutBorder>
        {currentImage.url ? (
          <ImageControls
            plusButtonClickHandler={plusButtonClickHandler}
            approveImageHandler={approveImageHandler}
          />
        ) : (
          <ParaTextStyled>{paraText}</ParaTextStyled>
        )}
      </SectionWithoutBorder>
    </>
  );
};
