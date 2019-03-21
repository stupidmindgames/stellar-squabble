import React, { Component } from 'react';
import {Col} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

class Commands extends Component { 
  render() {
    return (
        <Col className="unit unit--commands" xs="12" lg="6">
            <div className="unit__inner unit__inner--short unit__inner--lasers">
                <h2>Lasers</h2>

                <table>
                    <tbody>
                        <tr>
                            <td>Eff.</td>
                            <td>100%</td>
                        </tr>

                        <tr>
                            <td>Temp.</td>
                            <td>0</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="unit__inner unit__inner--short unit__inner--commands">
                 <Button variant="light" onClick={this.props.handleCommandPanelClick}>
                    Command Panel
                </Button>
            </div>
        </Col>
    );
  }
}

export default Commands;
