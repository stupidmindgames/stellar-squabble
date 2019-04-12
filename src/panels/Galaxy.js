import React from 'react';
import Panel from './Panel';
import {Col} from 'react-bootstrap';

class Galaxy extends Panel { 
  render() {
    let {value} = this.props;
    let {shipName, location, galaxy} = value;
    let {sector, quad} = location;

    let galaxyCells = [];

    for(let j = 1; j <= 8; j++) {
        galaxyCells.push(<td className="td__galaxyCoord" key={'galaxyCell_' + j}>{j}</td>);
    }

    let galaxyRows = [
        <tr className="tr__galaxyheading" key={'galaxyRow_0'}>
            <td key={'galaxyCell_0'}>&nbsp;</td>
            
            {galaxyCells}
        </tr>,
    ];

    for(let i = 0; i < 8; i++) {
        let cells = [];

        for(let j = 1; j <= 8; j++) {
            let cell = galaxy[i][j-1];

            let currentSector = '';

            if( (i + 1) === location.sector.x && j === location.sector.y ) {
                currentSector = 'td__galaxyCell--current';
            }

            cells.push(
                <td className={'td__galaxyCell ' + currentSector} key={'galaxyCell_' + j}>
                    <span className="span__galaxyCellStat">{cell.stars}</span>
                    <span className="span__galaxyCellStat">{cell.mongs}</span>
                    <span className="span__galaxyCellStat">{cell.bases}</span>
                </td>
            );
        }

        galaxyRows.push(
            <tr className="tr__galaxycontent" key={'galaxyRow_' + (i + 1)}>
                <td className="td__galaxyCoord" key={'galaxyRow_0'}>{i + 1}</td>

                {cells}
            </tr>
        );
    }

    return (
        <Col className="unit unit--double unit--galaxy" xs="12" md="12" lg="6">
            <div className="unit__inner">
                <h2>Chart of Known Galaxy</h2>

                <table className="table__galaxy">
                    <tbody>
                        {galaxyRows}
                    </tbody>
                </table>

                <p>{shipName} in quad {sector.x}-{sector.y}</p>
            </div>
        </Col>
    );
  }
}

export default Galaxy;
