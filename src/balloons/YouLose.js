import React, { Component } from 'react';
import '../App.scss';
// import style from './App.less'

class YouLose extends Component {

  render() {

    return(
      <div className='lostBalloonContainer'>
        <div className='lostBalloon'>YOU'RE BALLOON IS POPPED!</div>
      </div>
    )
  }
}

export default YouLose;
