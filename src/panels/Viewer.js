import React, { Component } from 'react';
import Panel from './Panel';

class Viewer extends Component { 
  render() {
    const {value, dim, xs, md, lg} = this.props;
    // const {xxx} = value;

    return (
        <Panel panelName="viewer" dim={dim} xs={xs ? xs : "12"} md={md ? md : "6"} lg={lg ? lg :"6"}>
          <h2>Main Viewer</h2>

          <div className="block__viewScreen">
          
            <div className="block__viewScreenLayer block__viewScreenLayer--1">
            </div>
          
            <div className="block__viewScreenLayer block__viewScreenLayer--2">
            </div>
          
            <div className="block__viewScreenLayer block__viewScreenLayer--3">
            </div>
          
            <div className="block__viewScreenLayer block__viewScreenLayer--4">
            </div>
          
          </div>
        </Panel>
    );
  }
}

export default Viewer;
