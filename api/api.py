import time
from flask import Flask

app = Flask(__name__)
    # this.handlePlayerMove = this.handlePlayerMove.bind(this);
    # this.handleWallEdgeClick = this.handleWallEdgeClick.bind(this);
    # this.handleCompletedTurn= this.handleCompletedTurn.bind(this);
    # this.updateHistory = this.updateHistory.bind(this);
@app.route('/gameDetails')
def get_game_details():
    return {
      'playerPositions' : [ {'Player1' : 'B6'}, {'Player2' : 'A9'}],
      'wallPositions' : [],
      'currentTurn' : '',
      'currentWallEdges' : [],
      'moveHistory' : []
    }
