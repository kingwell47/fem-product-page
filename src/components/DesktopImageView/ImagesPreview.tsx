import React from "react";

const THUMBS: string[] = [
  "image-product-1-thumbnail.jpg",
  "image-product-2-thumbnail.jpg",
  "image-product-3-thumbnail.jpg",
  "image-product-4-thumbnail.jpg",
];

function ImagesPreview() {
  return (
    <div className='slider__previews hide-for-mobile'>
      {THUMBS.map(
        (imageName: string, index: number): JSX.Element => (
          <img
            key={index}
            src={require(`../../images/${imageName}`).default}
            alt='preview'
            className='slider__preview'
          />
        )
      )}
    </div>
  );
}

export default ImagesPreview;
