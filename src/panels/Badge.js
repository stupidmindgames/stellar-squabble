import React, { Component } from 'react';
import Panel from './Panel';

class Badge extends Component { 
  render() {
    let {value, dim} = this.props;
    let {shipName, shipReg, badge, dept} = value;
    
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
