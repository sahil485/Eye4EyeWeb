import React from 'react'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

const ImageSlider = () =>
{

    const slides = [
        { title: 'First item', description: 'Lorem ipsum', image: "../tshirt.jpg"},
        { title: 'Second item', description: 'Lorem ipsum', image: "../tshirt.jpg"}
      ]; 

    return( 
        <Slider>
        {slides.map((slide, index) => <div key={index}>
            <h2>{slide.title}</h2>
            <div>{slide.description}</div>
            <img src = {require(slide.image).default}/>
            </div>)}
        </Slider>
    );
}

export default ImageSlider;