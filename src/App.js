import React, { Component } from 'react';
import './App.css';
import { Game } from './Game.js'

class App extends Component {
  render() {
    return (
      <div className="App">
       <Game squares={Array(9).fill(null)}/>
      </div>
    );
  }
}

export default App;
