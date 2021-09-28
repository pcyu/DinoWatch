const DINO_QUERY = `
  {
    ethereum(network: matic) {
      dexTrades(
        baseCurrency: {is: "0xAa9654BECca45B5BDFA5ac646c939C62b527D394"}
        quoteCurrency: {is: "0x2791bca1f2de4661ed88a30c99a7a9449aa84174"}
        options: {desc: ["block.height", "transaction.index"], limit: 1}
      ) {
        block {
          height
          timestamp {
            time(format: "%Y-%m-%d %H:%M:%S")
          }
        }
        transaction {
          index
        }
        baseCurrency {
          symbol
          name
        }
        quoteCurrency {
          symbol
          name
        }
        quotePrice
      }
    }
  }
`

// const DG_QUERY = `
//   {
//     ethereum(network: matic) {
//       dexTrades(
//         baseCurrency: {is: "0x2a93172c8dccbfbc60a39d56183b7279a2f647b4"}
//         quoteCurrency: {is: "0x2791bca1f2de4661ed88a30c99a7a9449aa84174"}
//         options: {desc: ["block.height", "transaction.index"], limit: 1}
//       ) {
//         block {
//           height
//           timestamp {
//             time(format: "%Y-%m-%d %H:%M:%S")
//           }
//         }
//         transaction {
//           index
//         }
//         baseCurrency {
//           symbol
//           name
//         }
//         quoteCurrency {
//           symbol
//           name
//         }
//         quotePrice
//       }
//     }
//   }
// `

// const WORK_QUERY = `
//   {
//     ethereum(network: matic) {
//       dexTrades(
//         baseCurrency: {is: "0x6002410dda2fb88b4d0dc3c1d562f7761191ea80"}
//         quoteCurrency: {is: "0x2791bca1f2de4661ed88a30c99a7a9449aa84174"}
//         options: {desc: ["block.height", "transaction.index"], limit: 1}
//       ) {
//         block {
//           height
//           timestamp {
//             time(format: "%Y-%m-%d %H:%M:%S")
//           }
//         }
//         transaction {
//           index
//         }
//         baseCurrency {
//           symbol
//           name
//         }
//         quoteCurrency {
//           symbol
//           name
//         }
//         quotePrice
//       }
//     }
//   }
// `

  export default DINO_QUERY