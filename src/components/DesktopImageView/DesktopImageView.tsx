import React, { useState } from "react";
import "./DesktopImageView.scss";

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

function DesktopImageView() {
  const [current, setCurrent] = useState<number>(0);
  return (
    <section className='view hide-for-mobile'>
      <div className='view__display'>
        {IMAGES.map(
          (imageName: string, index: number): JSX.Element => (
            <div
              key={index}
              className={
                index === current ? "view__slide active" : "view__slide"
              }>
              {index === current && (
                <img
                  src={require(`../../images/${imageName}`).default}
                  alt='product'
                  className='view__image'
                />
              )}
            </div>
          )
        )}
      </div>
      <div className='view__previews'>
        {THUMBS.map(
          (imageName: string, index: number): JSX.Element => (
            <img
              key={index}
              src={require(`../../images/${imageName}`).default}
              alt='preview'
              className='view__preview'
            />
          )
        )}
      </div>
    </section>
  );
}

export default DesktopImageView;
