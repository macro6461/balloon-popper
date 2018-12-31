import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
// import style from './App.less'

import RedBalloon from './balloons/RedBalloon'
import Timer from './Timer'
import YouLose from './balloons/YouLose'

class App extends Component {

  state ={
    total: 0,
    start: false,
    time: 0,
    finalTime: 0,
    myVar: '',
    timerClass: 'timer',
    lost: false,
  }

  startTime = () =>{
    this.setState({
      time: this.runTimer()
    })
  }

  componentDidMount = () =>{

  }

  runTimer = () =>{
      this.setState({
        time: this.state.time += 1
      })
  }

  popBalloon = (e) =>{
    var balloon
    if (e.target.classList.value === "balloonSpanOp" || e.target.classList.value === "balloonSpanNum" ){
      balloon = e.target.parentElement.parentElement
    } else if (e.target.className === "spanDiv") {
      balloon = e.target.parentElement
    } else if (e.target.classList.value === "svgBody" ){
      balloon = e.target.parentElement.parentElement.parentElement.parentElement
    }

    var points = parseInt(balloon.children[1].children[1].innerText)
    var op = balloon.children[1].children[0].innerText
    debugger
    isNaN(points) ? this.youLose() : this.calcPoints(points, op)
  }

  onStart=()=>{
    this.setState({
      start: true,
      total: 0,
      myVar: setInterval(this.runTimer, 1000),
      lost: false,
      timerClass: 'timer pulsate'
    },()=>{setTimeout(()=>{
      this.setState({
        timerClass: 'timer'
      })
    }, 2000)})
  }

  youLose = () =>{
    this.setState({
      lost: true
    })
    this.restart()
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
    var clearTimer = this.state.myVar
    this.setState({
      finalTime: this.calcTime(this.state.time),
      start: false,
      total: 0,
      time: 0,
    }, ()=>{
      clearInterval(clearTimer)
    })
  }

  resetStart = () =>{
    this.setState({
      start: true,
      lost: false
    },()=>{setTimeout(()=>{
      this.setState({
        timerClass: 'timer'
      })
    }, 5000)})

  }

  generatePlusOrMinus = () =>{
    return Math.floor(Math.random()* 2 +1)
  }

  calcTime = (data) =>{
    var sec_num = parseInt(data, 10); // don't forget the second param
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return hours+':'+minutes+':'+seconds;
  }

  render() {
    var time = this.calcTime(this.state.time)
    var startBtnAction;
    var startBtntext;
    var startClass;
    if (this.state.start){
      startBtnAction = this.restart
      startBtntext = 'Stop'
      startClass = 'startBtn red'
    } else {
      startBtnAction = this.onStart
      startBtntext = 'Start'
      startClass = 'startBtn green'
    }

    return (
      <div className="App">
        {this.state.lost
          ? <YouLose finalTime={this.state.finalTime}/>
          : null
        }
        <h1>Balloon Boi</h1>
        <Timer time={time} passedClassName={this.state.timerClass}/>
        <div style={{height: 100 + 'px'}}>
          <div className="headContainer">
            <div className={startClass} onClick={startBtnAction}>{startBtntext}</div>
            <div className="balloonTotal" onChange={this.handleOnChange()}>{this.state.total}</div>
          </div>
        </div>
        <div className="parentBalloonContainer">

           <div className="balloonContainer">
             {this.state.start
               ? <div>
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
