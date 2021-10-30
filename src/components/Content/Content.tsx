import React from "react";
import "./Content.scss";

function Content() {
  return (
    <section className='content'>
      <h2 className='content__subtitle'>Sneaker Company</h2>
      <h1 className='content__title'>Fall Limited Edition Sneakers</h1>
      <p className='content__text'>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className='content__price_wrapper'>
        <div className='content__price_left'>
          <div className='content__price'>$125.00</div>
          <div className='content__discount'>50%</div>
        </div>
        <div className='content__original_price'>$250.00</div>
      </div>
      <div className='content__add_to_cart'>
        <div className='content__amount_wrapper'>
          <button type='button' className='content__amount_button'>
            <img
              src={require("../../images/icon-minus.svg").default}
              alt='reduce amount'
            />
          </button>
          <div className='content__amount'>0</div>
          <button type='button' className='content__amount_button'>
            <img
              src={require("../../images/icon-plus.svg").default}
              alt='add amount'
            />
          </button>
        </div>
        <button type='button' className='content__cart_button'>
          <img
            src={require("../../images/icon-cart-light.svg").default}
            alt=''
            className='content__cart_button_icon'
          />
          Add to cart
        </button>
      </div>
    </section>
  );
}

export default Content;
