import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import {Row, Col} from 'react-bootstrap';

class CommandPanel extends Component {
    constructor(props, context) {
        super(props, context);
    
        this.selectCommand = this.selectCommand.bind(this);

        this.state = {
            selectedCommandComponent: null,
        }
    }

    selectCommand(commandComponent) {
        this.setState({
            selectedCommandComponent: commandComponent,
        });
    }

    render() {
        const {selectedCommandComponent} = this.state;
        const {show, close, commands} = this.props;

        const commandComponents = commands.map(
            (command, i) => {
                return (
                    <li key={'command_' + i}>
                        <Button onClick={() => {this.selectCommand(command.component)}}>
                            {command.name}
                        </Button>
                    </li>
                );
            }
        );

        return (
            <Modal size="lg" className='modal__commands' show={show} onHide={close}>
                <Modal.Header>
                    <Modal.Title>Command Panel</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Row>
                        <Col className={'block__commandList'} xs="3">
                            <ul>
                                {commandComponents}
                            </ul>
                        </Col>

                        <Col className={'block__commandShow'} xs="9">
                            {selectedCommandComponent}
                        </Col>
                    </Row>
                </Modal.Body>

                <Modal.Footer>
                <Button variant="secondary" onClick={close}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default CommandPanel;
