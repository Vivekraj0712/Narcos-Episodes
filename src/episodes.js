import React from 'react';
import ReactDom from 'react-dom';
import Episodes from './components/episodesComponent';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';


class Narcos extends React.Component{
    constructor(){
        super()
        this.state={
            data:{},
            numberOfSeasons:[],
            seasons:"",
            seasonEpisodes:[],
            search:"",
            order:"",
            selectedSeasonEpisodes:[],
            episodeState:0
            
        }
        
    }

   

    handleChange=(e)=>{
        this.setState({selectedSeasonEpisodes:[]})
        if(e.target.value=="Select"){
            this.setState({seasons:e.target.value})
            this.setState({seasonEpisodes:this.state.data._embedded.episodes})
            return
        }
        this.setState({seasons:e.target.value})
        var arr=[];
        this.state.data._embedded.episodes.filter((obj)=>{
           if(e.target.value==obj.season){
               arr.push(obj)
           }       
         
        })
        this.setState({seasonEpisodes:arr})
        
        

    }
    
    handleInputChange=(e)=>{
     
        this.setState({search:e.target.value});
        var arr=[];
        var inputString=e.target.value;
        var regex = new RegExp( inputString , "gi");
        this.state.seasonEpisodes.filter((obj)=>{
            if((obj.name).match(regex)){
                arr.push(obj)
            }
          
         })
         if(e.target.value!="" && arr.length<=0){
             this.setState({episodeState:1})
         }else{
            this.setState({episodeState:0})
         }
         this.setState({selectedSeasonEpisodes:arr})
        
    }

    componentDidMount(){
        fetch("http://api.tvmaze.com/singlesearch/shows?q=narcos&embed=episodes")
        .then((response)=>response.json())
        .then((data)=>
        {
            this.setState({data:data})
            var arr=[]
            for(var ele of data._embedded.episodes){
                if(!arr.includes(ele.season))
                arr.push(ele.season);
            }
            this.setState({numberOfSeasons:arr})
            this.setState({seasonEpisodes:data._embedded.episodes})
        }
        )  
        .catch(()=>{console.log("error")}) 
             
    }

