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
                        <ProductCard link = {img1} price={"$35.00"} name={"Midnight Blue and Purple"}/>
                    </ImageColumn>
                    <ImageColumn>
                        <ProductCard link = {img2} price={"$35.00"} name={"White and Red"}/>
                        {/*<ImgWrapper start = {start}>
                            <Img src= {img2} alt={alt}/>
                        </ImgWrapper>*/}
                    </ImageColumn>
                    <ImageColumn>
                        <ProductCard link = {img3} price={"$35.00"} name={"Forest Green"}/>
                        {/*<ImgWrapper start = {start}>
                            <Img src= {img3} alt={alt}/>
                    </ImgWrapper>*/}
                    </ImageColumn>
                </ImageRow>
            </Container>    
        </ImageSec>  
    )
}
