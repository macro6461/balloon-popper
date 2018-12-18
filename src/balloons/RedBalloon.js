import React, { Component } from 'react';
import '../App.css';
// import style from './App.less'

class RedBalloon extends Component {

  state = {
    popped: false,
    displayStyle:'block',
    visibilityDisplay: 'visible',
    operator: ''
  }

  componentDidMount = () =>{
    this.changeOp()
    setInterval(()=>{
        this.setState({
          displayStyle: 'none',
        })
        setTimeout(()=>{
        this.refresh()
        }, 100)
        console.log(this.state.visibilityDisplay)
    }, 6000)
  }

  refresh = () =>{
    this.setState({
      popped: false,
      displayStyle:'block',
      visibilityDisplay: 'visible',
      operator: ''
    }, ()=>{
      this.changeOp()
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

  render() {

    var clickerOpt = this.state.popped ? null : this.popBalloon

    return (

        <div className="innerBalloonContainer" style={{visibility: this.state.visibilityDisplay, display: this.state.displayStyle}}>

        {this.state.popped
          ? <p className="poppedRed">POPPED</p>
          : <div className="redBalloon" onClick={clickerOpt}>
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
