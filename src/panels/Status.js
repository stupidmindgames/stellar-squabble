import React, { Component } from 'react';
import {Col} from 'react-bootstrap';
import Torps from '../components/Torps';
import StatusGauge from '../components/StatusGauge';

class Status extends Component {
    render() {
        let {value} = this.props;
        let {date, status, statusText, statusColour, energy, shields, torps, warp, mongols} = value;
    
        return (
            <Col className="unit unit--status" xs="12" md="6"lg="3">
                <div className="unit__inner">
                    <div className="block__statusPanel block__statusPanel--date">
                        <span>Date:</span>

                        <span>{date}</span>
                    </div>

                    <div className={'block__statusPanel block__statusPanel--' + status +
                        'block__statusPanel--' + statusColour}>
                        {statusText}
                    </div>

                    <div className="block__gauge block__gauge--energy">
                        <StatusGauge
                            label={'Energy'}
                            value={energy}
                        />
                    </div>

                    <div className="block__gauge block__gauge--shields">
                        <StatusGauge
                            label={'Shields'}
                            value={shields}
                        />
                    </div>

                    <div className="block__statusPanel block__statusPanel--torps">
                        <Torps value={torps} />
                    </div>

                    <div className="block__statusPanel block__statusPanel--warp">
                        <span>Warp: {warp}</span>
                    </div>

                    <div className="block__statusPanel block__statusPanel--mongols">
                        <span>Mongols: {mongols}</span>
                    </div>
                </div>
            </Col>
        );
    }
}

export default Status;
