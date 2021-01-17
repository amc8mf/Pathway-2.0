import React, { useContext } from "react";
import BoardTile from "./BoardTile";
import WallEdge from "./WallEdge"

class GameBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.createBoardRow = this.createBoardRow.bind(this);
    this.createWallButtonRow = this.createWallButtonRow.bind(this);

    this.createBoardRows = this.createBoardRows.bind(this);
  }

  createBoardRow(colVal) {
    let tiles = [];
    for (var i=1; i<=9; i++) {
      let id = colVal + i;
      if (i == 1) {
        tiles.push(<BoardTile id={id} firstCol={true} value={id} />);
      } else if (id== 'I5'){
        tiles.push(<BoardTile id={id} occupied="P1" value={id} />);
      } else if (id== 'A5'){
        tiles.push(<BoardTile id={id} occupied="P2" value={id} />);
      } else {
        tiles.push(<BoardTile id={id} value={id} />);
      }
    }
    return tiles;
  }

  createWallButtonRow(colVal) {
    let buttons = [];
    for (var j=1; j<=10; j++) {
      buttons.push(<WallEdge value={colVal +j} />);        
    }
    return buttons;
  }

  createBoardRows() {
    const colVals = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
    let rows = [];
    for (var x=0; x<=8; x++) {
      if (x == 0) {
       rows.push(<div className="board-row">{this.createWallButtonRow('AA')}</div>);       
      }
      rows.push(<div className="board-row">{this.createBoardRow(colVals[x])}</div>);
      rows.push(<div className="board-row">{this.createWallButtonRow(colVals[x])}</div>);
    }
    return rows;
  }

  render() {
    return (
      <div>
        {this.createBoardRows()}
      </div>
    )   
  }
};

export default GameBoard;