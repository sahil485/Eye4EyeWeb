import React from 'react';
import { Link } from 'react-router-dom'
import { InfoSec, InfoColumn, InfoRow, TextWrapper, TopLine, Heading, Subtitle, ImgWrapper, Img } from './InfoSection.elements';
import { Container, Button } from '../../globalStyles';
import { Slider } from '../ImageSlider/Slider'

const InfoSection = ({ imgStart, lightTopLine, lightTextDesc, buttonLabel, description, headline, lightText, topLine, primary, start, to, images }) => {
    return (
        <>
            <InfoSec>
                <Container>
                    <InfoRow imgStart = {imgStart}>
                        <InfoColumn>
                            <TextWrapper>
                                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                                <Heading lightText = {lightText}> {headline} </Heading>
                                <Subtitle lightTextDesc = {lightTextDesc}>{description}</Subtitle>
                                <Link to={to}>
                                    {buttonLabel &&<Button big fontBig primary = {primary}>
                                        {buttonLabel}
                                    </Button>}
                                </Link>
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                            <ImgWrapper start = {start}>
                                <Slider images = {images}/>
                            </ImgWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>    
            </InfoSec>  
        </>
    )
}

export default InfoSection
