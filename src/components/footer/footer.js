/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaRedditAlien,
  FaAngellist,
} from 'react-icons/fa';

function Footer() {
  return (
    <div className="Footer col">
      <hr />
      <div className="links-column-footer col-sm-10 col-md-4 col-lg-5 col-xl-3  m-auto">
        <a href="https://github.com/tiagorahal" target="_blank" className="links-column-links-footer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/tiagorahal/" target="_blank" className="links-column-links-footer">
          <FaLinkedinIn />
        </a>
        <a href="https://twitter.com/RahalAires" target="_blank" className="links-column-links-footer">
          <FaTwitter />
        </a>
        <a href="https://www.reddit.com/user/tiagorahal/" target="_blank" className="links-column-links-footer">
          <FaRedditAlien />
        </a>
        <a href="https://angel.co/u/tiago-rahal-aires" target="_blank" className="links-column-links-footer">
          <FaAngellist />
        </a>
      </div>
    </div>
  );
}

export default Footer;
