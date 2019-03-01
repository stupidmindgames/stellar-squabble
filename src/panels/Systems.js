import React, { Component } from 'react';
import {Col} from 'react-bootstrap';

class Systems extends Component { 
  render() {
    return (
        <Col className="unit unit--systems" xs="12" lg="6">
            <div className="unit__inner">
                <p>Systems</p>
            </div>
        </Col>
    );
  }
}

export default Systems;
