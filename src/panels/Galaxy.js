import React, { Component } from 'react';
import {Col} from 'react-bootstrap';

class Galaxy extends Component { 
  render() {
    let {value} = this.props;
    let {xxx} = value;

    let sector = '6', quad = '3';

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
            cells.push(
                <td className="td__galaxyCell" key={'galaxyCell_' + j}>
                    <span className="span__galaxyCellStat">.</span>
                    <span className="span__galaxyCellStat">.</span>
                    <span className="span__galaxyCellStat">.</span>
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

                <p>Lexington in quad {sector}-{quad}</p>
            </div>
        </Col>
    );
  }
}

export default Galaxy;
