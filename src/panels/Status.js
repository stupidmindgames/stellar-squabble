import React, { Component } from 'react';
import {Col} from 'react-bootstrap';

class Status extends Component { 
  render() {
    return (
        <Col className="unit unit--status" xs="12" md="6"lg="3">
            <div className="unit__inner">
                <div className="div__statusPanel div__statusPanel--date">
                    <span>Date:</span>

                    <span>3500.0</span>
                </div>

                <div className="div__statusPanel div__statusPanel--alert div__statusPanel--red">
                    <span>&raquo;&raquo; Alert &laquo;&laquo;</span>
                </div>

                <div className="div__gauge div__gauge--energy">
                    100%
                </div>

                <div className="div__gauge div__gauge--shields">
                    100%
                </div>

                <div className="div__statusPanel div__statusPanel--torps">
                    9
                </div>

                <div className="div__statusPanel div__statusPanel--warp">
                    <span>Warp: 1.0</span>
                </div>

                <div className="div__statusPanel div__statusPanel--mongols">
                    <span>Mongols: 23</span>
                </div>
            </div>
        </Col>
    );
  }
}

export default Status;

