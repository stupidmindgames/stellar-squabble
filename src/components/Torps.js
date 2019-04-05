import React, { Component } from 'react';

class Torps extends Component { 
    render() {
        let {value} = this.props;
        let torps = [];

        for(let i = 0; i < value; i++) {
            torps.push(<span>*</span>);
        }

        return (
            <div className={'block__torps'}>{torps}</div>
        );
    }
}

export default Torps;
