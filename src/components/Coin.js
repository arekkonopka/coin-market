


const Coin = ({ key, name, symbol, currentPrice, marketCap, price_change_percentage_24h }) => {

  return (
    <div className='coin'>
      <div className='coin-parameter'>
        {/* <h4>Name</h4> */}
        <p>{name}</p>
      </div>
      <div className='coin-parameter'>
        {/* <h4>Symbol</h4> */}
        <p>{symbol}</p>
      </div>
      <div className='coin-parameter'>
        {/* <h4>Current Price</h4> */}
        <p>{currentPrice} $</p>
      </div>
      <div className='coin-parameter'>
        {/* <h4>Market Cap</h4> */}
        <p>{marketCap} $</p>
      </div>
      <div className='coin-parameter'>
        {/* <h4 >24h Price</h4> */}
        <p style={{ color: price_change_percentage_24h > 0 ? "green" : "red" }}>{(price_change_percentage_24h * 10).toFixed(2)} %</p>
      </div>

    </div>
  )
}

export default Coin