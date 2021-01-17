import React, { useContext } from "react";

class BoardTile extends React.Component {
	render() {
    return (
      <button className="wall-button" onClick={function() { alert('click'); }}>
        {this.props.value}
      </button>
    );		
  }
};

export default BoardTile;