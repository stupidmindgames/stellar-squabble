import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class MoveQuad extends Component {
    render() {
        let {action} = this.props;

        return (
            <Button onClick={action}>Move</Button>
        );
    }
}

export default MoveQuad;
