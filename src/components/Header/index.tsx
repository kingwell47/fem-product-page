import React from "react";
import AddToCart from "./AddToCart";

function Header() {
  return (
    <section className='header'>
      <h2 className='header__subtitle'>Sneaker Company</h2>
      <h1 className='header__title'>Fall Limited Edition Sneakers</h1>
      <p className='header__text'>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className='header__price'>$125.00</div>
      <div className='header__discount'>50%</div>
      <div className='header__original_price'>$250.00</div>
      <AddToCart />
    </section>
  );
}

export default Header;
