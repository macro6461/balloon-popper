import React, { Component } from 'react';
import '../App.css';
// import style from './App.less'

class GreenBalloon extends Component {

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
          ? <p>POPPED</p>
          : <div className="blueBalloon" onClick={this.popBalloon}>
              <div className="spanDiv">
                <span className="balloonSpanOne">+</span>
                <span className="balloonSpanTwo">10</span>
              </div>
            </div>
        }
        </div>

    );
  }
}

export default GreenBalloon;
