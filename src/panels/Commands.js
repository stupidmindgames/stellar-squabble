import React, { Component } from 'react';
import {Col} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import StatusBar from '../components/StatusBar';

class Commands extends Component { 
  render() {
    const {value, dim, xs, md, lg} = this.props;
    const {eff, temp} = value;
    
    let className = 'panel panel--commands';
    if(dim) {
        className += ' panel--dim';
    }

    return (
        <Col className={className} xs={xs ? xs : "12"} md={md ? md : "6"} lg={lg ? lg :"6"}>
            <div className="panel__inner panel__inner--short panel__inner--lasers">
                <h2>Lasers</h2>

                <table>
                    <tbody>
                        <tr>
                            <td>Eff.</td>
                            <td><StatusBar value={eff} /></td>
                        </tr>

                        <tr>
                            <td>Temp.</td>
                            <td><StatusBar value={temp} /></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="panel__inner panel__inner--short panel__inner--commands">
                 <Button variant="light" onClick={this.props.handleCommandPanelClick}>
                    Command Panel
                </Button>
            </div>
        </Col>
    );
  }
}

export default Commands;
