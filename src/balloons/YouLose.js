import React, { Component } from 'react';
import '../App.scss';
// import style from './App.less'

class YouLose extends Component {

  render() {

    return(
      <div className='lostBalloonContainer'>
        <div className='lostBalloon'>
        <p style={{color: 'white', display: 'block', margin: 'auto', width: 500 + 'px'}}>Your balloon is POPPED!</p>
        <br/>
        <p style={{color: 'white', display: 'block', margin: 'auto'}}>{this.props.finalTime}</p>
        </div>
      </div>
    )
  }
}

export default YouLose;
