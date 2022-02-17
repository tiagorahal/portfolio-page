import React from 'react';
import Header from './components/header/header';
import Body from './containers/body/body';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/queries.css';
import './App.css';
import './styles/header.css';
import './styles/body.css';
import './styles/projectTop.css';
import './styles/projectBottom.css';

function App() {
  return (
    <div className="App container-fluid">
      <Header />
      <Body />
    </div>
  );
}

export default App;
