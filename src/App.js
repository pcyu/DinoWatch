import './App.css';
import { DINO_QUERY, DG_QUERY, WORK_QUERY } from '../src/query';
import { useState, useEffect } from 'react';

function App() {

  const [ quoteDino , setDinoQuote ] = useState({
    price: 'loading',
    symbol: 'loading'
  });
  
  const [ quoteDG , setDGQuote ] = useState('loading');
  const [ quoteWork , setWorkQuote ] = useState('loading');

  useEffect(()=> {
    async function queryDino() {
      const res = await fetch('https://graphql.bitquery.io', {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "X-API-KEY": "BQYNuy1t9n3tG1RZf1gOpJTGI7RjRGTp"
        },
        body: JSON.stringify({ query: DINO_QUERY})
      });
      const jsonBody = await res.json();
      setDinoQuote({price: jsonBody.data.ethereum.dexTrades[0].quotePrice, symbol: jsonBody.data.ethereum.dexTrades[0].quoteCurrency.symbol})
    }
    queryDino();
  },[quoteDino]);

  useEffect(()=> {
    async function queryDG() {
      const res = await fetch('https://graphql.bitquery.io', {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "X-API-KEY": "BQYNuy1t9n3tG1RZf1gOpJTGI7RjRGTp"
        },
        body: JSON.stringify({ query: DG_QUERY })
      });
      const jsonBody = await res.json();
      setDGQuote(jsonBody.data.ethereum.dexTrades[0].quotePrice)
    }
    queryDG();
  },[quoteDG]);

  useEffect(()=> {
    async function queryWork() {
      const res = await fetch('https://graphql.bitquery.io', {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "X-API-KEY": "BQYNuy1t9n3tG1RZf1gOpJTGI7RjRGTp"
        },
        body: JSON.stringify({ query: WORK_QUERY})
      });
      const jsonBody = await res.json();
      setWorkQuote(jsonBody.data.ethereum.dexTrades[0].quotePrice)
    }
    queryWork();
  },[quoteWork]);


  return (
    <div className="App">
      <h1>The {quoteDino.symbol} quote price is: {quoteDino.price}</h1>
      <h1>The quote price is: {quoteDG}</h1>
      <h1>The quote price is: {quoteWork}</h1>
    </div>
  );
}

export default App;
