import React from 'react';
import Panel from './Panel';
import {Col} from 'react-bootstrap';
import StatusBar from '../components/StatusBar';

class Systems extends Panel { 
  render() {
    let {value} = this.props;
    let {energy, shields, lifeSupport, lasers, torps,
        warp, impulse, shortRange, longRange, computer} = value;

    return (
        <Col className="unit unit--systems" xs="12" lg="6">
            <div className="unit__inner">
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
            </div>
        </Col>
    );
  }
}

export default Systems;
