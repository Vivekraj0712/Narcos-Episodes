import React from 'react';
import ReactDom from 'react-dom';

class FetchApi extends React.Component{

    constructor(){
        super()
        this.state={
            data:[]
        }
    }

    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/todos/").
        then((response)=>response.json())
        .then((data)=>this.setState({data:data}))        
        .catch(()=>console.log("error"))
    }
    componentDidUpdate(){
        
            this.state.data.map((obj)=>{
                console.log(obj.title)
            })
        
    }


    render() {
        return (<table border="1">
            <tr><th>UerID</th><th>ID</th><th>Title</th><th>Completed</th></tr>
        {this.state.data.map((obj, index) => (
            <tr><td>{obj.userId}</td><td>{obj.id}</td><td>{obj.title}</td><td>{obj.completed}</td></tr>
        ))}
        </table>);
    }
}

export default FetchApi