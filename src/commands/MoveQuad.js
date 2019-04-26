import React, { Component } from 'react';
import Sector from '../panels/Sector.js';
import Button from 'react-bootstrap/Button';

class MoveQuad extends Component {
    render() {
        const {value, action} = this.props;

        return (
            <div>
                <Sector value={value} click={true} />

                <Button onClick={action}>Move</Button>
            </div>
        );
    }
}

export default MoveQuad;
