import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import {Row, Col} from 'react-bootstrap';

class CommandPanel extends Component {
    constructor(props, context) {
        super(props, context);
    
        this.selectCommand = this.selectCommand.bind(this);

        this.state = {
            command: null,
        }
    }

    selectCommand(command) {
        this.setState = ({
            command: command,
        });
    }

    render() {
        let {command} = this.state;
        let {show, close, commands} = this.props;
        let commandComponents = [], i = 0, selectCommand = this.selectCommand;

        for(let command in commands) {
            commandComponents.push(
                <li key={'command_' + i}>
                    <Button onClick={() => {selectCommand(commands[command].command)}}>
                        {commands[command].name}
                    </Button>
                </li>
            );
            
            i++;
        }

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
                            {command}
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
