import SimpleImageSlider from 'react-simple-image-slider'

export const Slider = ({images}) => {
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