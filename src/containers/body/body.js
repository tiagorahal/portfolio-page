import React from 'react';
import TopSection from '../../components/topSection/topSection';
import ProjectContainer from '../projectContainer/projectContainer';
import '../../styles/topSection.css';

function Body() {
  return (
    <div className="Body row">
      <TopSection />
      <ProjectContainer />
    </div>
  );
}

export default Body;
