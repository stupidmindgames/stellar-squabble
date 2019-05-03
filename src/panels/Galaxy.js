import React, { Component } from 'react';
import Panel from './Panel';

class Galaxy extends Component {
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
        const {shipName, location, galaxy} = value;
        const {sector, quad} = location;

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

                let currentSector = ( (i + 1) === location.sector.x && j === location.sector.y ) ? 
                    ' td__galaxyCell--current' : '';
                let clickySector = clicky ? ' td__galaxyCell--clicky' : '';

                cells.push(
                    <td onClick={this.handleClick} className={'td__galaxyCell' + currentSector + clickySector} key={'galaxyCell_' + j}>
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
            <Panel panelName="galaxy" dim={dim} double={true} xs={xs ? xs : "12"} md={md ? md : "12"} lg={lg ? lg :"6"}>
                <h2>Chart of Known Galaxy</h2>

                <table className="table__galaxy">
                    <tbody>
                        {galaxyRows}
                    </tbody>
                </table>

                <p>{shipName} in quad {sector.x}-{sector.y}</p>
            </Panel>
        );
    }
}

export default Galaxy;
