import React, { Component } from 'react';
import {Col} from 'react-bootstrap';

class Status extends Component { 
  render() {
    return (
        <Col className="unit unit--status" xs="12" md="6"lg="3">
            <div className="unit__inner">
                <p>Status</p>
            </div>
        </Col>
    );
  }
}

export default Status;
