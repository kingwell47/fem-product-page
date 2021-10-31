import React from "react";
import "./LightBox.scss";

type Props = {
  closeOverlay: () => void;
  children: JSX.Element;
};

function LightBox({ closeOverlay, children }: Props): JSX.Element {
  return (
    <div className='lightbox'>
      <div className='lightbox__top'>
        <button
          className='lightbox__close'
          type='button'
          title='close'
          onClick={closeOverlay}>
          <svg
            width='100%'
            viewBox='0 0 15 15'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z'
              fill='#69707D'
              fillRule='evenodd'
            />
          </svg>
        </button>
      </div>
      {children}
    </div>
  );
}

export default LightBox;
