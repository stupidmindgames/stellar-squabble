import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class MoveSector extends Component {
    render() {
        const {action} = this.props;

        return (
            <Button onClick={action}>Move</Button>
        );
    }
}

export default MoveSector;
