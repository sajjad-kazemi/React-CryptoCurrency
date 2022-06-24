import Coin from '../Coin/Coin'
import React from 'react'

function CoinList({coins}) {
  return (
    <>
    {coins.map(coin =>{
      return (
        <Coin key={coin.id} name={coin.name} volume={coin.total_volume} symbol={coin.symbol} price={coin.current_price} image={coin.image} priceChange={coin.price_change_percentage_24h} marketcap={coin.market_cap}/>
        )
      })}
      </>
  )
}

export default CoinList