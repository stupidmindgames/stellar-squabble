import React, { Component } from 'react';
import {Col} from 'react-bootstrap';

class Sector extends Component { 
  render() {
    return (
        <Col className="unit unit--sector" xs="12" md="6"lg="3">
            <div className="unit__inner">
                <h2>Sector</h2>
            </div>
        </Col>
    );
  }
}

export default Sector;
