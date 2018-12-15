import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import style from './App.less'

import RedBalloon from './balloons/RedBalloon'
import BlueBalloon from './balloons/BlueBalloon'

class App extends Component {

  state ={
    total: 0
  }

  popBalloon = (e) =>{

    var balloon
    if (e.target.tagName === "SPAN"){
      balloon = e.target.parentElement
    } else {
      balloon = e.target
    }
    var points = parseInt(balloon.children[0].children[1].innerText)
    var op = balloon.children[0].children[0].innerText

    this.calcPoints(points, op)

  }

  calcPoints = (x, y) =>{
    if (y === "-" ){
      this.setState({
        total: this.state.total - x
      })
    } else {
      this.setState({
        total: this.state.total + x
      })
    }
  }

  handleOnChange = () =>{
    if (this.state.total > 0){
      
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Balloon Popper</h1>
        <div className="parentBalloonContainer">

        <div className="balloonTotal" onChange={this.handleOnChange()}>{this.state.total}</div>

          <div className="balloonContainer">

            <RedBalloon popBalloon={this.popBalloon}/>
            <BlueBalloon popBalloon={this.popBalloon}/>
          </div>

        </div>

      </div>
    );
  }
}

export default App;
