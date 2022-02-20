import React from "react";
import { Section } from "../UI/Section/Section";
import { useSelector } from 'react-redux';

export const ApprovedImages = (props) => {
  const { approvedImages } = useSelector(state => state.approvedImages);
  return (
    <>
      <h4 className="heading">APPROVED IMAGES({0})</h4>
      <Section>List of images</Section>
    </>
  );
};
