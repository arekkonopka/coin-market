import Coin from "./Coin"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetch_data_request, fetch_data_success, fetch_data_err } from "../asset/redux/action"
import Loader from './Loader'

const CoinList = () => {
  const [isLoader, setIsLoader] = useState(true)

  const dispatch = useDispatch()
  const searchList = useSelector(store => {
    if (store.searchBarReducer.searchList[0] !== undefined) {
      return store.searchBarReducer.searchList[0][0]
    } else {
      return []
    }
  })
  // store?.searchBarReducer?.searchList[0][0] ?? []

  const fetchCoin = () => {

    dispatch(fetch_data_request())
    setIsLoader(true)
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
      .then((res) => res.json())
      .then(data => {
        dispatch(fetch_data_success(data))
        setIsLoader(false)
      }
      )
      .catch(err => dispatch(fetch_data_err(err)))
  }
  useEffect(() => {
    fetchCoin()
  }, [])

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
          isLoader ?
            <Loader />
            :

            searchList.map((item) => {
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