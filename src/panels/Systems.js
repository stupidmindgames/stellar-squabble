import React, { Component } from 'react';
import {Col} from 'react-bootstrap';

class Systems extends Component { 
  render() {
    return (
        <Col className="unit unit--systems" xs="12" lg="6">
            <div className="unit__inner">
                <h2>Systems Status</h2>

                <table className="table__systems">
                    <tr>
                        <td>Energy Converter</td>
                        <td>100%</td>
                    </tr>
                    <tr>
                        <td>Shields</td>
                        <td>100%</td>
                    </tr>
                    <tr>
                        <td>Life Support</td>
                        <td>100%</td>
                    </tr>
                    <tr>
                        <td>Lasers</td>
                        <td>100%</td>
                    </tr>
                    <tr>
                        <td>Torpedos</td>
                        <td>100%</td>
                    </tr>
                    <tr>
                        <td>Warp Engines</td>
                        <td>100%</td>
                    </tr>
                    <tr>
                        <td>Impulse Engines</td>
                        <td>100%</td>
                    </tr>
                    <tr>
                        <td>Short Range Scanner</td>
                        <td>100%</td>
                    </tr>
                    <tr>
                        <td>Long Range Scanner</td>
                        <td>100%</td>
                    </tr>
                    <tr>
                        <td>Main Computer</td>
                        <td>100%</td>
                    </tr>
                </table>
            </div>
        </Col>
    );
  }
}

export default Systems;
