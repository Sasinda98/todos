import React from 'react';
import './App.css';
import 'tachyons';
import 'bootstrap';

import NavigationBar from './Components/Top/Navigation';
import Body from './Components/Middle/Body';

import Container from 'react-bootstrap/Container';




function App() {

  return (
    <div className="App">
    	<div className="NavBarStyle">
  			<NavigationBar loggedIn={true}  />
    	</div>
    
      <Container className="Container">
        <Body></Body>
      </Container>
    </div>
  );
}

export default App;
