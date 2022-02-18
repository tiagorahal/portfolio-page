/* eslint-disable prefer-template */
/* eslint-disable react/jsx-key */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';

const mockDataOne = [
  {
    projectTitle: 'Covid News App',
    projectText: 'This is a mobile web app the provides daily updates on the global spread of covid-19. The data is sourced from the Narrativa Data API. The project is build with React a JavaScript library, and Redux for state management.',
    projectClass: 'projectOne inner-content justify-content-start',
    firstButton: 'CSS',
    secondButton: 'JavaScript',
    thirdButton: 'React',
    fourthButton: 'Redux',
  },
  {
    projectTitle: 'I AM TESTING THIS 02',
    projectText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae ligula vitae dui molestie tristique blandit a nibh. Fusce id lorem tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. ',
    projectClass: 'projectTwo inner-content justify-content-start',
    firstButton: 'CSS',
    secondButton: 'JavaScript',
    thirdButton: 'React',
    fourthButton: 'Redux',
  },
];

const mockDataTwo = [
  {
    projectTitle: 'I AM TESTING THIS 03',
    projectText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae ligula vitae dui molestie tristique blandit a nibh. Fusce id lorem tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. ',
    projectClass: 'projectThree inner-content justify-content-start',
    firstButton: 'CSS',
    secondButton: 'JavaScript',
    thirdButton: 'React',
    fourthButton: 'Redux',
  },
  {
    projectTitle: 'I AM TESTING THIS 04',
    projectText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae ligula vitae dui molestie tristique blandit a nibh. Fusce id lorem tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. ',
    projectClass: 'projectFour inner-content justify-content-start',
    firstButton: 'CSS',
    secondButton: 'JavaScript',
    thirdButton: 'React',
    fourthButton: 'Redux',
  },

];

function ReturnProjects(props) {
  return (
    <div className={props.projectClass}>
      <p className="project-title">{props.projectTitle}</p>
      <p className="project-text">{props.projectText}</p>
      <div className="buttons-div-component">
        <button className="toolButton-component" type="button">{props.firstButton}</button>
        <button className="toolButton-component" type="button">{props.secondButton}</button>
        <button className="toolButton-component" type="button">{props.thirdButton}</button>
        <button className="toolButton-component" type="button">{props.fourthButton}</button>
      </div>
      <a className="project-button-component" href="/">See Project</a>
    </div>
  );
}

function ProjectComponentOne() {
  return (
    <div className="ProjectComponentOne row">
      {mockDataOne.map((returnprojects) => (
        <ReturnProjects
          projectTitle={returnprojects.projectTitle}
          projectText={returnprojects.projectText}
          projectClass={returnprojects.projectClass}
          firstButton={returnprojects.firstButton}
          secondButton={returnprojects.secondButton}
          thirdButton={returnprojects.thirdButton}
          fourthButton={returnprojects.fourthButton}
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
          projectClass={returnprojects.projectClass}
          firstButton={returnprojects.firstButton}
          secondButton={returnprojects.secondButton}
          thirdButton={returnprojects.thirdButton}
          fourthButton={returnprojects.fourthButton}
        />
      ))}
    </div>
  );
}

export { ProjectComponentOne, ProjectComponentTwo };
