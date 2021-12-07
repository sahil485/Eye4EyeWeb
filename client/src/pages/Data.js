export const infoObjOne = {
    imgStart: false,
    lightTopLine: true, 
    lightText : true, 
    lightTextDesc: true, 
    //buttonLabel: 'View Clothing', 
    description : 'We sell authentic, handmade hoodies and t-shirts', 
    headline: 'EYE 4 EYE', 
    topLine: 'Clothing Brand', 
    primary: true,
    alt: 'Image',
    start: '',
    to: '/',
    images: [
        {url: require('../images/SliderIms/Eye4Eye.PNG').default},
        {url: require('../images/SliderIms/1.JPG').default},
        {url: require('../images/SliderIms/7.JPG').default},
        {url: require('../images/SliderIms/6.JPG').default}
      ]
};

export const infoObjTwo = {
    imgStart: false,
    lightTopLine: true, 
    lightText : true, 
    lightTextDesc: true, 
    buttonLabel: 'Purchase hoodies', 
    description : 'Comes in sizes x, y, z', 
    headline: 'Hoodies', 
    topLine: '', 
    primary: true,
    alt: 'Image',
    start: '',
    to: '/hoodies',
    images: [        
        {url: require('../images/SliderIms/2.JPG').default},
        {url: require('../images/SliderIms/3.JPG').default},
        {url: require('../images/SliderIms/5.JPG').default},
        {url: require('../images/SliderIms/4.JPG').default}
      ]
};

export const infoObjThree = {
    imgStart: false,
    lightTopLine: true, 
    lightText : true, 
    lightTextDesc: true, 
    buttonLabel: 'Purchase tshirts', 
    description : '', 
    headline: 'T-Shirts', 
    topLine: '', 
    primary: false,
    alt: 'Image',
    start: true,
    to: '/tshirts'
};

export const imObjOne = {
    lightBg: true, 
    imgStart: 'start', 
    start: true, 
    img1: require('../images/Png/Sweatshirts/1OF3Front.png').default,
    img2: require('../images/Png/Sweatshirts/2OF3Front.png').default,
    img3: require('../images/Png/Sweatshirts/3OF3Front.png').default, 
    alt: 'Image'
}

export const imObjTwo = {
    lightBg: true, 
    imgStart: 'start', 
    start: true, 
    img1: require('../images/Png/Sweatshirts/1OF3Front.png').default,
    img2: require('../images/Png/Sweatshirts/2OF3Front.png').default,
    img3: require('../images/Png/Sweatshirts/3OF3Front.png').default, 
    alt: 'Image'
}

export const imObjThree = {
    lightBg: true, 
    imgStart: 'start', 
    start: true, 
    img1: require('../images/Png/tshirt.jpg').default,
    img2: require('../images/Png/tshirt.jpg').default,
    img3: require('../images/Png/tshirt.jpg').default, 
    alt: 'Image'
}