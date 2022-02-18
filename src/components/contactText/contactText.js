import React from 'react';

const contactText = "I'm always interested in hearing about new projects, so if you'd like to chat please get in touch.";

function ContactText() {
  return (
    <div className="ContactText col-sm-12 col-lg-6">
      <p>
        {contactText}
      </p>
    </div>
  );
}

export default ContactText;
