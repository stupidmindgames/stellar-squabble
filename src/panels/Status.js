import React, { Component } from 'react';
import {Col} from 'react-bootstrap';

class Status extends Component { 
  render() {
    return (
        <Col className="unit unit--status" xs="12" md="6"lg="3">
            <div className="unit__inner">
                <h2>Status</h2>
            </div>
        </Col>
    );
  }
}

export default Status;
