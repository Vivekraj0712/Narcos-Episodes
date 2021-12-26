import React from 'react';
import ReactDOM from 'react-dom';
class ClassBasedComponent extends React.Component{
    constructor(){
        super();
        this.data="Youdev"
        this.state={
            value:"Youdev1"
        }
    }
    myFunc=()=>{
    this.state.value="youodev acedamy"
    //this.setState({value:"youdev 42"})
    }
    render(){
        return(
            <div>
            <div>Hello ViVek!! {this.state.value}</div>
            <button onClick={this.myFunc} id="p">Submit</button>
            </div>
        )
    }
}

export default ClassBasedComponent