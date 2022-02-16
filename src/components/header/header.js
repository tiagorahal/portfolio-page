import React from 'react';
import { MdOutlineEmail } from 'react-icons/md';

function Header() {
  return (
    <div className="Header nav row align-items-center">
      <div className="header-left nav col-lg-4 justify-content-center">
        <h1>Tiago Rahal</h1>
      </div>
      <div className="header-right nav col-lg-7 justify-content-end">
        <a href="/">Portfolio</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">
          <MdOutlineEmail />
        </a>
      </div>
    </div>
  );
}

export default Header;
