import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router'
import { Link } from 'react-router-dom'
import './App.scss';
// import style from './App.less'
import RedBalloon from './balloons/RedBalloon'
import Timer from './Timer'
import YouLose from './balloons/YouLose'
import Maths from './modes/Maths'
import Words from './modes/Words'
import Infant from './modes/Infant'
import Landing from './Landing'

import $ from 'jquery'

import balloonImg from './Artboard-1.png'

var interval = ''

class App extends Component {

  state = {
  //   total: 0,
  //   start: false,
  //   time: 0,
  //   finalTime: 0,
  //   myVar: '',
  //   timerClass: 'timer',
  //   lost: false,
  //   passedTotal: 0
    linkClicked: false
  }

  handleLinkClick = () =>{
    setTimeout(()=>{
      if (window.location.href.indexOf("Infant") > -1 || window.location.href.indexOf("Maths") > -1 || window.location.href.indexOf("Words") > -1){
        this.setState({
          linkClicked: true
        })
      } else {
        this.setState({
          linkClicked: false
        })
      }
    }, 0)

  }


  //
  // startTime = () =>{
  //   this.setState({
  //     time: this.runTimer()
  //   })
  // }
  //
  boomBoom = (actualX,actualY, e) => {
    var targ

    if (e.target.classList.value == 'spanDiv'){
      targ = e.target.parentElement.parentElement
    } else if (e.target.classList.value.includes('Balloon')){
      targ = e.target.parentElement
    } else if (e.target.classList.value.includes('balSpan')){
      targ = e.target.parentElement.parentElement.parentElement
    }

    var canvas = document.querySelector('canvas');
    var ctx = canvas.getContext('2d');

    if (targ){
         // Shim with setTimeout fallback

      	var laX = actualX;
      	var laY = actualY;
      	var W = canvas.width = window.innerWidth;
      	var H = canvas.height = window.innerHeight;
      	// Let's set our gravity
      	var gravity = 2.3;

      	// Time to write a neat constructor for our
      	// particles.
      	// Lets initialize a random color to use for
      	// our particles and also define the particle
      	// count.
      	var particle_count = 30
      	var particles = [];

        var colors = [`${targ.children[0].classList[1].split("B")[0]}`];
      	var random_color = colors[Math.floor(Math.random() * colors.length)];

          // event.target.style.display = 'none'

      	function Particle() {
      		this.radius = parseInt(Math.random() * 10);
      		this.x = actualX;
      		this.y = actualY;

      		this.color = random_color;

      		// Random Initial Velocities
      		this.vx = Math.random() * 20 - 10;
      		// vy should be negative initially
      		// then only will it move upwards first
      		// and then later come downwards when our
      		// gravity is added to it.
      		this.vy = Math.random() * -20 - 1;

      		// Finally, the function to draw
      		// our particle
      		this.draw = function() {
      			ctx.fillStyle = this.color;

      			ctx.beginPath();

      			// ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
            ctx.rect(this.x, this.y, Math.floor(Math.random() * 10) + 1  , Math.floor(Math.random() * 10) + 1  );
      			ctx.fill();

      			ctx.closePath();
      		};
      	}

      	// Now lets quickly create our particle
      	// objects and store them in particles array
      	for (var i = 0; i < particle_count; i++) {
      		var particle = new Particle();
      		particles.push(particle);
      	}

      	// Finally, writing down the code to animate!
      	(function renderFrame() {
      		requestAnimationFrame(renderFrame);

      		// Clearing screen to prevent trails
      		ctx.clearRect(0, 0, W, H);

      		particles.forEach(function(particle) {

      			// The particles simply go upwards
      			// It MUST come down, so lets apply gravity
      			particle.vy += gravity;

      			// Adding velocity to x and y axis
      			particle.x += particle.vx;
      			particle.y += particle.vy;

      			// We're almost done! All we need to do now
      			// is to reposition the particles as soon
      			// as they move off the canvas.
      			// We'll also need to re-set the velocities

      			particle.draw();

      		});
      	}());
    }

  };

