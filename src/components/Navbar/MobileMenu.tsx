import { useRef } from "react";
import useOnClickOutside from "../../hooks/useOnClickOutside";

interface MenuProps {
  outsideClose: (e: MouseEvent | TouchEvent) => void;
  open: boolean;
}

function MobileMenu({ outsideClose, open }: MenuProps): JSX.Element {
  const mobileToggleRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(mobileToggleRef, outsideClose);

  return (
    <div
      ref={mobileToggleRef}
      className={open ? "nav__mobile_menu open" : "nav__mobile_menu"}>
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
