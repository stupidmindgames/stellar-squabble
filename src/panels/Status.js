import React, { Component } from 'react';
import Panel from './Panel';
import Torps from '../components/Torps';
import StatusGauge from '../components/StatusGauge';

class Status extends Component {
    render() {
        let {value, dim} = this.props;
        let {date, status, statusText, statusColour, energy, shields, torps, warp, mongols} = value;
    
        return (
            <Panel panelName="status" dim={dim} xs="12" md="6"lg="3">
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
            </Panel>
        );
    }
}

export default Status;
