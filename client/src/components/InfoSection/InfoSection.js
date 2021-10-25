import React from 'react';
import { Link } from 'react-router-dom'
import { InfoSec, InfoColumn, InfoRow, TextWrapper, TopLine, Heading, Subtitle, ImgWrapper, Img } from './InfoSection.elements';
import { Container, Button } from '../../globalStyles';

const InfoSection = ({ lightBg, imgStart, lightTopLine, lightTextDesc, buttonLabel, description, headline, lightText, topLine, primary, start, img, alt, to }) => {
    return (
        <>
            <InfoSec lightBg = {lightBg}>
                <Container>
                    <InfoRow imgStart = {imgStart}>
                        <InfoColumn>
                            <TextWrapper>
                                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                                <Heading lightText = {lightText}> {headline} </Heading>
                                <Subtitle lightTextDesc = {lightTextDesc}>{description}</Subtitle>
                                <Link to={to}>
                                    <Button big fontBig primary = {primary}>
                                        {buttonLabel}
                                    </Button>
                                </Link>
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                            <ImgWrapper start = {start}>
                                <Img src= {img} alt={alt}/>
                            </ImgWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>    
            </InfoSec>  
        </>
    )
}

export default InfoSection
