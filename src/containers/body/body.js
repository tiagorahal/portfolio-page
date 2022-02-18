import React from 'react';
import TopSection from '../../components/topSection/topSection';
import ProjectContainer from '../projectContainer/projectContainer';
import InfoContainer from '../infoContainer/infoContainer';
import ContactContainer from '../contactContainer/contactContainer';
import '../../styles/topSection.css';

function Body() {
  return (
    <div className="Body row">
      <TopSection />
      <ProjectContainer />
      <InfoContainer />
      <ContactContainer />
    </div>
  );
}

export default Body;
