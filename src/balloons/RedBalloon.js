import React, { Component } from 'react';
import '../App.scss';
// import style from './App.less'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSkull } from '@fortawesome/free-solid-svg-icons'
import balloonImg from '../balloon-img-1.svg'

import $ from "jquery";

library.add(faSkull)

class RedBalloon extends Component {

  state = {
    popped: false,
    displayStyle:'block',
    visibilityDisplay: 'visible',
    operator: '',
    leftStyle: 0,
    topStyle: 0,
    timer: 0,
    animationDur: 0,
    numberOpts: [5, 10, 15, 20, 25, 50],
    colorOpts: ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'],
    colorChoice: '',
    numChoice: 0
  }

  checkSvgJQuery = () =>{
    $('img.svg').each(function(){
            var $img = $(this);
            var imgID = $img.attr('id');
            var imgClass = $img.attr('class');
            var imgURL = $img.attr('src');

            $.get(imgURL, function(data) {
                // Get the SVG tag, ignore the rest
                var $svg = $(data).find('svg');

                // Add replaced image's ID to the new SVG
                if(typeof imgID !== 'undefined') {
                    $svg = $svg.attr('id', imgID);
                }
                // Add replaced image's classes to the new SVG
                if(typeof imgClass !== 'undefined') {
                    $svg = $svg.attr('class', imgClass+' replaced-svg');
                }

                // Remove any invalid XML tags as per http://validator.w3.org
                $svg = $svg.removeAttr('xmlns:a');

                // Replace image with new SVG
                $img.replaceWith($svg);

            }, 'xml');

        });
  }

  componentDidMount = () =>{
    this.checkSvgJQuery()
    this.changeOp()
    this.randomLeft()
    setTimeout(()=>{
      setInterval(()=>{
          this.setState({
            displayStyle: 'none',
          }, ()=>{this.refresh()})
      }, 20000 )
    }, 1100)
  }

  refresh = () =>{
    this.setState({
      popped: false,
      displayStyle: 'none',
      visibilityDisplay: 'visible',
      operator: '',
      leftStyle: 0,
      topStyle: 0,
      timer: 0,
      animationDur: 0,
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

  changeNum = () =>{
    return this.state.numberOpts[Math.floor(Math.random() * this.state.numberOpts.length)]
  }

  chooseColor = () =>{
    var num = Math.floor(Math.random() * 10) + 1
    if (num === 2){
      return 'black'
    } else {
      return this.state.colorOpts[Math.floor(Math.random() * this.state.colorOpts.length)]
    }
  }

  randomLeft = () =>{
    var val = Math.floor(Math.random() * 10) + 10

      this.setState({
          leftStyle: Math.floor(Math.random() * 700) + 1,
          topStyle: Math.floor(Math.random() * -300) + -450,
          colorChoice: this.chooseColor(),
          timer: val * 1000,
          animationDur: val,
          numChoice: this.changeNum()
      })
      setTimeout(()=>{this.setState({
        displayStyle: 'block'
      })}, 500)
  }

  render() {

    var balloonColorClass = 'balloon ' + this.state.colorChoice + 'Balloon'

    var spanDivOpContent

    var spanDivNumContent

    if (this.state.colorChoice == 'black'){
      spanDivOpContent = ''
      spanDivNumContent = <FontAwesomeIcon icon="skull" />
    } else {
      spanDivOpContent = this.state.operator
      spanDivNumContent = this.state.numChoice
    }

    return (

        // <div className='balloon' style={{visibility: this.state.visibilityDisplay, display: this.state.displayStyle, animation: `${this.state.animationDur}s ease balloon-rise`}}>
        // {this.state.popped
        //   ? <p style={{position: 'absolute'}}></p>
        //   : <div className={balloonColorClass} onClick={this.popBalloon} style={{left: this.state.leftStyle}}>
        //       <div className="spanDiv">
        //         <span className="balloonSpanOp">{spanDivOpContent}</span>
        //         <span className="balloonSpanNum">{spanDivNumContent}</span>
        //       </div>
        //     </div>
        // }
        // </div>
        <div className='balloon' style={{visibility: this.state.visibilityDisplay, display: this.state.displayStyle, animation: `${this.state.animationDur}s ease balloon-rise`}}>
          <div className="svgBalloonContainer" style={{left: this.state.leftStyle}}>
              <svg width="640" height="480" xmlns="http://www.w3.org/2000/svg" className="smallSvg" viewBox="0 0 640 480" onClick={this.popBalloon}>
               <title>yellow balloon</title>
               <g>
                <title>Layer 1</title>
                <g id="g13540" className="redBalloon">
                 <path className="balloonString" d="m291.313782,301.924164c-2.704681,31.348297 -19.556091,64.950775 -3.223938,95.172699c21.351898,32.589264 69.063843,36.458282 85.49823,73.722931c13.752777,23.799164 11.53302,51.690277 8.98288,77.901337c-1.787201,20.53894 1.543884,42.825867 16.851532,57.900757c9.052643,12.180847 17.175507,26.574036 15.821259,42.306091" id="path2211" strokeMiterlimit="2" strokeLinejoin="round" strokeLinecap="round" strokeWidth="1.75" stroke="#000000" fillRule="evenodd" fillOpacity="0.75" fill="none"/>
                 <path stroke="#000000" d="m284.600922,278.429138c1.608337,5.053345 -0.203583,10.424377 -2.653473,14.883118c-0.934479,2.080109 -2.501862,3.742493 -3.756134,5.611816c-0.936432,1.366974 -1.465454,3.757477 0.449432,4.563751c1.39151,0.506866 2.939453,0.41922 4.410797,0.411621c3.905945,-0.251343 7.878052,-2.07431 11.762817,-0.73587c3.055084,1.349976 6.041046,3.38324 9.532654,3.142822c2.283356,-0.025696 3.590515,-2.728638 2.15213,-4.528412c-1.290039,-2.134033 -3.230713,-3.904663 -3.854401,-6.404663c-2.152405,-5.636139 -1.59726,-11.871338 -0.177185,-17.610382c0.213379,-2.315796 -2.59903,-3.593262 -4.536438,-2.819794c-3.999329,1.0401 -7.367737,4.381897 -11.732361,3.914093c-0.549103,-0.066772 -1.089966,-0.208008 -1.597839,-0.428101z" id="path1553" strokeWidth="5" fillRule="evenodd" fill={this.state.colorChoice}/>
                 <path stroke="#000000" d="m411.400085,149.02623c0.021606,-72.885857 -50.798157,-131.984859 -113.495056,-131.984859c-62.696899,0 -113.516708,59.099033 -113.495056,131.984875c-0.021637,72.885864 50.798157,131.984863 113.495056,131.984863c62.696899,0 113.516693,-59.099045 113.495056,-131.984909l0,0.000031z" id="path930" strokeWidth="5" fillRule="evenodd" fill={this.state.colorChoice} className="svgBody"/>
                </g>

               </g>
              </svg>
              <div className="spanDiv" onClick={this.popBalloon}>
                <span className="balloonSpanOp">{spanDivOpContent}</span>
                <span className="balloonSpanNum">{spanDivNumContent}</span>
              </div>
            </div>
      </div>

    );
  }
}

export default RedBalloon;
