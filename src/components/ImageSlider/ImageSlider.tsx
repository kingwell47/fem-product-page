import { useState } from "react";
import "./ImageSlider.scss";

interface Props {
  currentImage: number;
  productImages: string[];
  productThumbs: string[];
  openOverlay?: () => void;
  changeImage: (index: number) => void;
}

function ImageSlider({
  currentImage,
  productImages,
  productThumbs,
  openOverlay,
  changeImage,
}: Props): JSX.Element {
  const [current, setCurrent] = useState<number>(currentImage);

  const onNext = (): void => {
    setCurrent(current === productImages.length - 1 ? 0 : current + 1);
    changeImage(current);
  };

  const onPrevious = (): void => {
    setCurrent(current === 0 ? productImages.length - 1 : current - 1);
    changeImage(current);
  };

  const handleClick = (newCurrent: number): void => {
    setCurrent(newCurrent);
    changeImage(newCurrent);
  };

  return (
    <div className='slider'>
      <div className='slider__display' onClick={openOverlay}>
        {productImages.map(
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
        <button
          title='previous'
          type='button'
          className='slider__left'
          onClick={onPrevious}>
          <svg width='12' height='18' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M11 1 3 9l8 8'
              stroke='#1D2026'
              strokeWidth='3'
              fill='none'
              fillRule='evenodd'
            />
          </svg>
        </button>
        <button
          title='next'
          type='button'
          className='slider__right'
          onClick={onNext}>
          <svg width='13' height='18' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='m2 1 8 8-8 8'
              stroke='#1D2026'
              strokeWidth='3'
              fill='none'
              fillRule='evenodd'
            />
          </svg>
        </button>
      </div>
      <div className='slider__thumbs hide-for-mobile'>
        {productThumbs.map(
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
