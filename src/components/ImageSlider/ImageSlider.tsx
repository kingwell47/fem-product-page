import React, { useState } from "react";
import "./ImageSlider.scss";

const IMAGES: string[] = [
  "image-product-1.jpg",
  "image-product-2.jpg",
  "image-product-3.jpg",
  "image-product-4.jpg",
];

const THUMBS: string[] = [
  "image-product-1-thumbnail.jpg",
  "image-product-2-thumbnail.jpg",
  "image-product-3-thumbnail.jpg",
  "image-product-4-thumbnail.jpg",
];

interface Props {
  openOverlay?: () => void;
}

function ImageSlider({ openOverlay }: Props): JSX.Element {
  const [current, setCurrent] = useState<number>(0);

  const onNext = (): void => {
    setCurrent(current === IMAGES.length - 1 ? 0 : current + 1);
  };

  const onPrevious = (): void => {
    setCurrent(current === 0 ? IMAGES.length - 1 : current - 1);
  };

  const handleClick = (newCurrent: number): void => {
    setCurrent(newCurrent);
  };

  return (
    <div className='slider'>
      <div className='slider__display' onClick={openOverlay}>
        {IMAGES.map(
          (image: string, index: number): JSX.Element => (
            <div
              className={
                index === current ? "slider__slide active" : "slider__slide"
              }
              key={index}>
              {index === current && (
                <img
                  src={require(`../../images/${image}`).default}
                  alt='product'
                  className='slider__image'
                />
              )}
            </div>
          )
        )}
        <button type='button' className='slider__left' onClick={onPrevious}>
          <img
            src={require("../../images/icon-previous.svg").default}
            alt='next'
          />
        </button>
        <button type='button' className='slider__right' onClick={onNext}>
          <img
            src={require("../../images/icon-next.svg").default}
            alt='previous'
          />
        </button>
      </div>
      <div className='slider__thumbs hide-for-mobile'>
        {THUMBS.map(
          (imageName: string, index: number): JSX.Element => (
            <button
              type='button'
              key={index}
              className={
                index === current ? "slider__thumb active" : "slider__thumb"
              }>
              <img
                src={require(`../../images/${imageName}`).default}
                alt='thumbnail'
                onClick={(): void => handleClick(index)}
              />
            </button>
          )
        )}
      </div>
    </div>
  );
}

export default ImageSlider;
