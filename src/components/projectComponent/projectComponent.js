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
    projectTitle: 'Covid News App',
    projectText: 'This is a mobile web app the provides daily updates on the global spread of covid-19. The data is sourced from the Narrativa Data API. The project is build with React a JavaScript library, and Redux for state management.',
    projectClass: 'projectTwo inner-content d-flex flex-column justify-content-end p-1',
    firstButton: 'CSS',
    secondButton: 'JavaScript',
    thirdButton: 'React',
    fourthButton: 'Redux',
    projectLink: 'https://github.com/tiagorahal/covid-tracker',
  },
];

const mockDataTwo = [
  {
    projectTitle: 'Math Magicians',
    projectText: 'Math Magicians" is a website for all fans of mathematics.',
    projectClass: 'projectThree inner-content d-flex flex-column justify-content-end p-1',
    firstButton: 'HTML',
    secondButton: 'CSS',
    thirdButton: 'JavaScript',
    fourthButton: 'React',
    projectLink: 'https://github.com/tiagorahal/math-magicians',
  },
  {
    projectTitle: 'Space Travelers Hub',
    projectText: 'Single Page Application that fetch data from SpaceX API and lists the rockets and missions.',
    projectClass: 'projectFour inner-content d-flex flex-column justify-content-end p-1',
    firstButton: 'JavaScrip',
    secondButton: 'React',
    thirdButton: 'Redux',
    fourthButton: 'Webpack',
    projectLink: 'https://github.com/tiagorahal/space-travaler-hub',
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
