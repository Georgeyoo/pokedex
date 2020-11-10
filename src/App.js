import React, { Component } from 'react'
import './App.css';
import Pokedex from './components/Pokedex.js'

class App extends Component {

  render() {

    return (
      <div className="App">
        <p className="App-header">React Pokedex</p>
        <Pokedex />
      </div>
    )
  }
}

export default App;
