import React from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import { AiOutlineBars } from 'react-icons/ai';

function Header() {
  return (
    <div className="Header nav row align-items-center">
      <div className="header-left nav col-lg-4 col-md-6 col-sm-6 align-items-center">
        <h1 className="col">Tiago Rahal</h1>
        <div className="header-right-mobile col-sm-4">
          <AiOutlineBars />
        </div>
      </div>
      <div className="header-right nav col-lg-7 col-md-6 col-sm justify-content-end">
        <div className="links-desktop">
          <a href="/">Portfolio</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a className="email-icon" href="/">
            <MdOutlineEmail />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
