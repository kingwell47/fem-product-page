import React from "react";
import cartImage from "../../images/image-product-1-thumbnail.jpg";

function Cart(): JSX.Element {
  return (
    <div className='cart'>
      <div className='cart__header'>Cart</div>
      <hr />
      <div className='cart__item'>
        <img src={cartImage} alt='product' className='cart__image' />
        <div className='cart__text'>
          <div className='cart__item_name'>Fall Limited Edition Sneakers</div>
          <div className='cart__item_price'>
            <div className='cart__item_price_singular'>$125.00</div>
            <div className='cart__item_price_multiplier'> x 3 </div>
            <div className='cart__item_price_total'>$375.00</div>
          </div>
        </div>
        <button className='cart__item_delete'>Trash</button>
      </div>
      <button className='cart__checkout'>Checkout</button>
    </div>
  );
}

export default Cart;
