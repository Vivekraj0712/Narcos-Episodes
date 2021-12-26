import React from 'react';
import ReactDOM from 'react-dom';

class ControlledComponents extends React.Component{
    constructor(props){
        super(props)
        this.state={value:'',
             isClicked:false}
        this.handleChange=this.handleChange.bind(this)
        this.handleClick=this.handleClick.bind(this)
    }

    handleChange(e){
      this.setState({value:e.target.value})
    }

    handleClick(e){
        //document.getElementById("p").textContent=this.state.value
        this.setState({isClicked:true})

    }

    

    render(){
        var spanTag="";
        return(
            <div>
                <input value={this.state.value} onChange={this.handleChange}/>
                <textarea value={this.state.value} onChange={this.handleChange}/>
                <select value={this.state.value} onChange={this.handleChange}>
                    <option value="apple">Apple</option>
                    <option value="orange">Orange</option>
                    <option value="banana">Banana</option>
                    <option value="guava">Guava</option>
                </select>
                <button onClick={this.handleClick}>
                    Submit
                </button>

                <span>{this.state.isClicked?<div>{this.state.value}</div>:""}</span>
            </div>

        )
    }
}

class NewForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            isGoing:true,
            numberOfGuests:2
        }
    }

  handleChange=(e)=>{
      const target=e.target;
      const value=target.type==="checkbox"?target.checked:target.value
      const name=target.name
      var obj={}
      obj[name]=value
      this.setState(obj)
  }


    render(){
        return(            
        <form>
            <label>Is Going</label>
            <input type="checkbox" name="isGoing" value={this.state.isGoing} onChange={this.handleChange}/>
            {this.state.isGoing}
            <input type="text" name="numberOfGuests" value={this.state.numberOfGuests} onChange={this.handleChange}/>
            {this.state.numberOfGuests}
        </form> 
            
        )
    }

}

export default NewForm