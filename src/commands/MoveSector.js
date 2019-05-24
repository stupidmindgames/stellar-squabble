import React, { Component } from 'react';
import {Row} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Sector from '../panels/Sector';
import Coords from '../panels/Coords';
import Galaxy from '../panels/Galaxy';

class MoveSector extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleGalaxyClick = this.handleGalaxyClick.bind(this);
        this.handleSectorClick = this.handleSectorClick.bind(this);

        this.state = {
            dest: {
                quad: {
                    x: null,
                    y: null,
                },
                sector: {
                    x: null,
                    y: null,
                },
            }
        }
    }

    // I know you can do these with spreads, but they're bloody unreadable
    handleGalaxyClick(x, y) {
        const {dest} = this.state;

        this.setState({
            dest: {
                quad: dest.quad,
                sector: {
                    x: x,
                    y: y,
                },
            },
        });
    }

    handleSectorClick(x, y) {
        const {dest} = this.state;

        this.setState({
            dest: {
                quad: {
                    x: x,
                    y: y,
                },
                sector: dest.sector,
            },
        });
    }

    render() {
        const {dest} = this.state;
        const {value, action} = this.props;

        return (
            <div>
                <h2>Move Within Galaxy</h2>

                <Row noGutters={true}>
                    <Galaxy value={{...value, ...{dest: dest}}} click={this.handleGalaxyClick} xs="12" md="12" lg="12" />
                </Row>

                <Row noGutters={true}>
                    <Sector value={{...value, ...{dest: dest}}} click={this.handleSectorClick} xs="12" md="6" lg="6" />

                    <Coords xs="12" md="6" lg="6" />
                </Row>

                <Button onClick={() => {action(dest); }}>Move</Button>
            </div>
        );
    }
}

export default MoveSector;
