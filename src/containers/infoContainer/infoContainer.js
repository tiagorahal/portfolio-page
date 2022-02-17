import React from 'react';

const infoText = 'Hello I’m a software developer! I can help you build a product , feature or website Look through some of my work and experience! If you like what you see and have a project you need coded, don’t hestiate to contact me.';

function InfoContainer() {
  return (
    <div className="InfoContainer col-sm-12">
      <div className="upper-info col-sm-12 col-md-6 col-lg-5 col-xl-4">
        <p className="info-title">
          About me
        </p>
        <p className="info-text">
          {infoText}
        </p>
        <button className="resume-button" type="button">
          Get My Resume
        </button>
      </div>
      <hr />
    </div>
  );
}

export default InfoContainer;
