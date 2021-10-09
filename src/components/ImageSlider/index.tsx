import React from "react";
import ImagesPreview from "./ImagesPreview";

function ImageSlider() {
  return (
    <div className='slider'>
      <img src='' alt='product' className='slider__display' />
      <ImagesPreview />
    </div>
  );
}

export default ImageSlider;
