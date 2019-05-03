import React, { Component } from 'react';
import {Row} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Sector from '../panels/Sector';
import Coords from '../panels/Coords';

class MoveQuad extends Component {
    render() {
        const {value, action} = this.props;

        return (
            <div>
                <h2>Move Within Sector</h2>

                <Row noGutters={true}>
                    <Sector value={value} click={true} xs="12" md="6" lg="6" />

                    <Coords xs="12" md="6" lg="6" />
                </Row>

                <Button onClick={action}>Move</Button>
            </div>
        );
    }
}

export default MoveQuad;
