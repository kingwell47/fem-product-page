import React from "react";

function AddToCart() {
  return (
    <div className='header__add_to_cart'>
      <div className='header__amount_wrapper'>
        <button className='header__amount_button'>-</button>
        <div className='header__amount'>0</div>
        <button className='header__amount_button'>+</button>
      </div>
      <button className='header__cart_button'>Add to cart</button>
    </div>
  );
}

export default AddToCart;
