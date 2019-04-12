import React from 'react';
import Panel from './Panel';
import {Col} from 'react-bootstrap';

class Badge extends Panel { 
  render() {
    let {value} = this.props;
    let {shipName, shipReg, badge, dept} = value;
    
    return (
        <Col className="unit unit--badge" xs="12" lg="6">
            <div className="unit__inner">
                <h2>{shipName}</h2>
                <p>{shipReg}</p>

                <img src={badge} className="img__badge" alt={shipName + ' badge'} />

                <p>{dept}</p>
            </div>
        </Col>
        );
  }
}

export default Badge;
