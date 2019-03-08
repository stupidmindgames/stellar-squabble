import React, { Component } from 'react';
import {Col} from 'react-bootstrap';

class Commands extends Component { 
  render() {
    return (
        <Col className="unit unit--commands" xs="12" lg="6">
            <div className="unit__inner unit__inner--short">
                <h2>Lasers</h2>
            </div>

            <div className="unit__inner unit__inner--short">
                <h2>Commands</h2>
            </div>
        </Col>
    );
  }
}

export default Commands;
