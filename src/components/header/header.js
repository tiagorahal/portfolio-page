import React from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import { AiOutlineBars } from 'react-icons/ai';

function Header() {
  return (
    <div className="Header nav row align-items-center">
      <div className="header-left nav col-lg-4 col-md-6 col-sm-6 align-items-center">
        <h1 className="col">Tiago Rahal</h1>
        <div className="header-right-mobile col-sm-4">
          <button className="header-right-mobile-button" type="button">
            <AiOutlineBars />
          </button>
        </div>
      </div>
      <div className="header-right nav col-lg-7 col-md-6 col-sm justify-content-end">
        <div className="links-desktop">
          <a href="#project-container">Portfolio</a>
          <a href="#info-container">About</a>
          <a href="#Contact">Contact</a>
          <a className="email-icon" href="mailto:rahal.aires@gmail.com">
            <MdOutlineEmail />
          </a>
        </div>
      </div>
      <div className="hidden-mobile-div">
        <h1>TESTING THIS THING HERE, BE PLEASE WAIT</h1>
      </div>
    </div>
  );
}

export default Header;
