import React, { useContext } from "react";
import BoardTile from "./BoardTile";
import Wall from "./Wall"

class GameBoard extends React.Component {
  constructor(props) {
    super(props);

    this.createBoardRow = this.createBoardRow.bind(this);
    this.createBoardRows = this.createBoardRows.bind(this);
  }

  createBoardRow(colVal) {
    let tiles = [];
    for (var i=1; i<=9; i++) {
      let id = colVal + i;
      let player1Position =  'A5';
      let player2Position =  'I5';
      if (this.props.playerPositions) {
        player1Position = this.props.playerPositions[0]['Player1'] || 'A5';
        player2Position = this.props.playerPositions[1]['Player2'] || 'I5';
      }
      let firstCol = i == 1 ? true : false;
      if (id == player1Position){
        tiles.push(<BoardTile id={id} firstCol={firstCol} occupied="P1" value={id} />);
      } else if (id== player2Position){
        tiles.push(<BoardTile id={id} firstCol={firstCol} occupied="P2" value={id} />);
      } else {
        tiles.push(<BoardTile id={id} firstCol={firstCol} value={id} />);
      }
      if (i != 9) {
        tiles.push(<Wall type="vertical"/>)       
      }
    }
    return tiles;
  }

  createBoardRows() {
    const colVals = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
    let rows = [];
    for (var x=0; x<=8; x++) {
      rows.push(<div className="board-row">{this.createBoardRow(colVals[x])}</div>);
      if (x != 8) {
        rows.push(
          <div className="board-row">
            <Wall type="horizontal" />
            <Wall type="horizontal" />
            <Wall type="horizontal" />
            <Wall type="horizontal" />
            <Wall type="horizontal" />
            <Wall type="horizontal" />
            <Wall type="horizontal" />
            <Wall type="horizontal" />
            <Wall type="horizontal" />
          </div>
        );      
      }

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