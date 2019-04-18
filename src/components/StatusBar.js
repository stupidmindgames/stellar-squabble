import React, { Component } from 'react';
import { Line } from 'rc-progress';

class StatusBar extends Component { 
    render() {
        const {value} = this.props;

        return (
            <Line percent={value} strokeWidth="8" strokeColor="#ffffff" />
        );
    }
}

export default StatusBar;
