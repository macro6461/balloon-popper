import React, { Component } from 'react';
import './App.scss';

class TurnNumInt extends Component {

  state ={
    animateUp: false,
    animateDown: false
  }

  handleChange = () =>{
    debugger
  }

  render() {

    debugger

    return(
      <p style={this.props.style} onChange={this.handleChange}>{this.props.total}</p>
    )
  }
}

export default TurnNumInt;
