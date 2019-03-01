import React, { Component } from 'react';
import {Col} from 'react-bootstrap';

class Commands extends Component { 
  render() {
    return (
        <Col className="unit unit--commands" xs="12" lg="6">
            <div className="unit__inner">
                <p>Commands</p>
            </div>
        </Col>
    );
  }
}

export default Commands;
