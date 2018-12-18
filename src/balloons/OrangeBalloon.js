import React, { Component } from 'react';
import '../App.css';
// import style from './App.less'

class OrangeBalloon extends Component {

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
          ? <p>POPPED</p>
          : <div className="orangeBalloon" onClick={this.popBalloon}>
              <div className="spanDiv">
                <span className="balloonSpanOne">{this.state.operator}</span>
                <span className="balloonSpanTwo">20</span>
              </div>
            </div>
        }
        </div>

    );
  }
}

export default OrangeBalloon;
