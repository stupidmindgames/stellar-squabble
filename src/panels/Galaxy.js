import React, { Component } from 'react';
import {Col} from 'react-bootstrap';

class Galaxy extends Component { 
  render() {
    return (
    	<Col className="unit unit--double unit--galaxy" xs="12" md="12" lg="6">
            <div className="unit__inner">
                <p>Galaxy</p>
            </div>
    	</Col>
    );
  }
}

export default Galaxy;