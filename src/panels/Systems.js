import React, { Component } from 'react';
import {Col} from 'react-bootstrap';
import StatusBar from '../components/StatusBar';

class Systems extends Component { 
  render() {
    return (
        <Col className="unit unit--systems" xs="12" lg="6">
            <div className="unit__inner">
                <h2>Systems Status</h2>

                <table className="table__systems">
                    <tbody>
                        <tr>
                            <td>Energy Converter</td>
                            <td><StatusBar value={50} /></td>
                        </tr>
                        <tr>
                            <td>Shields</td>
                            <td><StatusBar value={77} /></td>
                        </tr>
                        <tr>
                            <td>Life Support</td>
                            <td><StatusBar value={47} /></td>
                        </tr>
                        <tr>
                            <td>Lasers</td>
                            <td><StatusBar value={89} /></td>
                        </tr>
                        <tr>
                            <td>Torpedos</td>
                            <td><StatusBar value={12} /></td>
                        </tr>
                        <tr>
                            <td>Warp Engines</td>
                            <td><StatusBar value={34} /></td>
                        </tr>
                        <tr>
                            <td>Impulse Engines</td>
                            <td><StatusBar value={53} /></td>
                        </tr>
                        <tr>
                            <td>Short Range Scanner</td>
                            <td><StatusBar value={87} /></td>
                        </tr>
                        <tr>
                            <td>Long Range Scanner</td>
                            <td><StatusBar value={100} /></td>
                        </tr>
                        <tr>
                            <td>Main Computer</td>
                            <td><StatusBar value={39} /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </Col>
    );
  }
}

export default Systems;
