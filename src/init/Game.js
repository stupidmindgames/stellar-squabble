import ShipBadge from '../assets/img/badge.png';

let Game = {
	badge: {
		shipName: 'USS Lexington',
		shipReg: 'RCB-92',
		badge: ShipBadge,
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
		stardate: 3500.0,
		status: 'alert',
		statusColour: 'red',
		statusText: '&raquo;&raquo; Alert &laquo;&laquo;',
		energy: 100,
		shields: 100,
		torps: 9,
		warp: 1.0,
		mongols: 23,
	},
	systems: {
		energy: 100,
		shields: 100,
		lifeSupport: 100,
		lasers: 100,
		torps: 100,
		warp: 100,
		impulse: 100,
		shortRange: 100,
		longRange: 100,
		computer: 100,
	},
	viewer: {
	},
}

for (let i = 0; i < 8; i++) {
	let cells = [];

	for (let j = 0; j < 8; j++) {
		let cell = {
			stars: 0,
			mongs: 0,
			bases: 0,
		};

		cells.push(cell);
	}

	Game.galaxy.push(cells);
}

for (let i = 0; i < 8; i++) {
	let cells = [];

	for (let j = 0; j < 8; j++) {
		let cell = '.';

		cells.push(cell);
	}

	Game.sector.push(cells);
}

export default Game;
