import React from "react";

function MobileMenu(): JSX.Element {
  return (
    <div className='nav__mobile_menu'>
      <ul className='nav__mobile_links'>
        <li className='nav__mobile_link'>
          <a href='/'>Collections</a>
        </li>
        <li className='nav__mobile_link'>
          <a href='/'>Men</a>
        </li>
        <li className='nav__mobile_link'>
          <a href='/'>Women</a>
        </li>
        <li className='nav__mobile_link'>
          <a href='/'>About</a>
        </li>
        <li className='nav__mobile_link'>
          <a href='/'>Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default MobileMenu;
