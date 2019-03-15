import React, { Component } from 'react';
import {Col} from 'react-bootstrap';

class Galaxy extends Component { 
  render() {
    let sector = '6', quad = '3';

    let galaxyRows = [
        <tr className="tr__galaxyheading">
            <td>&nbsp;</td>
            <td className="td__galaxyCoord">1</td>
            <td className="td__galaxyCoord">2</td>
            <td className="td__galaxyCoord">3</td>
            <td className="td__galaxyCoord">4</td>
            <td className="td__galaxyCoord">5</td>
            <td className="td__galaxyCoord">6</td>
            <td className="td__galaxyCoord">7</td>
            <td className="td__galaxyCoord">8</td>
        </tr>,
    ];

    for(let i = 0; i < 8; i++) {
        galaxyRows.push(
            <tr className="tr__galaxycontent">
                <td className="td__galaxyCoord">{i+1}</td>
                <td className="td__galaxyCell"><span class="span__galaxyCellStat">.</span><span class="span__galaxyCellStat">.</span><span class="span__galaxyCellStat">.</span></td>
                <td className="td__galaxyCell"><span class="span__galaxyCellStat">.</span><span class="span__galaxyCellStat">.</span><span class="span__galaxyCellStat">.</span></td>
                <td className="td__galaxyCell"><span class="span__galaxyCellStat">.</span><span class="span__galaxyCellStat">.</span><span class="span__galaxyCellStat">.</span></td>
                <td className="td__galaxyCell"><span class="span__galaxyCellStat">.</span><span class="span__galaxyCellStat">.</span><span class="span__galaxyCellStat">.</span></td>
                <td className="td__galaxyCell"><span class="span__galaxyCellStat">.</span><span class="span__galaxyCellStat">.</span><span class="span__galaxyCellStat">.</span></td>
                <td className="td__galaxyCell"><span class="span__galaxyCellStat">.</span><span class="span__galaxyCellStat">.</span><span class="span__galaxyCellStat">.</span></td>
                <td className="td__galaxyCell"><span class="span__galaxyCellStat">.</span><span class="span__galaxyCellStat">.</span><span class="span__galaxyCellStat">.</span></td>
                <td className="td__galaxyCell"><span class="span__galaxyCellStat">.</span><span class="span__galaxyCellStat">.</span><span class="span__galaxyCellStat">.</span></td>
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
