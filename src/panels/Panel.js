import React, { Component } from 'react';
import {Col} from 'react-bootstrap';

class Panel extends Component { 
  render() {
    const {children, panelName, double, tall, dim, xs, md, lg} = this.props;
    let className = 'panel';

    if(panelName) {
      className += ' panel--' + panelName;
    }

    if(double) {
      className += ' panel--double';
    }

    if(tall) {
      className += ' panel--tall';
    }

    if(dim) {
      className += ' panel--dim';
    }

    return (
        <Col className={className} xs={xs} md={md} lg={lg}>
          <div className="panel__inner">
            {children}
          </div>
        </Col>
    );
  }
}

export default Panel;
