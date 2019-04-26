import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Galaxy from '../panels/Galaxy';

class MoveSector extends Component {
    render() {
        const {value, action} = this.props;

        return (
            <div>
                <Galaxy value={value} click={true} />

                <Button onClick={action}>Move</Button>
            </div>
        );
    }
}

export default MoveSector;
