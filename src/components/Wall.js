import React, { useContext } from "react";

const Wall = (props) => {
  console.log(props)
  const tmpClass = props.type == 'vertical' ? 'wall-vertical' : 'wall-horizontal';
  return (
    <button className={tmpClass} onClick={function() { alert('click'); }}>
    </button>
  );
};

export default Wall;