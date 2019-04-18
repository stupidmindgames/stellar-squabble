import React, { Component } from 'react';
import Panel from './Panel';

class Badge extends Component { 
  render() {
    const {value, dim} = this.props;
    const {shipName, shipReg, badge, dept} = value;
    
    return (
        <Panel panelName="badge" dim={dim} xs="12" lg="6">
          <h2>{shipName}</h2>
          <p>{shipReg}</p>

          <img src={badge} className="img__badge" alt={shipName + ' badge'} />

          <p>{dept}</p>
        </Panel>
      );
  }
}

export default Badge;
