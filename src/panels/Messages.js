import React, { Component } from 'react';
import {Col} from 'react-bootstrap';

class Messages extends Component { 
  render() {
    return (
    	<Col className="unit unit--double unit--tall unit--messages" xs="12" md="12" lg="6">
            <div className="unit__inner">
                <h2>Messages</h2>
            </div>
    	</Col>
    );
  }
}

export default Messages;
