import React, { Component } from 'react';
import Gauge from 'react-svg-gauge';

class StatusGauge extends Component {
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
        let {label, value} = this.props;

        return (
            <Gauge
                label={label}
                width={96}
                height={80}
                min={0}
                max={100}
                value={value}
                color={this.energy(value)}
                minMaxLabelStyle={{'display': 'none'}}
            />
        );
    }
}

export default StatusGauge;
