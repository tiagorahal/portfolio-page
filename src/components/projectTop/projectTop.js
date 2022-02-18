import React from 'react';
import MockProject from '../../assets/images/pokemon.png';

const textContent = 'A webapp dedicated to showing information about Pokémon Trading Cards using Pokémon TCG API and Involvement API.';

function ProjectTop() {
  return (
    <div className="ProjectTop" id="project-container">
      <div className="upper-section-project container-fluid">
        <h2>My Recent Works</h2>
        <div className="head-project row">
          <figure className="col-sm-12 col-lg-7 col-xl-8 align-self-lg-center">
            <img src={MockProject} className="img-fluid" alt="project" />
          </figure>
          <div className="upper-section-project-text col-sm-12 col-lg-5 col-xl-3">
            <h3>Pokemon Trading Cars</h3>
            <p>{textContent}</p>
            <div className="buttons-div">
              <button className="toolButton" type="button">JavaScript</button>
              <button className="toolButton" type="button">React</button>
              <button className="toolButton" type="button">Redux</button>
            </div>
            <a href="https://github.com/tiagorahal/pokemon-tcg" target="_blank" rel="noreferrer">
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
