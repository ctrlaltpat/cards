import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import StyledBoard from "./Board.js"; 

class App extends Component {

  state = {
    deck: ["2","3","4","5","6","7","8","9","10","J","Q","K","A"],
    layout: "default"
  }

  tlCorner = (e) => {
    this.setState(prevState => ({layout: "tl"}))
  }
  trCorner = (e) => {
    this.setState(prevState => ({layout: "tr"}))
  }
  blCorner = (e) => {
    this.setState(prevState => ({layout: "bl"}))
  }
  brCorner = (e) => {
    this.setState(prevState => ({layout: "br"}))
  }
  default = (e) => {
    this.setState(prevState => ({layout: "default"}))
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.tlCorner}>Top Left</button>
        <button onClick={this.trCorner}>Top Right</button>
        <button onClick={this.default}>Default</button>
        <button onClick={this.blCorner}>Bottom Left</button>
        <button onClick={this.brCorner}>Bottom Right</button>
        <StyledBoard d={this.state.deck} l={this.state.layout} />
      </div>
    );
  }
}

export default App;
