import React, { Component } from 'react';
import {Col} from 'react-bootstrap';

class Badge extends Component { 
  render() {
    return (
        <Col className="unit unit--badge" xs="12" lg="6">
            <div className="unit__inner">
                <p>USS Lexington</p>
                <p>RCB-92</p>

                <img src="img/badge.png" className="img__badge" alt="USS Lexington badge" />

                <p>Dept. of Space</p>
            </div>
        </Col>
        );
  }
}

export default Badge;
