
import { Component } from "react"
import Clock  from "./Component/Clock/Clock"

import './App.css'

//constructor method
class App extends Component{
  
  state = {showClock : false,}

  onToggleClock = () =>{
    this.setState((prevState)=>{
      const {showClock} = prevState
      return {
        showClock : !showClock,
      }
    })
  }
 //to render the jsx elements

  //on clicking on the button the clock component will mounting and again clicking on the button the clock component will unmount
  render(){
    const {showClock} = this.state;
    return(
      <div className="app-container">
        <button type="button" className="toggle-button" onClick={this.onToggleClock}>
          {showClock ? 'Hide Clock' : 'Show Clock'}</button>
          {showClock && <Clock/>}
        </div>
    ) 
  }
}

export default App
