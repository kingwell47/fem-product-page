import React, { useState } from "react";
import ImagesPreview from "./ImagesPreview";
import "./ImageSlider.scss";

const IMAGES: string[] = [
  "../../images/image-product-1.jpg",
  "../../images/image-product-2.jpg",
  "../../images/image-product-3.jpg",
  "../../images/image-product-4.jpg",
];

function ImageSlider(): JSX.Element {
  const [current, setCurrent] = useState<number>(0);

  const onNext = (): void => {
    setCurrent(current === IMAGES.length - 1 ? 0 : current + 1);
  };

  const onPrevious = (): void => {
    setCurrent(current === 0 ? IMAGES.length - 1 : current - 1);
  };

  return (
    <div className='slider'>
      <div className='slider__display'>
        {IMAGES.map(
          (image: string, index: number): JSX.Element => (
            <div
              className={
                index === current ? "slider__slide active" : "slider__slide"
              }
              key={index}>
              {index === current && (
                <img
                  src={
                    require(`../../images/image-product-${index + 1}.jpg`)
                      .default
                  }
                  alt='product'
                  className='slider__image'
                />
              )}
            </div>
          )
        )}
      </div>
      <button className='slider__left hide-for-desktop' onClick={onPrevious}>
        <img
          src={require("../../images/icon-previous.svg").default}
          alt='next'
        />
      </button>
      <button className='slider__right hide-for-desktop' onClick={onNext}>
        <img
          src={require("../../images/icon-next.svg").default}
          alt='previous'
        />
      </button>
      <ImagesPreview />
    </div>
  );
}

export default ImageSlider;
