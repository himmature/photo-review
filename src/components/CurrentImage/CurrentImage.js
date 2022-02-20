import React, { useEffect, useState } from "react";
import {ImageDivStyled, ImageStyled, PlusButtonStyled, ParaTextStyled} from './CurrentImage.styles';
import { Section } from "../UI/Section/Section";
import { SectionWithoutBorder } from "../UI/SectionWithoutBorder/SectionWithoutBorder";
import { ImageControls } from "../ImageControls/ImageControls";

const URL = 'https://picsum.photos/id/0/info';

const paraText = 'Click on the + in order to get image recommendations';

export const CurrentImage = props => {
    const [imageViewed, setImageViewed] = useState(false);
    useEffect(() => {
        async function getImage() {
            const response = await fetch(URL);
            const data = await response.json();
            console.log(data);
        }
        getImage();
    }, [])

    const plusButtonClickHandler = () => {
        setImageViewed(!imageViewed);
    }
    return (
        <>
            <Section>
                <ImageDivStyled>
                    {
                        imageViewed ? (<ImageStyled src='https://picsum.photos/200/300' alt={'image.author'}/>)
                        : (<PlusButtonStyled onClick={plusButtonClickHandler}>+</PlusButtonStyled>)
                    }  
                </ImageDivStyled>
            </Section>
            <SectionWithoutBorder>
                {
                    imageViewed ? <ImageControls /> : <ParaTextStyled>{paraText}</ParaTextStyled>
                }
            </SectionWithoutBorder>
        </>
    )
}