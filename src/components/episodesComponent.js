import { render } from '@testing-library/react';
import React from 'react';
import ReactDom from 'react-dom';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

class Episodes extends React.Component{
    constructor(){
        super()
    
        }

render(){
    if(this.props.episodeState==0){
    return(    
      
      <table width="100%" className="tab-border">
      {this.props.episodes.map((e)=>{
          return (
         <tbody>
          <tr><td><img src={e.image.medium}/></td><td>Episode</td></tr>

          <tr><td colSpan="2" className="td-border"><b>ID:&nbsp;&nbsp;&nbsp;</b>{e.id}</td></tr>
          <tr><td colSpan="2" className="td-border"><b>URL:&nbsp;&nbsp;&nbsp;</b>{e.url}</td></tr>
          <tr><td colSpan="2" className="td-border"><b>Name:&nbsp;&nbsp;&nbsp;</b>{e.name}</td></tr>
          <tr><td colSpan="2" className="td-border"><b>Season:&nbsp;&nbsp;&nbsp;</b>{e.season}</td></tr>
          <tr><td colSpan="2" className="td-border"><b>Number:&nbsp;&nbsp;&nbsp;</b>{e.number}</td></tr>
          <tr><td colSpan="2" className="td-border"><b>Type:&nbsp;&nbsp;&nbsp;</b>{e.type}</td></tr>
          <tr><td colSpan="2" className="td-border"><b>Airtime:&nbsp;&nbsp;&nbsp;</b>{e.airtime}</td></tr>
          <tr><td colSpan="2" className="td-border"><b>Airstamp:&nbsp;&nbsp;&nbsp;</b>{e.airstamp}</td></tr>
          <tr><td colSpan="2" className="td-border"><b>Rating:&nbsp;&nbsp;&nbsp;</b>{e.rating.average}</td></tr>
          <tr><td colSpan="2" className="td-border"><b>Image:&nbsp;&nbsp;&nbsp;</b>{e.image.medium}</td></tr>
          <tr><td colSpan="2" className="td-border"><b>Summary:&nbsp;&nbsp;&nbsp;</b>{ReactHtmlParser(e.summary)}</td></tr>
          <tr><td colSpan="2" className="td-border"><b>Link:&nbsp;&nbsp;&nbsp;</b>{e._links.self.href}</td></tr>
          

          
          </tbody>
          )
      }          
      )}
  </table>

    )}else{
        return(<table><tr><td>No results found</td></tr></table>)
    }
}
}


export default Episodes