/* eslint-disable prefer-template */
/* eslint-disable react/jsx-key */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';

const mockDataOne = [
  {
    projectTitle: 'Awesome Restaurants',
    projectText: 'Check your region top restaurants and make reservations to eat in them! Awesome Restaurants uses a Rails-powered API to send and receive information in the React front-end',
    projectClass: 'projectOne inner-content d-flex flex-column justify-content-end p-1',
    firstButton: 'JavaScript',
    secondButton: 'Ruby',
    thirdButton: 'React & Redux',
    fourthButton: 'Ruby on Rails',
    projectLink: 'https://github.com/tiagorahal/awesome-resturants',
  },
  {
    projectTitle: 'I AM TESTING THIS 02',
    projectText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae ligula vitae dui molestie tristique blandit a nibh. Fusce id lorem tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. ',
    projectClass: 'projectTwo inner-content d-flex flex-column justify-content-end p-1',
    firstButton: 'CSS',
    secondButton: 'JavaScript',
    thirdButton: 'React',
    fourthButton: 'Redux',
    projectLink: 'https://github.com/tiagorahal/awesome-resturants',
  },
];

const mockDataTwo = [
  {
    projectTitle: 'I AM TESTING THIS 03',
    projectText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae ligula vitae dui molestie tristique blandit a nibh. Fusce id lorem tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. ',
    projectClass: 'projectThree inner-content d-flex flex-column justify-content-end p-1',
    firstButton: 'CSS',
    secondButton: 'JavaScript',
    thirdButton: 'React',
    fourthButton: 'Redux',
    projectLink: 'https://github.com/tiagorahal/awesome-resturants',
  },
  {
    projectTitle: 'I AM TESTING THIS 04',
    projectText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae ligula vitae dui molestie tristique blandit a nibh. Fusce id lorem tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. ',
    projectClass: 'projectFour inner-content d-flex flex-column justify-content-end p-1',
    firstButton: 'CSS',
    secondButton: 'JavaScript',
    thirdButton: 'React',
    fourthButton: 'Redux',
    projectLink: 'https://github.com/tiagorahal/awesome-resturants',
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
      <a className="project-button-component text-center" href={props.projectLink} target="_blank" rel="noreferrer">See Project</a>
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
          projectLink={returnprojects.projectLink}
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
          projectLink={returnprojects.projectLink}
        />
      ))}
    </div>
  );
}

export { ProjectComponentOne, ProjectComponentTwo };
