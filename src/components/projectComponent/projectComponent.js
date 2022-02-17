/* eslint-disable prefer-template */
/* eslint-disable react/jsx-key */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';

const mockDataOne = [
  {
    projectTitle: 'I AM TESTING THIS 01',
    projectText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae ligula vitae dui molestie tristique blandit a nibh. Fusce id lorem tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. ',
  },
  {
    projectTitle: 'I AM TESTING THIS 02',
    projectText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae ligula vitae dui molestie tristique blandit a nibh. Fusce id lorem tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. ',
  },
];

const mockDataTwo = [
  {
    projectTitle: 'I AM TESTING THIS 01',
    projectText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae ligula vitae dui molestie tristique blandit a nibh. Fusce id lorem tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. ',
  },
  {
    projectTitle: 'I AM TESTING THIS 02',
    projectText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae ligula vitae dui molestie tristique blandit a nibh. Fusce id lorem tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. ',
  },

];

function ReturnProjects(props) {
  return (
    <div className="inner-content justify-content-start">
      <p className="project-title">{props.projectTitle}</p>
      <p className="project-text">{props.projectText}</p>
      <div className="buttons-div-component">
        <button className="toolButton-component" type="button">Bootstrap</button>
        <button className="toolButton-component" type="button">Javascript</button>
        <button className="toolButton-component" type="button">React</button>
        <button className="toolButton-component" type="button">Redux</button>
      </div>
      <a className="project-button-component" href="/">See Project</a>
    </div>
  );
}

function ProjectComponentOne() {
  return (
    <div className="ProjectComponent row">
      {mockDataOne.map((returnprojects) => (
        <ReturnProjects
          projectTitle={returnprojects.projectTitle}
          projectText={returnprojects.projectText}
        />
      ))}
    </div>
  );
}

function ProjectComponentTwo() {
  return (
    <div className="ProjectComponentTwo row">
      {mockDataTwo.map((returnprojects) => (
        <ReturnProjects
          projectTitle={returnprojects.projectTitle}
          projectText={returnprojects.projectText}
        />
      ))}
    </div>
  );
}

export { ProjectComponentOne, ProjectComponentTwo };
