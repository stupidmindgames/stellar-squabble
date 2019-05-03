import React, { Component } from 'react';
import Panel from './Panel';

class Sector extends Component {
    constructor(props, context) {
        super(props, context);
        const {click} = this.props;
    
        this.handleClick = this.handleClick.bind(this);

        this.state = {
            clicky : ! (click === undefined || click === null),
        }
    }        
    
    handleClick(e) {
        const {clicky} = this.state;

        if(clicky) {
            const {click} = this.props;

            alert('arse');
        }
    }

    render() {
        const {clicky} = this.state;
        const {value, dim, xs, md, lg} = this.props;
        const {sector, location} = value;
        const {quad} = location;

        let clickyCell = clicky ? ' td__sectorCell--clicky' : '';
        let sectorCells = [];

        for(let j = 1; j <= 8; j++) {
            sectorCells.push(
                <td className="td__sectorCoord" key={'sectorCell_' + j}>{j}</td>
            );
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
                        <td onClick={this.handleClick} className={'td__sectorCell td__sectorCell--current' + clickyCell} key={'sectorCell_' + j}>
                            X
                        </td>
                    );
                } else {
                    cells.push(
                        <td onClick={this.handleClick} className={'td__sectorCell' + clickyCell} key={'sectorCell_' + j}>
                            {sector[i][j -1]}
                        </td>
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
            <Panel panelName="sector" dim={dim} xs={xs ? xs : "12"} md={md ? md : "6"} lg={lg ? lg :"3"}>
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
