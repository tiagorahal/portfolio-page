import React from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import { AiOutlineBars } from 'react-icons/ai';

function Header() {
  return (
    <div className="Header nav row align-items-center">
      <div className="header-left nav col-lg-4 col-md-6 col-sm">
        <h1>Tiago Rahal</h1>
      </div>
      <div className="header-right nav col-lg-7 col-md-6 col-sm justify-content-end">
        <div className="links-mobile">
          <a href="/">Portfolio</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">
            <MdOutlineEmail />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
