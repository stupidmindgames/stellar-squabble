import React, { Component } from 'react';
import {Col} from 'react-bootstrap';
import Torps from '../components/Torps';
import StatusGauge from '../components/StatusGauge';

class Status extends Component {
    render() {
        return (
            <Col className="unit unit--status" xs="12" md="6"lg="3">
                <div className="unit__inner">
                    <div className="block__statusPanel block__statusPanel--date">
                        <span>Date:</span>

                        <span>3500.0</span>
                    </div>

                    <div className="block__statusPanel block__statusPanel--alert block__statusPanel--red">
                        <span>&raquo;&raquo; Alert &laquo;&laquo;</span>
                    </div>

                    <div className="block__gauge block__gauge--energy">
                        <StatusGauge
                            label={'Energy'}
                            value={80}
                        />
                    </div>

                    <div className="block__gauge block__gauge--shields">
                        <StatusGauge
                            label={'Shields'}
                            value={65}
                        />
                    </div>

                    <div className="block__statusPanel block__statusPanel--torps">
                        <Torps value={9} />
                    </div>

                    <div className="block__statusPanel block__statusPanel--warp">
                        <span>Warp: 1.0</span>
                    </div>

                    <div className="block__statusPanel block__statusPanel--mongols">
                        <span>Mongols: 23</span>
                    </div>
                </div>
            </Col>
        );
    }
}

export default Status;
