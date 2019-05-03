import React, { Component } from 'react';
import Panel from './Panel';

class Badge extends Component { 
  render() {
    const {value, dim, xs, md, lg} = this.props;
    const {shipName, shipReg, badge, dept} = value;
    
    return (
        <Panel panelName="badge" dim={dim} xs={xs ? xs : "12"} md={md ? md : "6"} lg={lg ? lg :"3"}>
          <h2>{shipName}</h2>
          <p>{shipReg}</p>

          <img src={badge} className="img__badge" alt={shipName + ' badge'} />

          <p>{dept}</p>
        </Panel>
      );
  }
}

export default Badge;
