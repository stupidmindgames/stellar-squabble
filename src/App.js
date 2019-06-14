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
import MoveQuad from './commands/MoveQuad.js';
import MoveSector from './commands/MoveSector.js';

class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleCommandPanelClick = this.handleCommandPanelClick.bind(this);
    this.handleCommandPanelClose = this.handleCommandPanelClose.bind(this);
    this.selectCommand = this.selectCommand.bind(this);
    this.handleMoveQuad = this.handleMoveQuad.bind(this);
    this.handleMoveSector = this.handleMoveSector.bind(this);
    this.travelling = this.travelling.bind(this);
    
    this.dimPanels = this.dimPanels.bind(this);
    this.dimAll = this.dimAll.bind(this);

    // this will eventually be the default state
    // and commands will update it
    let player = {
      location : {
        sector: {
          x: 6,
          y: 3,
        },
        quad: {
          x: 3,
          y: 5,
        },
      },
      dest : {
        sector: {
          x: null,
          y: null,
        },
        quad: {
          x: null,
          y: null,
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
      galaxy: [],
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
      sector: [],
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

      game.galaxy.push(cells);
    }

    for(let i = 0; i < 8; i++) {
      let cells = [];

      for(let j = 0; j < 8; j++) {
        let cell = '.';

        cells.push(cell);
      }

      game.sector.push(cells);
    }

    let dim = {
      badge: false,
      commands: false,
      galaxy: false,
      messages: false,
      sector: false,
      status: false,
      systems: false,
      viewer: false,
    }

    this.state = {
      dim: dim,
      game: game,
      player: player,
      commandPanelShow: true,
    }
  }

  handleMoveQuad(dest) {
    let {player} = this.state;
    player.location = dest;
    player.dest = {
      sector: {
        x: null,
        y: null,
      },
      quad: {
        x: null,
        y: null,
      },
    };

    const result = () => {
        this.setState({
        player: player,
        commandPanelShow: false,
        selectedCommandComponent: null,
      });
    };

    this.travelling(1, result);
  }

  handleMoveSector(dest) {
    let {player} = this.state;
    const {location} = player;
    const distance = Math.sqrt(
      Math.pow(location.sector.x - dest.sector.x, 2) +
      Math.pow(location.sector.y - dest.sector.y, 2)
    );

    player.location = dest;
    player.dest = {
      sector: {
        x: null,
        y: null,
      },
      quad: {
        x: null,
        y: null,
      },
    };
    
    const result = () => {
      this.setState({
        player: player,
        commandPanelShow: false,
        selectedCommandComponent: null,
      });
    };

    this.travelling(distance, result);
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

  selectCommand(commandComponent) {
    this.setState({
        selectedCommandComponent: commandComponent,
    });
  }

  travelling(duration, result) {
    const {game} = this.state;
    const travelTime = (10 - parseFloat(game.status.warp)) * duration / 10;

    alert('Travelling for ' + travelTime + ' seconds');

    result();
  }

  dimPanels(panels, dimness) {
    const {dim} = this.state;
    let newDim = [];

    for(let panel of panels) {
      newDim[panel] = dimness;
    }

    this.setState({
      dim: {...dim, ...newDim},
    });
  }

  dimAll(dimness) {
    let panels = [
      'badge',
      'commands',
      'galaxy',
      'messages',
      'sector',
      'status',
      'systems',
      'viewer',
    ];

    this.dimPanels(panels, dimness);
  }

  render() {
    // it seems mental doing it like this now, but bear with me
    const {game, player, dim, selectedCommandComponent} = this.state;
    const {badge, commands, galaxy, messages, sector, status, systems, viewer} = game;

    const commandComponents = [
      {
        name: 'Move within galaxy',
        component:
          <MoveSector value={{galaxy: galaxy, sector: sector, location: player.location}} action={this.handleMoveSector} />,
      },
      {
        name: 'Move within sector',
        component:
          <MoveQuad value={{sector: sector, location: player.location}} action={this.handleMoveQuad} />,
      },
    ];

    return (
      <div>
        <Container className="no-gutters container__game">
          <Row>
            <Galaxy
              dim={dim.galaxy}
              value={{galaxy: galaxy, location: player.location, dest: player.dest}}
            />

            <Status
              dim={dim.status}
              value={status}
            />

            <Sector
              dim={dim.sector}
              value={{sector: sector, location: player.location, dest: player.dest}}
            />
          </Row>
          
          <Row>
            <Messages
              dim={dim.messages}
              value={messages}
            />

            <Col className="unit unit--tall" xs="12" md="12" lg="6">
              <Row>
                <Viewer
                  dim={dim.viewer}
                  value={viewer}
                />
            
                <Commands
                  dim={dim.commands}
                  commands={commandComponents}
                  handleCommandPanelClick={this.handleCommandPanelClick} 
                  value={commands}
                />
              </Row>

              <Row>
                <Systems
                  dim={dim.systems}
                  value={systems}
                />
            
                <Badge
                  dim={dim.badge}
                  value={badge}
                />
              </Row>
            </Col>
          </Row>
        </Container>

        <CommandPanel
          commands={commandComponents}
          selectCommand={this.selectCommand}
          selectedCommandComponent={selectedCommandComponent}
          show={this.state.commandPanelShow}
          close={this.handleCommandPanelClose}
        />
      </div>
    );
  }
}

export default App;
