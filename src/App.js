import React, { Component } from 'react'
import './App.css';
import Card from './components/Card/Card'

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-header">React Pokedex</p>
        <Card />
      </div>
    )
  }
}

export default App;
