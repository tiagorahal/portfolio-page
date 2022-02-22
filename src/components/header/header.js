/* eslint-disable no-constant-condition */
/* eslint-disable no-cond-assign */
import React from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import { AiOutlineBars } from 'react-icons/ai';

function Header() {
  function clickHandler() {
    if (document.getElementById('hidden-mobile-div').style.display = 'none') {
      document.getElementById('hidden-mobile-div').style.display = 'block';
    }
  }
  return (
    <div className="Header nav row align-items-center">
      <div className="header-left nav col-lg-4 col-md-6 col-sm-6 align-items-center">
        <h1 className="col">Tiago Rahal</h1>
        <div className="header-right-mobile col-sm-4">
          <button className="header-right-mobile-button" type="button" onClick={clickHandler}>
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
      <div id="hidden-mobile-div">
        <a className="hidden-link" href="#project-container">Portfolio</a>
        <br />
        <a className="hidden-link" href="#info-container">About</a>
        <br />
        <a className="hidden-link" href="#Contact">Contact</a>
      </div>
    </div>
  );
}

export default Header;
