import React from 'react'
import Slider from 'react-animated-slider'
import 'react-animated-slider/build/horizontal.css';
import tshirt from '../ImageSlider/Png/tshirt.jpg'
import f1 from '../ImageSlider/Png/Founder1.jpg'
import f2 from '../ImageSlider/Png/Founder2.PNG'
import p from '../ImageSlider/Png/placeholder.jpg'
import f13 from '../ImageSlider/Png/Sweatshirts/1OF3Front.png'
import b13 from '../ImageSlider/Png/Sweatshirts/1OF3Back.png'
import f23 from '../ImageSlider/Png/Sweatshirts/2OF3Front.png'
import b23 from '../ImageSlider/Png/Sweatshirts/2OF3Back.png'

const ImageSlider = () =>
{

    const slides = [tshirt, f1, f2, p, f13, b13, f23, b23]
    return(
            <Slider>
            {slides.map((slide, index) => <div key={index}>
                <img src = {slide}/>
                </div>)}
            </Slider>
    );
}

export default ImageSlider;