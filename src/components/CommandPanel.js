import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Row, Col } from 'react-bootstrap';

class CommandPanel extends Component {
	render() {
		const { commands, selectCommand, selectedCommandComponent, show, close } = this.props;

		const commandComponents = commands.map(
			(command, i) => {
				return (
					<li key={'command_' + i}>
						<Button onClick={() => { selectCommand(command.component) }}>
							{command.name}
						</Button>
					</li>
				);
			}
		);

		return (
			<Modal size="lg" className='modal__commands' show={show} onHide={close}>
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
