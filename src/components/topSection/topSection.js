import React from 'react';
import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaRedditAlien,
  FaAngellist,
} from 'react-icons/fa';

function TopSection() {
  return (
    <div className="TopSection col-12">
      <div className="links-column d-flex flex-sm-row flex-md-column nav col-sm-12 col-md-1 align-items-center justify-content-center">
        <a href="/" className="links-column-links">
          <FaGithub />
        </a>
        <a href="/" className="links-column-links">
          <FaLinkedinIn />
        </a>
        <a href="/" className="links-column-links">
          <FaTwitter />
        </a>
        <a href="/" className="links-column-links">
          <FaRedditAlien />
        </a>
        <a href="/" className="links-column-links">
          <FaAngellist />
        </a>
      </div>
    </div>
  );
}

export default TopSection;
