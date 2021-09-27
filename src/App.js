import './App.css';
import DINO_QUERY from '../src/query';
import { useState, useEffect } from 'react';

function App() {
  const [ dinoQuote , setDinoQuote ] = useState('loading');

  useEffect(()=> {
    async function dinoQuery() {
      const res = await fetch('https://graphql.bitquery.io', {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({ query: DINO_QUERY})
      });
      const jsonBody = await res.json();
      setDinoQuote(jsonBody.data.ethereum.dexTrades[0].quotePrice)
    }
    dinoQuery();
  },[]);


  return (
    <div className="App">
      <h1>The quote price is: {dinoQuote}</h1>
    </div>
  );
}

export default App;
