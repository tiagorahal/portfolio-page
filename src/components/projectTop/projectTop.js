import React from 'react';
import MockProject from '../../assets/images/mock_project.jpg';

const textContent = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, debitis molestiae tempore corporis error provident mollitia dolorem facilis? Dolore voluptatibus, laborum impedit similique repellendus asperiores placeat possimus sed? Dicta, accusantium?';

function ProjectTop() {
  return (
    <div className="ProjectTop">
      <div className="upper-section-project container-fluid">
        <h2>My Recent Works</h2>
        <div className="head-project row">
          <figure className="col-sm-12 col-lg-7">
            <img src={MockProject} className="img-fluid" alt="project" />
          </figure>
          <div className="upper-section-project-text col-sm-12 col-lg-5">
            <h3>Multi-Post Stories</h3>
            <p>{textContent}</p>
            <div>
              <button type="button">css</button>
              <button type="button">css</button>
              <button type="button">css</button>
              <button type="button">css</button>
            </div>
            <a href="/">
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
