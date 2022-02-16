import React from 'react';
import MailHeader from '../../assets/icons/header-mail.svg';

function Header() {
  return (
    <div className="Header nav row align-items-center">
      <div className="header-left nav col-lg-4 justify-content-center">
        <h1>Tiago Rahal</h1>
      </div>
      <div className="header-right nav col justify-content-end">
        <a href="/">Portfolio</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">{MailHeader}</a>
      </div>
    </div>
  );
}

export default Header;
