import React from 'react';
import CovidProject from '../../assets/images/ghibli.png';

const textContent = 'A online catalog of Studio Ghibli movies using API to fetch all information.';

function ProjectTop() {
  return (
    <div className="ProjectTop" id="project-container">
      <div className="upper-section-project container-fluid">
        <h2>My Recent Works</h2>
        <div className="head-project row">
          <figure className="col-sm-12 col-lg-7 col-xl-8 align-self-lg-center">
            <img src={CovidProject} className="main-project img-fluid" alt="project" />
          </figure>
          <div className="upper-section-project-text col-sm-12 col-lg-5 col-xl-3">
            <h3>Ghibli Catalog</h3>
            <p>{textContent}</p>
            <div className="buttons-div">
              <button className="toolButton" type="button">API</button>
              <button className="toolButton" type="button">JavaScript</button>
              <button className="toolButton" type="button">React</button>
            </div>
            <a href="https://github.com/tiagorahal/ghibli-catalog" target="_blank" rel="noreferrer">
              <button className="project-button" type="button">
                See Project
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectTop;
