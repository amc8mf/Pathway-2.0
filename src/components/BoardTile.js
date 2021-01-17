import React, { useContext } from "react";
import Player from "./Player";

class BoardTile extends React.Component {
  constructor(props) {
    super(props);
  }	
  render() {
      let tmpClass = this.props.firstCol ? 'square first-col-board-tile' : 'square';
      let tileContent = this.props.value;
      if (this.props.occupied == 'P1' || this.props.occupied == 'P2') {
        tileContent =  <Player id={this.props.occupied} />
      }
	    return ( 
	      <button className={tmpClass} onClick={function() { alert('click'); }}>
	        {tileContent}
	      </button>
	    );		
  }
};

export default BoardTile;