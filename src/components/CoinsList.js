import Coin from "./Coin"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetch_data_request, fetch_data_success, fetch_data_err } from "../asset/redux/action"
import coinReducer from "../asset/redux/reducer"

const CoinList = () => {

  const dispatch = useDispatch()
  const data = useSelector(store => store?.coinReducer?.data[0] ?? [])
  const coinFilter = useSelector(store => store.filterReducer)

  const fetchCoin = () => {

    dispatch(fetch_data_request())

    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
      .then((res) => res.json())
      .then(data => dispatch(fetch_data_success(data)))
      .catch(err => dispatch(fetch_data_err(err)))

  }

  useEffect(() => {
    fetchCoin()
  }, [])

  console.log("data", data)
  return (
    <div>
      <div className='describe'>
        <h4>Name</h4>
        <h4>Symbol</h4>
        <h4>Current Price</h4>
        <h4>Market Cap</h4>
        <h4 >24h Price</h4>
      </div>
      <ol>
        {
          coinFilter.isFilter ?
            coinFilter.item
            :

            data.map((item) => {
              return (
                <li key={item.id}>
                  <Coin name={item.name} symbol={item.symbol} currentPrice={item.current_price} marketCap={item.market_cap} price_change_percentage_24h={item.price_change_percentage_24h} />
                </li>)
            })
        }
      </ol>
    </div>
  )
}

export default CoinList