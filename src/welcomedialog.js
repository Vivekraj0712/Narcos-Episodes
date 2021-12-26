import React from 'react';
import ReactDOM from 'react-dom';

function Fancyborder(props){
    return(
    <div>
        <h4>This is sample divs</h4>
    {props.children}
    {props.sirname}
    </div>)
}


function Dialog(props){
    return(
        <Fancyborder sirname="Raj">
           <div>{props.name}</div>
           <div>{props.name}</div>
           <div>{props.name}</div>
           <div>{props.name}</div>
           {props.children}
        </Fancyborder>
        
    )
}



class WelcomeDialog extends React.Component{
    constructor(props){
        super(props)
        this.state={
            login:""
        }
        //this.handleLogin=this.handleLogin.bind(this)
        //this.handleSignup=this.handleSignup.bind(this)
    }
    render(){
        return(
            <Dialog name="Vivek">
                <input type="text" value={this.state.login} onChange={this.handleLogin}/>
                <button onClick={this.handleSignup}>
                    Sign Up
                </button>
            </Dialog>
        )
    }

    handleLogin=(e)=>{
        this.setState({login:e.target.value})
    }
    handleSignup=()=>{
        alert(`Welcome ${this.state.login}`)
    }
}




export default WelcomeDialog


