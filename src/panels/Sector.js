import React, { Component } from 'react';
import Panel from './Panel';

class Sector extends Component { 
  render() {
    const {value, dim} = this.props;
    const {sector, location} = value;
    const {quad} = location;

    let sectorCells = [];

    for(let j = 1; j <= 8; j++) {
        sectorCells.push(<td className="td__sectorCoord" key={'sectorCell_' + j}>{j}</td>);
    }

    let sectorRows = [
        <tr className="tr__sectorheading" key={'galaxyRow_0'}>
            <td key={'sectorCell_0'}>&nbsp;</td>
            
            {sectorCells}
        </tr>,
    ];

    for(let i = 0; i < 8; i++) {
        let cells = [];

        for(let j = 1; j <= 8; j++) {
            if((i + 1) === quad.x && j === quad.y) {
                cells.push(
                    <td className="td__sectorCell td__sectorCell--current" key={'sectorCell_' + j}>
                        X
                    </td>
                );
            } else {
                cells.push(
                    <td className="td__sectorCell" key={'sectorCell_' + j}>{sector[i][j -1]}</td>
                );
            }
        }

        sectorRows.push(
            <tr className="tr__sectorcontent" key={'galaxyRow_' + (i + 1)}>
                <td className="td__sectorCoord">{i+1}</td>

                {cells}
            </tr>
        );
    }

    return (
        <Panel panelName="sector" dim={dim} xs="12" md="6" lg="3">
            <table className="table__sector">
                <tbody>
                    {sectorRows}
                </tbody>
            </table>
        </Panel>
    );
  }
}

export default Sector;
