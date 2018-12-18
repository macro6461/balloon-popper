import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import style from './App.less'

import RedBalloon from './balloons/RedBalloon'
import BlueBalloon from './balloons/BlueBalloon'
import YellowBalloon from './balloons/YellowBalloon'
import GreenBalloon from './balloons/GreenBalloon'
import OrangeBalloon from './balloons/OrangeBalloon'
import IndigoBalloon from './balloons/IndigoBalloon'
import VioletBalloon from './balloons/VioletBalloon'

class App extends Component {

  state ={
    total: 0,
    start: false
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

  onStart=()=>{
    this.setState({
      start: true
    })
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

  restart = () =>{
    this.setState({
      start: false
    })
  }

  resetStart = () =>{
    this.setState({
      start: true
    })
  }

  generatePlusOrMinus = () =>{
    return Math.floor(Math.random()* 2 +1)
  }

  render() {
    var startBtnAction;
    var startBtntext;
    if (this.state.start){
      startBtnAction = this.restart
      startBtntext = 'Stop'
    } else {
      startBtnAction = this.onStart
      startBtntext = 'Start'
    }

    return (
      <div className="App">
        <h1>Balloon Boi</h1>
        <div className="parentBalloonContainer">

        <div className="startBtn" onClick={startBtnAction}>{startBtntext}</div>

        <div className="balloonTotal" onChange={this.handleOnChange()}>{this.state.total}</div>


          {this.state.start
            ? <div className="balloonContainer">
                 <RedBalloon popBalloon={this.popBalloon} generatePlusOrMinus={this.generatePlusOrMinus}/>
                 <BlueBalloon popBalloon={this.popBalloon} generatePlusOrMinus={this.generatePlusOrMinus}/>
                 <OrangeBalloon popBalloon={this.popBalloon} generatePlusOrMinus={this.generatePlusOrMinus}/>
                 <YellowBalloon popBalloon={this.popBalloon} generatePlusOrMinus={this.generatePlusOrMinus}/>
                 <GreenBalloon popBalloon={this.popBalloon} generatePlusOrMinus={this.generatePlusOrMinus}/>
                 <IndigoBalloon popBalloon={this.popBalloon} generatePlusOrMinus={this.generatePlusOrMinus}/>
                 <VioletBalloon popBalloon={this.popBalloon} generatePlusOrMinus={this.generatePlusOrMinus}/>
              </div>
            : null
          }

        </div>

      </div>
    );
  }
}

export default App;
