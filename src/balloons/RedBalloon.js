import React, { Component } from 'react';
import '../App.css';
// import style from './App.less'

class RedBalloon extends Component {

  state = {
    popped: false,
    displayStyle:'block',
    visibilityDisplay: 'visible'
  }

  componentDidMount = () =>{
    setTimeout(()=>{
      this.setState({
        displayStyle: 'none'
      })
    }, 6000)
  }

  popBalloon = (e) =>{
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
                <span className="balloonSpanOne">+</span>
                <span className="balloonSpanTwo">5</span>
              </div>
            </div>
        }
        </div>

    );
  }
}

export default RedBalloon;
