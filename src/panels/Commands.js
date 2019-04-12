import React from 'react';
import Panel from './Panel';
import {Col} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import StatusBar from '../components/StatusBar';

class Commands extends Panel { 
  render() {
    let {value} = this.props;
    let {eff, temp} = value;

    return (
        <Col className="unit unit--commands" xs="12" lg="6">
            <div className="unit__inner unit__inner--short unit__inner--lasers">
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
