import React, { Component } from 'react';
import '../App.css';
// import style from './App.less'

class RedBalloon extends Component {

  state = {
    popped: false,
    style:'block'
  }

  componentDidMount = () =>{
    setTimeout(()=>{
      this.setState({
        style: 'none'
      })
    }, 6000)
  }

  popBalloon = (e) =>{
    this.props.popBalloon(e)
    this.setState({
      popped: true
    }, ()=>{
      setTimeout(()=>{
        this.setState({
          style: 'none'
        })
      }, 200)
    })
  }

  render() {

    return (

        <div className="innerBalloonContainer" style={{display: this.state.style}}>

        {this.state.popped
          ? <p className="poppedRed">POPPED</p>
          : <div className="redBalloon" onClick={this.popBalloon}>
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
