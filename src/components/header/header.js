import React from 'react';
import { MdOutlineEmail } from 'react-icons/md';

function Header() {
  return (
    <div className="Header nav row align-items-center">
      <div className="header-left nav col-lg-4 col-md-6 col-sm-8">
        <h1>Tiago Rahal</h1>
      </div>
      <div className="header-right nav col-lg-7 col-md-6 justify-content-end">
        <div className="links-mobile">
          <a href="/">Portfolio</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">
            <MdOutlineEmail />
          </a>
        </div>
      </div>
      <a className="header-right-mobile" href="/">
        <MdOutlineEmail />
      </a>
    </div>
  );
}

export default Header;
