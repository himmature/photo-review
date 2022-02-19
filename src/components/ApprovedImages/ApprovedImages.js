import React from "react";
import { Section } from "../UI/Section/Section";

export const ApprovedImages = (props) => {
  const { approvedImagesCount = 0 } = props;
  return (
    <>
      <h4>APPROVED IMAGES({approvedImagesCount})</h4>
      <Section>List of images</Section>
    </>
  );
};
