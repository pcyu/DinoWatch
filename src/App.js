import './App.css';
import { DINO_QUERY, DINOX_QUERY, DG_QUERY, WORK_QUERY } from '../src/query';
import { useState, useEffect } from 'react';

function App() {

  const prevDino = JSON.parse(localStorage.getItem('price'))
  const [ quoteDino , setDinoQuote ] = useState({
    prevPrice: prevDino || 'loading',
    price: 'loading',
    symbol: 'loading'
  });
  const [ quoteDinox , setDinoxQuote ] = useState({
    price: 'loading',
    symbol: 'loading'
  });
  const [ quoteDG , setDGQuote ] = useState({
    price: 'loading',
    symbol: 'loading'
  });
  const [ quoteWork , setWorkQuote ] = useState({
    price: 'loading',
    symbol: 'loading'
  });

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
      setDinoQuote({prevPrice: prevDino, price: jsonBody.data.ethereum.dexTrades[0].quotePrice, symbol: jsonBody.data.ethereum.dexTrades[0].baseCurrency.symbol})
      localStorage.setItem('price', jsonBody.data.ethereum.dexTrades[0].quotePrice)
    }
    async function queryDinox() {
      const res = await fetch('https://graphql.bitquery.io', {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "X-API-KEY": "BQYNuy1t9n3tG1RZf1gOpJTGI7RjRGTp"
        },
        body: JSON.stringify({ query: DINOX_QUERY})
      });
      const jsonBody = await res.json();
      setDinoxQuote({price: jsonBody.data.ethereum.dexTrades[0].quotePrice, symbol: jsonBody.data.ethereum.dexTrades[0].baseCurrency.symbol})
    }
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
      setDGQuote({price: jsonBody.data.ethereum.dexTrades[0].quotePrice, symbol: jsonBody.data.ethereum.dexTrades[0].baseCurrency.symbol})
    }
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
      setWorkQuote({price: jsonBody.data.ethereum.dexTrades[0].quotePrice, symbol: jsonBody.data.ethereum.dexTrades[0].baseCurrency.symbol})
    }
    queryDino();
    queryDinox();
    queryDG();
    queryWork();
  },[]);

  return (
    <div className="App">
      <h1>The {quoteDino.symbol} price is: {quoteDino.price}</h1>
      <h2>The previous {quoteDino.symbol} price last compounded was: {quoteDino.prevPrice}</h2>
      <h1>The {quoteDinox.symbol} price is: {quoteDinox.price}</h1>
      <h1>The {quoteDG.symbol} price is: {quoteDG.price}</h1>
      <h1>The {quoteWork.symbol} price is: {quoteWork.price}</h1>
    </div>
  );
}

export default App;
