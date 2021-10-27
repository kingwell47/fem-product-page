import React from "react";
import AddToCart from "./AddToCart";
import "./Content.scss";

function Header() {
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
      <AddToCart />
    </section>
  );
}

export default Header;
