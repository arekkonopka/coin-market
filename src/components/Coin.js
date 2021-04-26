


const Coin = ({ key, name, symbol, currentPrice, marketCap, price_change_percentage_24h }) => {

  return (
    <div className='coin'>
      <div className="desktop">
        <p>{name}</p>
        <p>{symbol}</p>
        <p>{currentPrice} $</p>
        <p>{marketCap} $</p>
        <p style={{ color: price_change_percentage_24h > 0 ? "green" : "red" }}>{(price_change_percentage_24h * 10).toFixed(2)} %</p>
      </div>
      <div className="mobile">
        <p>{name}</p>
        <p>{currentPrice} $</p>
      </div>
    </div>
  )
}

export default Coin