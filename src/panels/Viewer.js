import React, { Component } from 'react';
import {Col} from 'react-bootstrap';

class Viewer extends Component { 
  render() {
    return (
        <Col className="unit unit--viewer" xs="12" lg="6">
            <div className="unit__inner">
                <p>Viewer</p>
            </div>
        </Col>
    );
  }
}

export default Viewer;