  componentWillMount = () =>{
    var boomBoom = this.boomBoom
    $(document).ready(function(){
       $('body').click(function(e){
          boomBoom(e.pageX , e.pageY, e);
       });
    })

    window.requestAnimationFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||function(f){window.setTimeout(f,1e3/60)}}();
    this.handleLinkClick()
  }
  //
  // randomInt = (min, max) => {
  //   return Math.floor(Math.random() * (max - min + 1) + min);
  // }
  //
  // runTimer = () =>{
  //     this.setState({
  //       time: this.state.time += 1
  //     })
  // }
  //
  // popBalloon = (e) =>{
  //   var balloon
  //
  //   if (e.target.className === "balSpanOp" || e.target.className === "balSpanNum" ){
  //     balloon = e.target.parentElement.parentElement
  //   } else if (e.target.className === "spanDiv") {
  //     balloon = e.target.parentElement
  //   } else if (e.target.tagName === 'svg'){
  //     balloon = e.target.parentElement.parentElement.parentElement
  //   } else {
  //     balloon = e.target
  //   }
  //
  //   if (balloon == undefined || balloon.children === undefined || balloon.children[0] === undefined || balloon.children[0].children === undefined || balloon.classList.value.includes('black')){
  //     this.youLose()
  //   } else {
  //     var points = parseInt(balloon.children[0].children[1].innerText)
  //     var op = balloon.children[0].children[0].innerText
  //     this.calcPoints(points, op)
  //   }
  //
  // }
  //
  // onStart=()=>{
  //   this.setState({
  //     start: true,
  //     total: 0,
  //     myVar: setInterval(this.runTimer, 1000),
  //     lost: false,
  //     timerClass: 'timer pulsate'
  //   },()=>{setTimeout(()=>{
  //     this.setState({
  //       timerClass: 'timer'
  //     })
  //     // this.startBubbleMachine()
  //   }, 2000)})
  // }
  //
  // youLose = () =>{
  //   this.setState({
  //     lost: true,
  //     passedTotal: this.state.total
  //   })
  //   this.restart()
  // }
  //
  // calcPoints = (x, y) =>{
  //   if (y === "-" ){
  //     this.setState({
  //       total: this.state.total - x
  //     })
  //   } else {
  //     this.setState({
  //       total: this.state.total + x
  //     })
  //   }
  // }
  //
  // handleOnChange = () =>{
  //   if (this.state.total > 0){
  //
  //   }
  // }
  //
  // restart = () =>{
  //   var clearTimer = this.state.myVar
  //   this.setState({
  //     finalTime: this.calcTime(this.state.time),
  //     start: false,
  //     total: 0,
  //     time: 0,
  //   }, ()=>{
  //     clearInterval(clearTimer)
  //   })
  // }
  //
  // resetStart = () =>{
  //   this.setState({
  //     start: true,
  //     lost: false,
  //     passedTotal: 0
  //   },()=>{setTimeout(()=>{
  //     this.setState({
  //       timerClass: 'timer'
  //     })
  //   }, 5000)})
  //
  // }
  //
  // generatePlusOrMinus = () =>{
  //   return Math.floor(Math.random()* 2 +1)
  // }
  //
  // calcTime = (data) =>{
  //   var sec_num = parseInt(data, 10); // don't forget the second param
  //   var hours   = Math.floor(sec_num / 3600);
  //   var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
  //   var seconds = sec_num - (hours * 3600) - (minutes * 60);
  //
  //   if (hours   < 10) {hours   = "0"+hours;}
  //   if (minutes < 10) {minutes = "0"+minutes;}
  //   if (seconds < 10) {seconds = "0"+seconds;}
  //   return hours+':'+minutes+':'+seconds;
  // }

  render() {
    // var time = this.calcTime(this.state.time)
    // var startBtnAction;
    // var startBtntext;
    // var startClass;
    // if (this.state.start){
    //   startBtnAction = this.restart
    //   startBtntext = 'Stop'
    //   startClass = 'startBtn red'
    // } else {
    //   startBtnAction = this.onStart
    //   startBtntext = 'Start'
    //   startClass = 'startBtn green'
    // }

    return (
      <div className="App">
        <div className="nav">
          <Link className="nav-link" to="/"><h1 style={{color: 'black'}} onClick={this.handleLinkClick}>Balloon Learning</h1></Link>
          {this.state.linkClicked
            ? <div className="nav-link-container">
                <Link className="nav-link-lower" to="/Maths"><li>Maths</li></Link>
                <Link className="nav-link-lower" to="/Words"><li>Words</li></Link>
                <Link className="nav-link-lower" to="/Infant"><li>Infant</li></Link>
              </div>
            : null
          }
        </div>

          <canvas id="output" ></canvas>

        <Route exact path="/" component={() => <Landing handleClick={()=>{this.handleLinkClick()}} />} />
        <Route exact path="/Maths" component={Maths} />
        <Route exact path="/Words" component={Words} />
        <Route exact path="/Infant" component={Infant} />
      </div>
    );
  }
}

export default App;

// // {this.state.lost
//   ? <YouLose finalTime={this.state.finalTime} finalScore={this.state.passedTotal} onClick={this.onStart}/>
//   : null
// }
// <br></br>
// <h1>Balloon Learning</h1>
// <canvas id="output" ></canvas>
