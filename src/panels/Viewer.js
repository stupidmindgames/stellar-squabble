import React, { Component } from 'react';
import {Col} from 'react-bootstrap';

class Viewer extends Component { 
  render() {
    return (
        <Col className="unit unit--viewer" xs="12" lg="6">
            <div className="unit__inner">
                <h2>Main Viewer</h2>

                <div className="block__viewScreen">
                
                  <div className="block__viewScreenLayer block__viewScreenLayer--1">
                  </div>
                
                  <div className="block__viewScreenLayer block__viewScreenLayer--2">
                  </div>
                
                  <div className="block__viewScreenLayer block__viewScreenLayer--3">
                  </div>
                
                  <div className="block__viewScreenLayer block__viewScreenLayer--4">
                  </div>
                
                </div>
            </div>
        </Col>
    );
  }
}

export default Viewer;
