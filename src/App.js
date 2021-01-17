import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from "./components/Game";


function App() {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch('/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    });
  }, []);	
  return (
    <div className="App">
      <Game />
      <header className="App-header">

        ... no changes in this part ...

        <p>The current time is {currentTime}.</p>
      </header>
    </div>
  );
}

export default App;
