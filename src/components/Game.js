import React, { useState, useEffect } from "react";
import GameBoard from "./GameBoard";
import { GetGameDetails } from '../services/GetGameDetails';

function Game () {

  // constructor(props) {
    // super(props);
    // data needed for building the question the user is trying to create.
    // this.state = {
    //   playerPositions : [ {'Player1' : ''}, {'Player2' : ''}],
    //   wallPositions : [],
    //   currentTurn : '',
    //   currentWallEdges : [],
    //   moveHistory : []
    // }
    // if any input component changes, update state at the highest level.
    // this.handlePlayerMove = this.handlePlayerMove.bind(this);
    // this.handleWallEdgeClick = this.handleWallEdgeClick.bind(this);
    // this.handleCompletedTurn= this.handleCompletedTurn.bind(this);
    // this.updateHistory = this.updateHistory.bind(this);
  const [gameDetails, setGameDetails] = useState({});

  useEffect(() => {
    GetGameDetails().then(data => {
      setGameDetails(data);
    });
  }, []); 


  return (
    <div>
      <h1>Game Component</h1>
      <GameBoard wallPositions={gameDetails.wallPositions} playerPositions={gameDetails.playerPositions}/>
      <ul>
       {Object.keys(gameDetails).map(item => <li>{item +':'  + JSON.stringify(gameDetails[item])}</li>)}
      </ul>
    </div>
  );

}

export default Game;