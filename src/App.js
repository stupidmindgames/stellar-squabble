import React, { Component } from 'react';
import './scss/style.scss';
import { Container, Row, Col } from 'react-bootstrap';
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
import Player from './init/Player';
import Game from './init/Game';

class App extends Component {
	constructor(props, context) {
		super(props, context);

		this.handleCommandPanelClick = this.handleCommandPanelClick.bind(this);
		this.handleCommandPanelClose = this.handleCommandPanelClose.bind(this);
		this.selectCommand = this.selectCommand.bind(this);
		this.handleMoveQuad = this.handleMoveQuad.bind(this);
		this.handleMoveSector = this.handleMoveSector.bind(this);
		this.travelling = this.travelling.bind(this);
		this.setTravelling = this.setTravelling.bind(this);
		this.setEnergy = this.setEnergy.bind(this);
		this.setStardate = this.setStardate.bind(this);
		this.addMessage = this.addMessage.bind(this);

		this.dimPanels = this.dimPanels.bind(this);
		this.dimAll = this.dimAll.bind(this);

		this.state = {
			dim: {
				badge: false,
				commands: false,
				galaxy: false,
				messages: false,
				sector: false,
				status: false,
				systems: false,
				viewer: false,
			},
			game: Game,
			player: Player,
			commandPanelShow: true,
		}
	}

	handleMoveQuad(dest) {
		let { player } = this.state;
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
		let { player } = this.state;
		const { location } = player;
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

	travelling(distance, result) {
		const { game } = this.state, warp = parseFloat(game.status.warp);
		const travelTime = ((10 - warp) * distance / 10).toFixed(1);

		this.handleCommandPanelClose();
		this.dimAll(true, ['viewer']);
		this.setTravelling(true);

		setTimeout(() => {
			const energyUsed = distance * warp * -1;

			this.dimAll(false);
			this.setTravelling(false);
			this.setEnergy(energyUsed);
			this.setStardate(travelTime);
			this.addMessage('Energy used: ' + (0 - energyUsed) + ', duration: ' + travelTime);

			result();
		}, travelTime * 1000);
	}

	setTravelling(travellingness) {
		let { player } = this.state;
		player.travellling = travellingness;

		this.setState({ player });
	}

	setEnergy(change = 0) {
		let { game } = this.state;
		game.status.energy = parseInt(game.status.energy) + parseInt(change);

		if (game.status.energy > 100) {
			game.status.energy = 100;
		} else if (game.status.energy < 0) {
			game.status.energy = 0;
		}

		this.setState({ game })
	}

	setStardate(duration = 0) {
		let { game } = this.state;
		game.status.stardate = parseFloat(game.status.stardate) + parseFloat(duration);

		this.setState({ game })
	}

	addMessage(text) {
		console.log(text)
	}

	dimPanels(panels, dimness) {
		const { dim } = this.state;
		let newDim = [];

		for (let panel of panels) {
			newDim[panel] = dimness;
		}

		this.setState({
			dim: { ...dim, ...newDim },
		});
	}

	dimAll(dimness, except = []) {
		const panels = [
			'badge',
			'commands',
			'galaxy',
			'messages',
			'sector',
			'status',
			'systems',
			'viewer',
		];

		if (except.length === 0) {
			this.dimPanels(panels, dimness);
		} else {
			const dimPanels = panels.filter((panel) => {
				return (except.indexOf(panel) === -1);
			});

			this.dimPanels(dimPanels, dimness);
		}
	}

	render() {
		// it seems mental doing it like this now, but bear with me
		const { game, player, dim, selectedCommandComponent } = this.state;
		const { badge, commands, galaxy, messages, sector, status, systems, viewer } = game;

		const commandComponents = [
			{
				name: 'Move within galaxy',
				component:
					<MoveSector value={{ galaxy: galaxy, sector: sector, location: player.location }} action={this.handleMoveSector} />,
			},
			{
				name: 'Move within sector',
				component:
					<MoveQuad value={{ sector: sector, location: player.location }} action={this.handleMoveQuad} />,
			},
		];

		return (
			<div>
				<Container className="no-gutters container__game">
					<Row>
						<Galaxy
							dim={dim.galaxy}
							value={{ galaxy: galaxy, location: player.location, dest: player.dest }}
						/>

						<Status
							dim={dim.status}
							value={status}
						/>

						<Sector
							dim={dim.sector}
							value={{ sector: sector, location: player.location, dest: player.dest }}
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
									travelling={player.travellling}
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
