import React, { Component } from 'react';
import {Col} from 'react-bootstrap';

class Sector extends Component { 
  render() {
    let sectorRows = [
        <tr className="tr__sectorheading">
            <td>&nbsp;</td>
            <td className="td__sectorCoord">1</td>
            <td className="td__sectorCoord">2</td>
            <td className="td__sectorCoord">3</td>
            <td className="td__sectorCoord">4</td>
            <td className="td__sectorCoord">5</td>
            <td className="td__sectorCoord">6</td>
            <td className="td__sectorCoord">7</td>
            <td className="td__sectorCoord">8</td>
        </tr>,
    ];

    for(let i = 0; i < 8; i++) {
        sectorRows.push(
            <tr className="tr__sectorcontent">
                <td className="td__sectorCoord">{i+1}</td>
                <td className="td__sectorCell">.</td>
                <td className="td__sectorCell">.</td>
                <td className="td__sectorCell">.</td>
                <td className="td__sectorCell">.</td>
                <td className="td__sectorCell">.</td>
                <td className="td__sectorCell">.</td>
                <td className="td__sectorCell">.</td>
                <td className="td__sectorCell">.</td>
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
