import React from 'react';
import ReactDOM from 'react-dom';

class Objectiteration extends React.Component{
    constructor(){
        super()
        this.input= this.stockData = [
            {
                company: "Twitter Inc",
                ticker: "TWTR",
                stockPrice: "22.76 USD",
                timeElapsed: "5 sec ago",
              },
              {
                company: "Square Inc",
                ticker: "SQ",
                stockPrice: "45.28 USD",
                timeElapsed: "10 sec ago",
              },
              {
                company: "Shopify Inc",
                ticker: "SHOP",
                stockPrice: "341.79 USD",
                timeElapsed: "3 sec ago",
              },
              {
                company: "Sunrun Inc",
                ticker: "RUN",
                stockPrice: "9.87 USD",
                timeElapsed: "4 sec ago",
              },
              {
                company: "Adobe Inc",
                ticker: "ADBE",
                stockPrice: "300.99 USD",
                timeElapsed: "10 sec ago",
              },
              {
                company: "HubSpot Inc",
                ticker: "HUBS",
                stockPrice: "115.22 USD",
                timeElapsed: "12 sec ago",
              },
          ];
    }

  render(){
      return(
          <div>
          <h1>{this.props.name}</h1>
          <table border="1" cellSpacing="4" cellPadding="4">
              <tr><th>Company</th><th>Ticker</th><th>Stock Price</th><th>Time Elasped</th></tr>
              
          {this.input.map((obj)=>{
              return <tr><td>{obj.company}</td><td>{obj.ticker}</td><td>{obj.stockPrice}</td><td>{obj.timeElapsed}</td></tr> 
          })}
          </table>
          </div>
      )
  }

}

export default Objectiteration





