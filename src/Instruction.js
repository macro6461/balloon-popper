import React, { Component } from 'react';
import './App.scss';
import { Router, Route, Switch } from 'react-router'
import { Link } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import smileBal from './assets/balloon-smile.png'
import sillyBal from './assets/silly-balloon.png'
import disBal from './assets/dissapointed-balloon.png'
import scarredBal from './assets/scared-balloon.png'
import scarredTwoBal from './assets/scared-balloon-2.png'

import $ from 'jquery'

var interval = ''
class Instruction extends Component {

  removeInstruction = () =>{
    this.props.removeInstruction()
    debugger
  }

  render() {

    return(
      <div className='instructionOuterContainer'>
        <div className='instructionModalBackground'></div>
        <div className='instructionContainer'>
          <img className="balloonBuddy" src={smileBal} onClick={this.removeInstruction}/>
        </div>
      </div>
    )
  }
}

export default Instruction;
