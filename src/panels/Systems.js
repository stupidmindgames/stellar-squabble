import React, { Component } from 'react';
import Panel from './Panel';
import StatusBar from '../components/StatusBar';

class Systems extends Component {
	render() {
		const { value, dim, xs, md, lg } = this.props;
		const { energy, shields, lifeSupport, lasers, torps,
			warp, impulse, shortRange, longRange, computer } = value;

		return (
			<Panel panelName="systems" dim={dim} xs={xs ? xs : "12"} md={md ? md : "6"} lg={lg ? lg : "6"}>
				<h2>Systems Status</h2>

				<table className="table__systems">
					<tbody>
						<tr>
							<td>Energy Converter</td>
							<td><StatusBar value={energy} /></td>
						</tr>
						<tr>
							<td>Shields</td>
							<td><StatusBar value={shields} /></td>
						</tr>
						<tr>
							<td>Life Support</td>
							<td><StatusBar value={lifeSupport} /></td>
						</tr>
						<tr>
							<td>Lasers</td>
							<td><StatusBar value={lasers} /></td>
						</tr>
						<tr>
							<td>Torpedos</td>
							<td><StatusBar value={torps} /></td>
						</tr>
						<tr>
							<td>Warp Engines</td>
							<td><StatusBar value={warp} /></td>
						</tr>
						<tr>
							<td>Impulse Engines</td>
							<td><StatusBar value={impulse} /></td>
						</tr>
						<tr>
							<td>Short Range Scanner</td>
							<td><StatusBar value={shortRange} /></td>
						</tr>
						<tr>
							<td>Long Range Scanner</td>
							<td><StatusBar value={longRange} /></td>
						</tr>
						<tr>
							<td>Main Computer</td>
							<td><StatusBar value={computer} /></td>
						</tr>
					</tbody>
				</table>
			</Panel>
		);
	}
}

export default Systems;
