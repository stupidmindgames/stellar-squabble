import React, { Component } from 'react';
import Panel from './Panel';

class Viewer extends Component { 
  render() {
    const {value, dim} = this.props;
    // const {xxx} = value;

    return (
        <Panel panelName="viewer" dim={dim} xs="12" lg="6">
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
