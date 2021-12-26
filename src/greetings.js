import React from 'react';
import ReactDOM from 'react-dom';

function UserGreeting(props){
    return <div>Welcome back!</div>
}

function GuestGreeting(props){
    return <div>Please Sign Up:</div>
}

function Greeting(props){
    const isLoggedIn=props.isLoggedIn
    if(isLoggedIn){
        return <UserGreeting/>
    }else{
        return <GuestGreeting/>
    }
}

function LoginButton(props){
    return(
        <button onClick={props.onClick}>
            Login
        </button>
    )
}

function LogoutButton(props){
    return(
        <button onClick={props.onClick}>
            Logout
        </button>
    )
}

class LoginControl extends React.Component{
    constructor(props){
       super(props)
       this.state={
           isLoggedIn:false
       }
    }

    handleLoginClick=()=>{
        this.setState({
            isLoggedIn:true
        })
    }

    handleLogoutClick=()=>{
        this.setState({
            isLoggedIn:false
        })
    }

    render(){
        const isLoggedIn=this.state.isLoggedIn
        let button;
        if(isLoggedIn){
        button=<LogoutButton onClick={this.handleLogoutClick}/>
        }else{
        button=<LoginButton onClick={this.handleLoginClick}/>
        }
        return(
            <div>
            <Greeting isLoggedIn={isLoggedIn}/>
            {button}
            </div>
        );
    }
}
export default LoginControl