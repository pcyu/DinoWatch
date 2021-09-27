const DINO_QUERY = `
  {
    ethereum(network: matic) {
      dexTrades(
        baseCurrency: {is: "0xAa9654BECca45B5BDFA5ac646c939C62b527D394"}
        quoteCurrency: {is: "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619"}
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

  export default DINO_QUERY