import React from 'react';

const contactText = "I'm always interested in hearing about new projects, so if you'd like to chat please get in touch.";

function ContactText() {
  return (
    <div className="ContactText col-sm-12 col-md-8 col-lg-6 d-flex col-xl-5 flex-column justify-content-center align-items-center">
      <p>
        {contactText}
      </p>
      <button className="contact-mail" type="button">
        <a href="mailto:rahal.aires@gmail.com">Email</a>
      </button>
    </div>
  );
}

export default ContactText;
