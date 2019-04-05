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
            <Galaxy
              value={{
              }}
            />

            <Status
              value={{
                date: 3500.0,
                status: 'alert',
                statusColour: 'red',
                statusText: (<span>&raquo;&raquo; Alert &laquo;&laquo;</span>),
                energy: 80,
                shields: 65,
                torps: 9,
                warp: 1.0,
                mongols: 23,
              }}
            />

            <Sector
              value={{
              }}
            />
          </Row>
          
          <Row>
            <Messages
              value={{
              }}
            />

            <Col className="unit unit--tall" xs="12" md="12" lg="6">
              <Row>
                <Viewer
                  value={{
                  }}
                />
            
                <Commands
                  handleCommandPanelClick={this.handleCommandPanelClick} 
                  value={{
                    eff: 50,
                    temp: 0,
                  }}
                />
              </Row>

              <Row>
                <Systems
                  value={{
                    energy: 50,
                    shields: 77,
                    lifeSupport: 47,
                    lasers: 89,
                    torps: 12,
                    warp: 34,
                    impulse: 53,
                    shortRange: 87,
                    longRange: 100,
                    computer: 39,
                  }}
                />
            
                <Badge
                  value={{
                    shipName : 'USS Lexington',
                    shipReg: 'RCB-92',
                    badge: 'img/badge.png',
                    dept: 'Dept. of Space',
                  }}
                />
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
