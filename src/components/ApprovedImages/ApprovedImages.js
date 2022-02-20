import React from "react";
import { Section } from "../UI/Section/Section";
import { useSelector } from "react-redux";
import {
  ImageContainer,
  ImageStyled,
  ApprovedImageIconStyled,
  EmptyScroller,
} from "./ApprovedImages.styles";
import { HorizontalScroller } from "../UI/HorizontalScroller/HorizontalScroller";
import { AiOutlineCheck, AiOutlinePlusCircle } from "react-icons/ai";

const imagesList = [
  {
    id: new Date(),
    url: "https://picsum.photos/50",
    alt: "random image",
  },
  {
    id: new Date(),
    url: "https://picsum.photos/50",
    alt: "random image",
  },
  {
    id: new Date(),
    url: "https://picsum.photos/50",
    alt: "random image",
  },
  // {
  //   id: new Date(),
  //   url: "https://picsum.photos/50",
  //   alt: "random image",
  // },
  // {
  //   id: new Date(),
  //   url: "https://picsum.photos/50",
  //   alt: "random image",
  // },
  // {
  //   id: new Date(),
  //   url: "https://picsum.photos/50",
  //   alt: "random image",
  // },
  // {
  //   id: new Date(),
  //   url: "https://picsum.photos/50",
  //   alt: "random image",
  // },
  // {
  //   id: new Date(),
  //   url: "https://picsum.photos/50",
  //   alt: "random image",
  // },
  // {
  //   id: new Date(),
  //   url: "https://picsum.photos/50",
  //   alt: "random image",
  // },
  // {
  //   id: new Date(),
  //   url: "https://picsum.photos/50",
  //   alt: "random image",
  // },
  // {
  //   id: new Date(),
  //   url: "https://picsum.photos/50",
  //   alt: "random image",
  // },
  // {
  //   id: new Date(),
  //   url: "https://picsum.photos/50",
  //   alt: "random image",
  // },
  // {
  //   id: new Date(),
  //   url: "https://picsum.photos/50",
  //   alt: "random image",
  // },
  // {
  //   id: new Date(),
  //   url: "https://picsum.photos/50",
  //   alt: "random image",
  // },
];

export const ApprovedImages = (props) => {
  const approvedImages = useSelector((state) => state.approvedImages);
  return (
    <>
      <h4 className="heading">
        APPROVED IMAGES({approvedImages?.length || 0})
      </h4>
      <Section>
        {approvedImages?.length ? (
          <HorizontalScroller>
            {approvedImages?.map((item) => (
              <ImageContainer key={item.id}>
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
