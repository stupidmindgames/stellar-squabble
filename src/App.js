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
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleCommandPanelClick = this.handleCommandPanelClick.bind(this);
    this.handleCommandPanelClose = this.handleCommandPanelClose.bind(this);

    this.state = {
      commandPanelShow: false,
    }
  }

  handleCommandPanelClick() {
    this.setState({
      commandPanelShow: true,
    });
  }

  handleCommandPanelClose() {
    this.setState({
      commandPanelShow: false,
    });
  }

  render() {
    return (
      <div>
        <Container className="no-gutters container__game">
          <Row>
            <Galaxy />

            <Status />

            <Sector />          
          </Row>
          
          <Row>
            <Messages />

            <Col className="unit unit--tall" xs="12" md="12" lg="6">
              <Row>
                <Viewer />
            
                <Commands handleCommandPanelClick={this.handleCommandPanelClick} />
              </Row>

              <Row>
                <Systems />
            
                <Badge />
              </Row>
            </Col>
          </Row>
        </Container>

        <Modal size="lg" show={this.state.commandPanelShow} onHide={this.handleCommandPanelClose}>
          <Modal.Header>
            <Modal.Title>Command Panel</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <ul>
              <li>A list of commands</li>
              <li>A list of commands</li>
              <li>A list of commands</li>
              <li>A list of commands</li>
              <li>A list of commands</li>
              <li>A list of commands</li>
              <li>A list of commands</li>
              <li>A list of commands</li>
              <li>A list of commands</li>
              <li>A list of commands</li>
            </ul>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleCommandPanelClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default App;
