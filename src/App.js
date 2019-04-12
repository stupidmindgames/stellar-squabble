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
import CommandPanel from './components/CommandPanel.js';

class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleCommandPanelClick = this.handleCommandPanelClick.bind(this);
    this.handleCommandPanelClose = this.handleCommandPanelClose.bind(this);

    // this will eventually be the default state
    // and commands will update it
    let player = {
      location : {
        sector: {
          x: 6,
          y: 3,
        },
        quad: {
          x: 4,
          y: 4,
        },
      },
    };

    let game = {
      badge: {
        shipName : 'USS Lexington',
        shipReg: 'RCB-92',
        badge: 'img/badge.png',
        dept: 'Dept. of Space',
      },
      commands: {
        eff: 50,
        temp: 0,
      },
      galaxy: {
        shipName : 'USS Lexington',
        location:  player.location,
        galaxy: [],
      },
      messages: {
        messagesData: [
          {
            dept: 'Science',
            date: '3560.2',
            mesg: 'Scanners show no enemy ships in this quadrant.',
          },
          {
            dept: 'Damage',
            date: '3564.1',
            mesg: 'Energy Converter failing, now at 56%',
          },
          {
            dept: 'Communications',
            date: '3564.2',
            mesg: 'The Starbase in 6-6 reports it is under attack. They can last until 3568.3.',
          },
          {
            dept: 'Tactical',
            date: '3565.6',
            mesg: 'There are Mongols off the starboard bow, starboard bow, starboard bow',
          },
        ],
      },
      sector: {
        sector: [],
      },
      status: {
        date: 3500.0,
        status: 'alert',
        statusColour: 'red',
        statusText: (<span>&raquo;&raquo; Alert &laquo;&laquo;</span>),
        energy: 80,
        shields: 65,
        torps: 9,
        warp: 1.0,
        mongols: 23,
      },
      systems: {
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
      },
      viewer: {
      },
    }

    for(let i = 0; i < 8; i++) {
      let cells = [];

      for(let j = 0; j < 8; j++) {
        let cell = {
          stars: 0,
          mongs: 0,
          bases: 0,
        };

        cells.push(cell);
      }

      game.galaxy.galaxy.push(cells);
    }

    for(let i = 0; i < 8; i++) {
      let cells = [];

      for(let j = 0; j < 8; j++) {
        let cell = '.';

        cells.push(cell);
      }

      game.sector.sector.push(cells);
    }

    this.state = {
      game: game,
      player: player,
      commandPanelShow: false,
    }
  }

  commands = {
    moveSector: {
      name: 'Move within galaxy',
      action: () => {
        alert('Move sector');
      },
    },
    moveQuad: {
      name: 'Move within sector ',
      action: () => {
        alert('Move quadrant');
      },
    },
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
    // it seems mental doing it like this now, but bear with me
    let {game, player} = this.state;
    let {badge, commands, galaxy, messages, sector, status, systems, viewer} = game;

    return (
      <div>
        <Container className="no-gutters container__game">
          <Row>
            <Galaxy
              value={galaxy}
            />

            <Status
              value={status}
            />

            <Sector
              value={sector}
            />
          </Row>
          
          <Row>
            <Messages
              value={messages}
            />

            <Col className="unit unit--tall" xs="12" md="12" lg="6">
              <Row>
                <Viewer
                  value={viewer}
                />
            
                <Commands
                  commands={this.commands}
                  handleCommandPanelClick={this.handleCommandPanelClick} 
                  value={commands}
                />
              </Row>

              <Row>
                <Systems
                  value={systems}
                />
            
                <Badge
                  value={badge}
                />
              </Row>
            </Col>
          </Row>
        </Container>

        <CommandPanel
          commands={this.commands}
          show={this.state.commandPanelShow}
          close={this.handleCommandPanelClose}
        />
      </div>
    );
  }
}

export default App;
