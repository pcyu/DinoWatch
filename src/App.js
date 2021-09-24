import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [ dinoQuote , setDinoQuote ] = useState('f');

  const DINO_QUERY = `
  {
    ethereum(network: matic) {
      dexTrades(
        baseCurrency: {is: "0xAa9654BECca45B5BDFA5ac646c939C62b527D394"}
        quoteCurrency: {is: "0x2791bca1f2de4661ed88a30c99a7a9449aa84174"}
        options: {desc: ["block.height"], limit: 1}
      ) {
        block {
          height
          timestamp {
            time(format: "%Y-%m-%d %H:%M:%S")
          }
        }
        baseCurrency {
          symbol
        }
        quoteCurrency {
          symbol
        }
        quotePrice
      }
    }
  }
  `

  useEffect(()=> {
    async function dinoQuery() {
      const res = await fetch('https://graphql.bitquery.io', {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({ query: DINO_QUERY})
      });
      const jsonBody = await res.json();
      console.log(jsonBody.data.ethereum.dexTrades[0].baseCurrency.symbol)
      setDinoQuote(jsonBody.data.ethereum.dexTrades[0].quotePrice)
    }
    dinoQuery();
  },);


  return (
    <div className="App">
      <h1>The quote price is: {dinoQuote}</h1>
    </div>
  );
}

export default App;
