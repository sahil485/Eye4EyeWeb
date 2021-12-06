import SimpleImageSlider from 'react-simple-image-slider'

const images= [
    {
      url:
        require('../../images/SliderIms/1.JPG').default    
    },
    {
      url:
      require('../../images/SliderIms/2.JPG').default },
    {
      url:
      require('../../images/SliderIms/3.JPG').default  },
    {
      url:
      require('../../images/SliderIms/4.JPG').default  },
    {
      url:
      require('../../images/SliderIms/5.JPG').default  }
  ];

export const Slider = () => {
    return (
      <div>
        <SimpleImageSlider
          width={700}
          height={600}
          images={images}
          showBullets={true}
          showNavs={true}
          autoPlay={true}
        />
      </div>
    );
}