import React, { Component } from 'react';
import {Col} from 'react-bootstrap';

class Messages extends Component { 
  render() {
    let messagesData = [
      {
        dept: 'Science',
        date: '3560.2',
        mesg: 'Scanners show no enemy ships in this quadrant.',
      },
      {
        dept: 'Damage',
        date: '3564.1',
        mesg: 'Energy Converter failing, now at 56%',
      },
      {
        dept: 'Communications',
        date: '3564.2',
        mesg: 'The Starbase in 6-6 reports it is under attack. They can last until 3568.3.',
      },
      {
        dept: 'Tactical',
        date: '3565.6',
        mesg: 'There are Mongols off the starboard bow, starboard bow, starboard bow',
      },
    ];

    let messages = [];

    for(let messageData of messagesData) {
      if(messageData.dept && messageData.date && messageData.mesg) {
        messages.push(
          <div className={'div__message div__message--' + messageData.dept.toLowerCase()}>
            <span>{messageData.date}</span>

            <h2>{messageData.dept}</h2>

            <p>{messageData.mesg}</p>
          </div>
        );
      }
    }

    return (
    	<Col className="unit unit--double unit--tall unit--messages" xs="12" md="12" lg="6">
            <div className="unit__inner">
                {messages}
            </div>
    	</Col>
    );
  }
}

export default Messages;

