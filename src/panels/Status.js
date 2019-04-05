import React, { Component } from 'react';
import {Col} from 'react-bootstrap';
import Gauge from 'react-svg-gauge';
import Torps from '../components/Torps';

class Status extends Component {
    constructor(props, context) {
        super(props, context);
    
        this.energy = this.energy.bind(this);
    }

    energy(value) {
        if(value <= 25) {
            return '#ff0000';
        }
        
        if(value <= 50) {
            return '#ff7700';
        }
        
        if(value <= 75) {
            return '#ffff00';
        }

        return '#00aa00';
    }

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
                        <Gauge
                            label={'Energy'}
                            width={96}
                            height={80}
                            min={0}
                            max={100}
                            value={80}
                            color={this.energy(80)}
                            minMaxLabelStyle={{'display': 'none'}}
                        />
                    </div>

                    <div className="block__gauge block__gauge--shields">
                        <Gauge
                            label={'Shields'}
                            width={96}
                            height={80}
                            min={0}
                            max={100}
                            value={65}
                            color={this.energy(65)}
                            minMaxLabelStyle={{'display': 'none'}}
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

