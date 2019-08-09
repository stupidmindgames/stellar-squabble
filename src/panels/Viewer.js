import React, { Component } from 'react';
import Panel from './Panel';
import Travelling from '../assets/img/travelling.gif';

class Viewer extends Component {
	render() {
		const { dim, xs, md, lg, travelling } = this.props;
		// const {xxx} = value;

		const viewer = travelling ? (
			<div className="block__viewScreen">

				<img src={Travelling} alt="Moving starfield..." className="img__travelling" />

			</div>
		) : (
				<div className="block__viewScreen">

					<div className="block__viewScreenLayer block__viewScreenLayer--1">
					</div>

					<div className="block__viewScreenLayer block__viewScreenLayer--2">
					</div>

					<div className="block__viewScreenLayer block__viewScreenLayer--3">
					</div>

					<div className="block__viewScreenLayer block__viewScreenLayer--4">
					</div>

				</div>
			);

		return (
			<Panel panelName="viewer" dim={dim} xs={xs ? xs : "12"} md={md ? md : "6"} lg={lg ? lg : "6"}>
				<h2>Main Viewer</h2>

				{viewer}
			</Panel>
		);
	}
}

export default Viewer;
