import SimpleImageSlider from 'react-simple-image-slider'

export const Slider = ({images}) => {
    return (
      <div>
        <SimpleImageSlider
          width={500}
          height={400}
          images={images}
          showBullets={true}
          showNavs={true}
          autoPlay={true}
        />
      </div>
    );
}