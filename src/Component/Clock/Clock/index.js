import { Component } from "react";
import './index.css'

class Clock extends Component{
    //constructor method
    constructor(props){
        super(props)
        this.state = {date : new Date()}
        
    }
    //mounting phase 
    componentDidMount(){
        this.timerId = setInterval(this.tick,1000)

    }
    componentWillUnmount(){
        clearInterval(this.timerId)
        
    }

    //updating phase

    tick = () =>{
        this.setState({
            date : new Date(),
        })
    }
    


    //in updating phase render method will be called to update the values

    //rendering the jsx elements
    render(){
        console.log("render method called");
        const {date} = this.state
        console.log(date); 
        
        return(
            <div className="clock-container">
            <h1 className="heading">Clock</h1>
            <p className="time">{date.toLocaleTimeString()}</p>
            </div>
        )
    }
}

export default Clock