import { render } from '@testing-library/react';
import React from 'react';
import ReactDom from 'react-dom';

class Episodes extends React.Component{
    constructor(){
        super()
        this.state={
            data:{}
        }
    }
    componentDidMount(){
        fetch("http://api.tvmaze.com/singlesearch/shows?q=narcos&embed=episodes")
        .then((response)=>response.json())
        .then((data)=>this.setState({data:data}))
    }


render(){
    return(
    <div>
      {Object.keys(this.state.data).length>0?
      <span>
          <table border="1">
              <tr><th>ID</th><th>URL</th><th>Name</th><th>Season</th><th>Number</th><th>Type</th><th>Airdate</th><th>Airtime</th><th>Airstamp</th><th>Runtime</th><th>Rating</th><th>Image</th><th>Summary</th><th>Link</th></tr>
          {this.state.data._embedded.episodes.map((obj,i)=>{
           return <tr><td>{obj.id}</td><td >{obj.url}</td><td>{obj.name}</td><td>{obj.season}</td><td>{obj.number}</td><td>{obj.type}</td><td>{obj.airdate}</td><td>{obj.airtime}</td><td>{obj.airstamp}</td><td>{obj.runtime}</td><td>{obj.rating.average}</td><td>{obj.image.original}</td><td>{obj.summary}</td><td>{obj._links.self.href}</td></tr>
      })}</table></span>:<span></span>}

    </div>
    )
}
}


export default Episodes