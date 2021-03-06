import React from 'react';
import Header from './components/header/header';
import Body from './containers/body/body';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/topSection.css';
import './styles/queries.css';
import './App.css';
import './styles/projectContainer.css';
import './styles/header.css';
import './styles/body.css';
import './styles/projectTop.css';
import './styles/projectBottom.css';
import './styles/infoContainer.css';
import './styles/contactContainer.css';
import './styles/footer.css';

function App() {
  return (
    <div className="App container-fluid">
      <Header />
      <Body />
    </div>
  );
}

export default App;
