import React, { Component } from 'react';
import Panel from './Panel';

class Messages extends Component {
	render() {
		const { value, dim, xs, md, lg } = this.props;
		const { messagesData } = value;

		let messages = [];

		let i = 0; // this is the best way as we only increment when we add
		for (let messageData of messagesData) {
			if (messageData.dept && messageData.date && messageData.mesg) {
				messages.push(
					<div className={'block__message block__message--' + messageData.dept.toLowerCase()} key={'message' + i}>
						<span>{messageData.date}</span>

						<h2>{messageData.dept}</h2>

						<p>{messageData.mesg}</p>
					</div>
				);

				i++;
			}
		}

		return (
			<Panel panelName="messages" double={true} tall={true} dim={dim} xs={xs ? xs : "12"} md={md ? md : "12"} lg={lg ? lg : "6"}>
				{messages}
			</Panel>
		);
	}
}

export default Messages;
