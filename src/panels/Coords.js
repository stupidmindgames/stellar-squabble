import React, { Component } from 'react';
import Panel from './Panel';

class Coords extends Component { 
  render() {
    const {dim, xs, md, lg} = this.props;
    
    return (
        <Panel panelName="coords" dim={dim} xs={xs ? xs : "12"} md={md ? md : "6"} lg={lg ? lg :"3"}>
          <h2>Sector / Quadrant</h2>
        </Panel>
      );
  }
}

export default Coords;
