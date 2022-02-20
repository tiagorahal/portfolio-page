import React from 'react';

const contactText = "I'm always interested in hearing about new projects, so if you'd like to chat please get in touch.";

function ContactText() {
  return (
    <div id="Contact" className="ContactText col-sm-12 col-md-8 col-lg-6 d-flex col-xl-5 flex-column justify-content-center align-items-center">
      <p>
        {contactText}
      </p>
      <button className="contact-mail" type="button">
        <a href="mailto:rahal.aires@gmail.com?subject=Portfolio interest">Email</a>
      </button>
    </div>
  );
}

export default ContactText;
