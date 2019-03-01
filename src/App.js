import React, { Component } from 'react';
import './scss/style.scss';
import {Container, Row, Col} from 'react-bootstrap';
import Status from './panels/Status.js';
import Sector from './panels/Sector.js';
import Galaxy from './panels/Galaxy.js';
import Messages from './panels/Messages.js';
import Viewer from './panels/Viewer.js';
import Commands from './panels/Commands.js';
import Systems from './panels/Systems.js';
import Badge from './panels/Badge.js';

class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Status />

          <Sector />
          
          <Galaxy />
        </Row>
        
        <Row>
          <Messages />

          <Col className="unit unit-double" xs="12" md="12" lg="6">
            <Row>
              <Viewer />
          
              <Commands />
            </Row>

            <Row>
              <Systems />
          
              <Badge />
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
