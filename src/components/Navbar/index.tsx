import React from "react";
import Cart from "./Cart";
import MobileMenu from "./MobileMenu";
import "./Navbar.scss";

function NavBar() {
  return (
    <nav className='nav'>
      <MobileMenu />
      <button
        className='nav__toggle'
        title='mobile menu'
        aria-label='open-menu'
        aria-expanded='false'>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <img src='' alt='sneakers' className='nav__logo' />
      <ul className='nav__links'>
        <li className='nav__link'>
          <a href='/'>Collections</a>
        </li>
        <li className='nav__link'>
          <a href='/'>Men</a>
        </li>
        <li className='nav__link'>
          <a href='/'>Women</a>
        </li>
        <li className='nav__link'>
          <a href='/'>About</a>
        </li>
        <li className='nav__link'>
          <a href='/'>Contact</a>
        </li>
      </ul>
      <div className='nav__right'>
        <button className='nav__cart'>Cart</button>
        <div className='nav__cart_count'>3</div>
        <a href='/'>
          <img src='' alt='profile' className='nav__profile_pic' />
        </a>
      </div>
      <Cart />
    </nav>
  );
}

export default NavBar;
