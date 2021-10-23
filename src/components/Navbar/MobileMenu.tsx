import React from "react";

interface MenuProps {
  open: boolean;
}

function MobileMenu({ open }: MenuProps): JSX.Element {
  return (
    <div className={open ? "nav__mobile_menu open" : "nav__mobile_menu"}>
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
