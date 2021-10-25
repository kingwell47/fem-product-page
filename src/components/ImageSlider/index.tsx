import React from "react";
import ImagesPreview from "./ImagesPreview";
import "./ImageSlider.scss";

function ImageSlider() {
  return (
    <div className='slider'>
      <div className='slider__display'>
        <img
          src={require("../../images/image-product-1.jpg").default}
          alt='product'
          className='slider__image'
        />
      </div>
      <button className='slider__left hide-for-desktop'>
        <svg width='13' height='18' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='m2 1 8 8-8 8'
            stroke='#1D2026'
            stroke-width='3'
            fill='none'
            fill-rule='evenodd'
          />
        </svg>
      </button>
      <button className='slider__right hide-for-desktop'>
        <svg width='13' height='18' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='m2 1 8 8-8 8'
            stroke='#1D2026'
            stroke-width='3'
            fill='none'
            fill-rule='evenodd'
          />
        </svg>
      </button>
      <ImagesPreview />
    </div>
  );
}

export default ImageSlider;
