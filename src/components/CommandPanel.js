import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class CommandPanel extends Component {
    render() {
        var {show, close} = this.props;

        return (
            <Modal size="lg" show={show} onHide={close}>
                <Modal.Header>
                    <Modal.Title>Command Panel</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                <ul>
                    <li>A list of commands</li>
                    <li>A list of commands</li>
                    <li>A list of commands</li>
                    <li>A list of commands</li>
                    <li>A list of commands</li>
                    <li>A list of commands</li>
                    <li>A list of commands</li>
                    <li>A list of commands</li>
                    <li>A list of commands</li>
                    <li>A list of commands</li>
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
