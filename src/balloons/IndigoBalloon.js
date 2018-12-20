import React, { Component } from 'react';
import '../App.scss';
// import style from './App.less'

class IndigoBalloon extends Component {

  state = {
    popped: false,
    displayStyle:'block',
    visibilityDisplay: 'visible',
    operator: '',
    leftStyle: 0,
    topStyle: 0,
    timer: 0,
  }

  componentDidMount = () =>{
    this.changeOp()
    this.randomLeft()
    setInterval(()=>{
        this.setState({
          displayStyle: 'none',
        })
        setTimeout(()=>{
        this.refresh()
      }, this.state.timer)
        console.log(this.state.visibilityDisplay)
    }, 6000)
  }

  refresh = () =>{
    this.setState({
      popped: false,
      displayStyle:'block',
      visibilityDisplay: 'visible',
      operator: '',
      leftStyle: 0,
      topStyle: 0,
      timer: 0,
    }, ()=>{
      this.changeOp()
      this.randomLeft()
    })
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

  randomLeft = () =>{
      this.setState({
          leftStyle: Math.floor(Math.random() * 500) + 1,
          topStyle: Math.floor(Math.random() * -300) + -450,
          timer: Math.floor(Math.random() * 10) + 7
      }, ()=>{console.log(this.state.topStyle)})
  }

  render() {

    var clickerOpt = this.state.popped ? null : this.popBalloon

    var finalClass = 'innerBalloonContainer ' + this.state.classColorChoice

    return (

        <div className='balloon' style={{visibility: this.state.visibilityDisplay, display: this.state.displayStyle}}>

        {this.state.popped
          ? <p style={{position: 'absolute'}}>POPPED</p>
          : <div className="balloon indigoBalloon" onClick={this.popBalloon} style={{left: this.state.leftStyle, top: this.state.topStyle}}>
              <div className="spanDiv">
                <span className="balloonSpanOp">{this.state.operator}</span>
                <span className="balloonSpanNum">20</span>
              </div>
            </div>
        }
        </div>

    );
  }
}

export default IndigoBalloon;
