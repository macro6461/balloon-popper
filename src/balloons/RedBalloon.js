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
    if (this.props.generatePlusOrMinus() == 1){
      this.setState({
        operator: '+'
      })
    } else {
      this.setState({
        operator: '-'
      })
    }
    // setTimeout(()=>{
    //   this.setState({
    //     displayStyle: 'none'
    //   })
    // }, 6000)
  }

  popBalloon = (e) =>{
    console.log(this)
    debugger
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

        <div className="innerBalloonContainer" style={{visibility: this.state.visibilityStyle, display: this.state.displayStyle}}>

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
