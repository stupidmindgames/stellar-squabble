import React, { Component } from 'react';
import {Col} from 'react-bootstrap';

class Sector extends Component { 
  render() {
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
            cells.push(<td className="td__sectorCell" key={'sectorCell_' + j}>.</td>);
        }

        sectorRows.push(
            <tr className="tr__sectorcontent" key={'galaxyRow_' + (i + 1)}>
                <td className="td__sectorCoord">{i+1}</td>

                {cells}
            </tr>
        );
    }

    return (
        <Col className="unit unit--sector" xs="12" md="6"lg="3">
            <div className="unit__inner">
                <table className="table__sector">
                    <tbody>
                        {sectorRows}
                    </tbody>
                </table>
            </div>
        </Col>
    );
  }
}

export default Sector;
