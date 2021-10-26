import React from "react";

function AddToCart() {
  return (
    <div className='content__add_to_cart'>
      <div className='content__amount_wrapper'>
        <button className='content__amount_button'>-</button>
        <div className='content__amount'>0</div>
        <button className='content__amount_button'>+</button>
      </div>
      <button className='content__cart_button'>Add to cart</button>
    </div>
  );
}

export default AddToCart;
