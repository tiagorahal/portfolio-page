/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaRedditAlien,
  FaAngellist,
} from 'react-icons/fa';

const description = 'I can help you build a product , feature or website Look through some of my work and experience! If you like what you see and have a project you need coded, don’t hestiate to contact me.';

function TopSection() {
  return (
    <div className="TopSection col-12 nav flex-md-row-reverse justify-content-center align-items-center">
      <div className="text-top-section nav col-sm-4 col-md-10 flex-column justify-content-end
      align-items-sm-center align-items-md-start"
      >
        <h3 className="col-md-4">
          Hey There.
          <br />
          I am Tiago
        </h3>
        <p className="description-text-2 col-md-4"><strong>I am a software developer.</strong></p>
        <p className="description-text-3 col-md-4">{description}</p>
      </div>
      <div className="links-column d-flex flex-sm-row flex-md-column nav col-sm-12 col-md-1
      align-items-sm-end align-items-md-center justify-content-center"
      >
        <a href="https://github.com/tiagorahal" target="_blank" className="links-column-links">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/tiagorahal/" target="_blank" className="links-column-links">
          <FaLinkedinIn />
        </a>
        <a href="https://twitter.com/RahalAires" target="_blank" className="links-column-links">
          <FaTwitter />
        </a>
        <a href="https://www.reddit.com/user/tiagorahal/" target="_blank" className="links-column-links">
          <FaRedditAlien />
        </a>
        <a href="https://angel.co/u/tiago-rahal-aires" target="_blank" className="links-column-links">
          <FaAngellist />
        </a>
      </div>
    </div>
  );
}

export default TopSection;
