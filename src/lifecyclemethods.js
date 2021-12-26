import React, { useImperativeHandle } from 'react';
import ReactDOM from 'react-dom';
class LifeCycleMethods extends React.Component{
    constructor(){
        super()
        this.state={
            value:0
        }
    }

    componentWillMount(){
        console.log('componentWillMount() called');
    }

    handleClick=()=>{
    this.setState({value:this.state.value+1});  
        
    }

    componentDidMount(){
        console.log('componentDidMount() called');
    }

    componentWillUpdate(nextProps,nextState){
     console.log('component will update'+nextState)
    }

    componentDidUpdate(prevProps,prevState){
     console.log('component did update'+prevState)
    }

    shouldComponentUpdate(){
        return true;
    }
    
    render(){
        return(
            <div>
                <h1>Lifecycle Methods</h1>
                {this.state.value}
                <button onClick={this.handleClick}>Submit</button>
            </div>
        )
    }
}

export default LifeCycleMethods