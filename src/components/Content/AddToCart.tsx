import React from "react";

function AddToCart() {
  return (
    <div className='content__add_to_cart'>
      <div className='content__amount_wrapper'>
        <button className='content__amount_button'>
          <img
            src={require("../../images/icon-minus.svg").default}
            alt='reduce amount'
          />
        </button>
        <div className='content__amount'>0</div>
        <button className='content__amount_button'>
          <img
            src={require("../../images/icon-plus.svg").default}
            alt='add amount'
          />
        </button>
      </div>
      <button className='content__cart_button'>
        <img
          src={require("../../images/icon-cart-light.svg").default}
          alt=''
          className='content__cart_button_icon'
        />
        Add to cart
      </button>
    </div>
  );
}

export default AddToCart;