    handleOrder=(e)=>{
        this.setState({order:e.target.value})
        if(e.target.value=="asc"){
            this.state.seasonEpisodes.sort((a,b)=>{
                let fa=a.name.toLowerCase();
                let fb=b.name.toLowerCase();   
                        
                 if (fa < fb) {
                    return -1;
                 }
                if (fa > fb) {
                    return 1;
                 }
               return 0;
             })
             
    }else if(e.target.value=="desc"){
        this.state.seasonEpisodes.sort((a,b)=>{
            let fa=a.name.toLowerCase();
            let fb=b.name.toLowerCase();   
                    
             if (fa > fb) {
                return -1;
             }
            if (fa < fb) {
                return 1;
             }
           return 0;
         })
        }
         this.setState({selectedSeasonEpisodes:this.state.seasonEpisodes});

}
    
   
    render(){
        
       return(
        <div className="container">
        <div className="main">
        <table  width="100%" className="tab-border">
        <tr><td class="td-border">{Object.keys(this.state.data).length>0?<img src={this.state.data.image.medium}/>:<div></div>}</td>
        <td>{Object.keys(this.state.data).length?<span className="bigfont">{this.state.data.name}</span>:<span></span>}</td></tr>
       <tr>
           <td class="td-border"><b>ID:</b></td>
           {Object.keys(this.state.data).length>0?
           <td class="td-border">{this.state.data.id}</td>:<td></td>}
           </tr> 
           <tr>
           <td class="td-border"><b>URL:</b></td>
           {Object.keys(this.state.data).length>0?
           <td class="td-border">{this.state.data.url}</td>:<td></td>}
           </tr> 
           <tr>
           <td class="td-border"><b>Name:</b></td>
           {Object.keys(this.state.data).length>0?
           <td class="td-border">{this.state.data.name}</td>:<td></td>}
           </tr> 
           <tr>
           <td class="td-border"><b>Type:</b></td>
           {Object.keys(this.state.data).length>0?
           <td class="td-border">{this.state.data.type}</td>:<td></td>}
           </tr> 
           <tr>
           <td class="td-border"><b>Language:</b></td>
           {Object.keys(this.state.data).length>0?
           <td class="td-border">{this.state.data.language}</td>:<td></td>}
           </tr> 
           <tr>
           <td class="td-border"><b>Genres:</b></td>
           {Object.keys(this.state.data).length>0?
           <td class="td-border">{<ul>{this.state.data.genres.map((e,i)=>
            <li key={i}>{e}</li>
            )
        
        }</ul>}</td>:<td></td>}
           </tr>
           <tr>
           <td class="td-border"><b>Status:</b></td>
           {Object.keys(this.state.data).length>0?
           <td class="td-border">{this.state.data.status}</td>:<td></td>}
           </tr> 
           <tr>
           <td class="td-border"><b>Runtime:</b></td>
           {Object.keys(this.state.data).length>0?
           <td class="td-border">{this.state.data.runtime}</td>:<td></td>}
           </tr> 
           <tr>
           <td class="td-border"><b>Average-Runtime:</b></td>
           {Object.keys(this.state.data).length>0?
           <td class="td-border">{this.state.data.averageRuntime}</td>:<td></td>}
           </tr> 
           <tr>
           <td class="td-border"><b>Premiered:</b></td>
           {Object.keys(this.state.data).length>0?
           <td class="td-border">{this.state.data.premiered}</td>:<td></td>}
           </tr>
           <tr>
           <td class="td-border"><b>Ended:</b></td>
           {Object.keys(this.state.data).length>0?
           <td class="td-border">{this.state.data.ended}</td>:<td></td>}
           </tr>
           <tr>
           <td class="td-border"><b>Official Site:</b></td>
           {Object.keys(this.state.data).length>0?
           <td class="td-border"><a href={this.state.data.officialSite}>{this.state.data.officialSite}</a></td>:<td></td>}
           </tr> 
           <tr>
           <td class="td-border"><b>Schedule Time:</b></td>
           {Object.keys(this.state.data).length>0?
           <td class="td-border">{this.state.data.schedule.time}</td>:<td></td>}
           </tr>
           <tr>
           <td class="td-border"><b>Schedule Days:</b></td>
           {Object.keys(this.state.data).length>0?
           <td class="td-border">{this.state.data.schedule.days}</td>:<td></td>}
           </tr>
           <tr>
           <td class="td-border"><b>Rating:</b></td>
           {Object.keys(this.state.data).length>0?
           <td class="td-border">{this.state.data.rating.average}</td>:<td></td>}
           </tr>
           <tr>
           <td class="td-border"><b>Weight:</b></td>
           {Object.keys(this.state.data).length>0?
           <td class="td-border">{this.state.data.weight}</td>:<td></td>}
           </tr>
           <tr>
           <td class="td-border"><b>Network:</b></td>
           {Object.keys(this.state.data).length>0?
           <td class="td-border">{this.state.data.network}</td>:<td></td>}
           </tr>
           <tr>
           <td class="td-border"><b>Webchannel ID:</b></td>
           {Object.keys(this.state.data).length>0?
           <td class="td-border">{this.state.data.webChannel.id}</td>:<td></td>}
           </tr>
           <tr>
           <td class="td-border"><b>Webchannel Name:</b></td>
           {Object.keys(this.state.data).length>0?
           <td class="td-border">{this.state.data.webChannel.name}</td>:<td></td>}
           </tr>
           <tr>
           <td class="td-border"><b>DVD Country:</b></td>
           {Object.keys(this.state.data).length>0?
           <td class="td-border">{this.state.data.dvdCountry}</td>:<td></td>}
           </tr>
           <tr>
           <td class="td-border"><b>Webchannel Country:</b></td>
           {Object.keys(this.state.data).length>0?
           <td class="td-border">{this.state.data.webChannel.country}</td>:<td></td>}
           </tr>
           <tr>
           <td class="td-border"><b>tvrage:</b></td>
           {Object.keys(this.state.data).length>0?
           <td class="td-border">{this.state.data.externals.tvrage}</td>:<td></td>}
           </tr>
           <tr>
           <td class="td-border"><b>thetvdb:</b></td>
           {Object.keys(this.state.data).length>0?
           <td class="td-border">{this.state.data.externals.thetvdb}</td>:<td></td>}
           </tr>
           <tr>
           <td class="td-border"><b>imdb:</b></td>
           {Object.keys(this.state.data).length>0?
           <td class="td-border">{this.state.data.externals.imdb}</td>:<td></td>}
           </tr>
           <tr>
           <td class="td-border"><b>Summary:</b></td>
           {Object.keys(this.state.data).length>0?
           <td class="td-border">{ReactHtmlParser(this.state.data.summary)}</td>:<td></td>}
           </tr>
           <tr>
           <td class="td-border"><b>Updated:</b></td>
           {Object.keys(this.state.data).length>0?
           <td class="td-border">{this.state.data.updated}</td>:<td></td>}
           </tr>
           <tr>
           <td class="td-border"><b>Link:</b></td>
           {Object.keys(this.state.data).length>0?
           <td class="td-border"><a href={this.state.data._links.self.href}>{this.state.data._links.self.href}</a></td>:<td></td>}
           </tr>
           <tr>
           <td class="td-border"><b>Previous Episode Link:</b></td>
           {Object.keys(this.state.data).length>0?
           <td class="td-border"><a href={this.state.data._links.previousepisode.href}>{this.state.data._links.previousepisode.href}</a></td>:<td></td>}
           </tr>
           <tr>
           <td class="td-border"><b>Seasons:</b></td>
           {Object.keys(this.state.data).length>0?
           <td class="td-border">
               <select onChange={this.handleChange} name="season">
                   <option value="Select">Select</option>
                   {this.state.numberOfSeasons.map((e,i)=>{
                  return <option value={e}>{e}</option>
                  
                   })
                   
                   }        
               </select>
               
               
               </td>:<td>ll</td>}
               
           </tr>
           <tr>
           <td class="td-border"><b>Sort:</b></td>
           {Object.keys(this.state.data).length>0?
           <td class="td-border">
               <select onChange={this.handleOrder} name="order">
                   <option value="Sort">Sort By</option>
                   <option value="asc">Ascending</option>
                   <option value="desc">Descending</option>

                           
               </select>
               
               
               </td>:<td>ll</td>}
               
           </tr>
           <tr>
           <td class="td-border"><b>Search:</b></td>
           {Object.keys(this.state.data).length>0?
           <td class="td-border">
               <input type="text" value={this.state.search} onChange={this.handleInputChange}/>
               
               </td>:<td>ll</td>}
               
           </tr>
           <tr>
           {Object.keys(this.state.data).length>0?<td colspan="2">
               <Episodes 
               episodes={this.state.selectedSeasonEpisodes.length>0?this.state.selectedSeasonEpisodes:this.state.seasonEpisodes}
               episodeState={this.state.episodeState}
               /></td>:<td></td>}
        
               
           </tr>
        </table>
     
        </div></div>
      
       )
}
}

export default Narcos