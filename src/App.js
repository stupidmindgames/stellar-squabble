import React, { Component } from 'react';
import './App.css';
import {Container, Row, Col} from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col className="unit" xs="12" md="6" lg="3">Status</Col>
          <Col className="unit" xs="12" md="6" lg="3">Sector</Col>
          <Col className="unit" xs="12" md="12" lg="6">Galaxy</Col>
        </Row>
        <Row>
          <Col className="unit unit-double" xs="12" md="12" lg="6">Messages</Col>
          <Col className="unit unit-double" xs="12" md="12" lg="6">
            <Row>
              <Col className="unit" xs="12" lg="6">Viewer</Col>
              <Col className="unit" xs="12" lg="6">Commands</Col>
            </Row>

            <Row>
              <Col className="unit" xs="12" lg="6">Systems</Col>
              <Col className="unit" xs="12" lg="6">Badge</Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
