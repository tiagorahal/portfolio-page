import React from 'react';
import ProjectTop from '../../components/projectTop/projectTop';
import ProjectBottom from '../projectBottom/projectBottom';

function ProjectContainer() {
  return (
    <div className="ProjectContainer">
      <ProjectTop />
      <ProjectBottom />
    </div>
  );
}

export default ProjectContainer;
