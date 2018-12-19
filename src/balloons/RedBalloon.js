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
    classColors: ['red', 'green', 'blue', 'yellow', 'orange', 'indigo', 'violet'],
    classColorChoice: ''
  }

  componentDidMount = () =>{
    this.changeOp()
    this.randomLeft()
    this.generateRandomClass()
    setInterval(()=>{
      this.generateRandomClass()
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

  generateRandomClass = () =>{
    var classColor = this.state.classColors[Math.floor(Math.random()*this.state.classColors.length)]
    return this.setState({classColorChoice: classColor})
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
            leftStyle: Math.floor(Math.random() * 500) + 1
        })
    }

  render() {

    var clickerOpt = this.state.popped ? null : this.popBalloon

    var finalClass = 'innerBalloonContainer ' + this.state.classColorChoice

    return (

        <div className='balloon' style={{visibility: this.state.visibilityDisplay, display: this.state.displayStyle}}>

        {this.state.popped
          ? <p style={{position: 'absolute'}}>POPPED</p>
          : <div className="balloon redBalloon" onClick={this.popBalloon} style={{left: this.state.leftStyle}}>
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
