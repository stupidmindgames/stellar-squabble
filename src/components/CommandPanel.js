import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class CommandPanel extends Component {
    render() {
        var {show, close, commands} = this.props;
        let commandComponents = [];

        for(let command in commands) {
            commandComponents.push(
                <li>
                    <Button onClick={commands[command].action}>{commands[command].name}</Button>
                </li>
            );
        }

        return (
            <Modal size="lg" className='modal__commands' show={show} onHide={close}>
                <Modal.Header>
                    <Modal.Title>Command Panel</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <ul>
                        {commandComponents}
                    </ul>
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
