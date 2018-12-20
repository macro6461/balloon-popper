import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
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

    debugger

    var balloon
    if (e.target.className === "balloonSpanOp" || e.target.className === "balloonSpanNum" ){
      balloon = e.target.parentElement.parentElement
    } else if (e.target.className === "spanDiv") {
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
      start: true,
      total: 0
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
      start: false,
      total: 0
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

    // <div style={{position: 'absolute', top: 250 + 'px', left: 40 + '%', width: 100 + 'px', height: 100 + 'px', backgroundColor: 'black'}}></div>


    return (
      <div className="App">
        <h1>Balloon Boi</h1>
        <div style={{height: 100 + 'px'}}>
          <div className="headContainer">
            <div className="startBtn" onClick={startBtnAction}>{startBtntext}</div>
            <div className="balloonTotal" onChange={this.handleOnChange()}>{this.state.total}</div>
          </div>
        </div>
        <div className="parentBalloonContainer">

           <div className="balloonContainer">
             {this.state.start
               ? <div>
               
                   <RedBalloon popBalloon={this.popBalloon} generatePlusOrMinus={this.generatePlusOrMinus}/>
                   <RedBalloon popBalloon={this.popBalloon} generatePlusOrMinus={this.generatePlusOrMinus}/>
                   <RedBalloon popBalloon={this.popBalloon} generatePlusOrMinus={this.generatePlusOrMinus}/>
                   <RedBalloon popBalloon={this.popBalloon} generatePlusOrMinus={this.generatePlusOrMinus}/>
                   <RedBalloon popBalloon={this.popBalloon} generatePlusOrMinus={this.generatePlusOrMinus}/>
                   <RedBalloon popBalloon={this.popBalloon} generatePlusOrMinus={this.generatePlusOrMinus}/>
                   <RedBalloon popBalloon={this.popBalloon} generatePlusOrMinus={this.generatePlusOrMinus}/>
                   <RedBalloon popBalloon={this.popBalloon} generatePlusOrMinus={this.generatePlusOrMinus}/>
                   <RedBalloon popBalloon={this.popBalloon} generatePlusOrMinus={this.generatePlusOrMinus}/>
                   <RedBalloon popBalloon={this.popBalloon} generatePlusOrMinus={this.generatePlusOrMinus}/>
                   <RedBalloon popBalloon={this.popBalloon} generatePlusOrMinus={this.generatePlusOrMinus}/>
                   <RedBalloon popBalloon={this.popBalloon} generatePlusOrMinus={this.generatePlusOrMinus}/>
                   <RedBalloon popBalloon={this.popBalloon} generatePlusOrMinus={this.generatePlusOrMinus}/>
                   <RedBalloon popBalloon={this.popBalloon} generatePlusOrMinus={this.generatePlusOrMinus}/>
                   <RedBalloon popBalloon={this.popBalloon} generatePlusOrMinus={this.generatePlusOrMinus}/>
                   <RedBalloon popBalloon={this.popBalloon} generatePlusOrMinus={this.generatePlusOrMinus}/>
                   <RedBalloon popBalloon={this.popBalloon} generatePlusOrMinus={this.generatePlusOrMinus}/>
                   <RedBalloon popBalloon={this.popBalloon} generatePlusOrMinus={this.generatePlusOrMinus}/>
                   <RedBalloon popBalloon={this.popBalloon} generatePlusOrMinus={this.generatePlusOrMinus}/>
                   <RedBalloon popBalloon={this.popBalloon} generatePlusOrMinus={this.generatePlusOrMinus}/>
                   <RedBalloon popBalloon={this.popBalloon} generatePlusOrMinus={this.generatePlusOrMinus}/>
                   <RedBalloon popBalloon={this.popBalloon} generatePlusOrMinus={this.generatePlusOrMinus}/>
                   <RedBalloon popBalloon={this.popBalloon} generatePlusOrMinus={this.generatePlusOrMinus}/>
                   <RedBalloon popBalloon={this.popBalloon} generatePlusOrMinus={this.generatePlusOrMinus}/>
                   <RedBalloon popBalloon={this.popBalloon} generatePlusOrMinus={this.generatePlusOrMinus}/>
                   <RedBalloon popBalloon={this.popBalloon} generatePlusOrMinus={this.generatePlusOrMinus}/>
                   <RedBalloon popBalloon={this.popBalloon} generatePlusOrMinus={this.generatePlusOrMinus}/>
                   <RedBalloon popBalloon={this.popBalloon} generatePlusOrMinus={this.generatePlusOrMinus}/>
                   <RedBalloon popBalloon={this.popBalloon} generatePlusOrMinus={this.generatePlusOrMinus}/>
                   <RedBalloon popBalloon={this.popBalloon} generatePlusOrMinus={this.generatePlusOrMinus}/>
                   <RedBalloon popBalloon={this.popBalloon} generatePlusOrMinus={this.generatePlusOrMinus}/>
                   <RedBalloon popBalloon={this.popBalloon} generatePlusOrMinus={this.generatePlusOrMinus}/>
                   <RedBalloon popBalloon={this.popBalloon} generatePlusOrMinus={this.generatePlusOrMinus}/>

                </div>
            : null
          }
          </div>

        </div>

      </div>
    );
  }
}

export default App;
