import React from 'react';
import { ImTerminal } from 'react-icons/im';

function InfoBottom() {
  return (
    <div className="InfoBottom">
      <div className="info-bottom-column">
        <h3 className="info-bottom-title d-flex flex-row">
          <ImTerminal />
          &#160;
          Languages
        </h3>
        <p className="info-bottom-text">
          Javascript
          <br />
          Ruby
        </p>
      </div>
      <div className="info-bottom-column">
        <h3 className="info-bottom-title d-flex flex-row">
          <ImTerminal />
          &#160;
          Frameworks
        </h3>
        <p className="info-bottom-text">
          React
          <br />
          Redux
          <br />
          Bootstrap
          <br />
          Ruby on Rails
        </p>
      </div>
      <div className="info-bottom-column">
        <h3 className="info-bottom-title d-flex flex-row">
          <ImTerminal />
          &#160;
          Skills
        </h3>
        <p className="info-bottom-text">
          Github
          <br />
          PostgreSQL
          <br />
          API
          <br />
          Terminal
        </p>
      </div>
    </div>
  );
}

export default InfoBottom;
