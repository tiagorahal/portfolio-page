/* eslint-disable react/jsx-key */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';

const mockData = [
  {
    title: 'I AM TESTING THIS 01',
  },
  {
    title: 'I AM TESTING THIS 02',
  },
  {
    title: 'I AM TESTING THIS 03',
  },
  {
    title: 'I AM TESTING THIS 04',
  },
  {
    title: 'I AM TESTING THIS 05',
  },
  {
    title: 'I AM TESTING THIS 06',
  },
];

function ReturnProjects(props) {
  return (
    <div className="inner-content nav col-sm-12 col-md-6 col-lg-4 justify-content-center">
      <h2>{props.title}</h2>
    </div>
  );
}

function ProjectComponent() {
  return (
    <div className="ProjectComponent row nav d-flex">
      {mockData.map((returnprojects) => (
        <ReturnProjects
          title={returnprojects.title}
        />
      ))}
    </div>
  );
}

export default ProjectComponent;
