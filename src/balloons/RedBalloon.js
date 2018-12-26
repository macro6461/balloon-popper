import React, { Component } from 'react';
import '../App.scss';
// import style from './App.less'

class RedBalloon extends Component {

  state = {
    popped: false,
    displayStyle:'block',
    visibilityDisplay: 'visible',
    operator: '',
    leftStyle: 0,
    topStyle: 0,
    intervalTimer: 0,
    animationDur: 0,
    colorOpts: ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'],
    colorChoice: ''
  }

  componentDidMount = () =>{
    this.changeOp()
    this.randomLeft()

    setInterval(()=>{
      this.refresh()
    }, 10000)
  }

  setNewTimeout = () =>{
    setTimeout(()=>{
      this.setState({
        displayStyle: 'none',
      })
      console.log('interval: ' + this.state.intervalTimer)
      console.log('animationDur: ' + this.state.animationDur)
    }, this.state.intervalTimer)
  }

  refresh = () =>{
    this.setState({
      popped: false,
      displayStyle:'block',
      visibilityDisplay: 'visible',
      operator: '',
      leftStyle: 0,
      topStyle: 0,
      intervalTimer: 0,
      animationDur: 0,
    })
    this.changeOp()
    this.randomLeft()
    this.setNewTimeout()
  }

  changeOp = () =>{
    if (this.props.generatePlusOrMinus() == 1){
      this.setState({
        operator: '+'
      })
    } else {
      this.setState({
        operator: '-'
      })
    }
  }

  popBalloon = (e) =>{
    this.props.popBalloon(e)
    this.setState({
      popped: true
    }, ()=>{
      setTimeout(()=>{
        this.setState({
          visibilityStyle: 'hidden'
        })
      }, 200)
    })
  }

  chooseColor = () =>{
    return this.state.colorOpts[Math.floor(Math.random() * this.state.colorOpts.length)]
  }

  randomLeft = () =>{
      this.setState({
          leftStyle: Math.floor(Math.random() * 700) + 1,
          topStyle: Math.floor(Math.random() * -300) + -450,
          colorChoice: this.chooseColor(),
          animationDur: Math.floor(Math.random() * 10) + 10,
      }, ()=>{
        this.setState({
          intervalTimer: this.state.animationDur * 1000
        })
      })
  }

  render() {

    var balloonColorClass = 'balloon ' + this.state.colorChoice + 'Balloon'

    return (

        <div className='balloon' style={{visibility: this.state.visibilityDisplay, display: this.state.displayStyle, animation: `${this.state.animationDur}s ease balloon-rise`}}>

        {this.state.popped
          ? <p style={{position: 'absolute'}}>POPPED</p>
          : <div className={balloonColorClass} onClick={this.popBalloon} style={{left: this.state.leftStyle, top: this.state.topStyle}}>
              <div className="spanDiv">
                <span className="balloonSpanOp">{this.state.operator}</span>
                <span className="balloonSpanNum">5</span>
              </div>
            </div>
        }
        </div>

    );
  }
}

export default RedBalloon;
