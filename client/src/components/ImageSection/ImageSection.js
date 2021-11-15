import React from 'react';
import { Container } from '../../globalStyles';
import { ImageSec, ImageColumn, ImageRow, ImgWrapper, Img } from './ImageSection.elements'
import ProductCard from './ProductCards/ProductCard'

export const ImageSection = ({imgStart, start, img1, img2, img3, alt}) => {
    return (
        <ImageSec>
            <Container>
                <ImageRow imgStart = {imgStart}>
                    <ImageColumn>
                        <ProductCard link = {require('../../images/Svg/Jenny.svg').default}/>
                    </ImageColumn>
                    <ImageColumn>
                        <ProductCard link = {require('../../images/Svg/Choi.svg').default}/>
                        {/*<ImgWrapper start = {start}>
                            <Img src= {img2} alt={alt}/>
                        </ImgWrapper>*/}
                    </ImageColumn>
                    <ImageColumn>
                        <ImgWrapper start = {start}>
                            <Img src= {img3} alt={alt}/>
                        </ImgWrapper>
                    </ImageColumn>
                </ImageRow>
            </Container>    
        </ImageSec>  
    )
}
