import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filter_coin, filter_coin_false, filter_coin_true } from '../asset/redux/action'

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('')
  const filterData = useSelector(store => store.filterReducer)
  const coinData = useSelector(store => store.coinReducer.data)
  const dispatch = useDispatch()

  const onChangeInput = (e) => {
    if (inputValue === '') {
      dispatch(filter_coin_false)
    }
    setInputValue(e.target.value)
    dispatch(filter_coin_true())
  }

  // const mapCoins = coinData[0].filter(coin => {
  //   // dispatch(filter_coin(coin))
  //   return coin.includes(inputValue === coin.name)
  //   //toLowerCase!
  //   // if (inputValue === coin.name) {
  //   // 
  //   // const filter = coin.filter(() => coin.name !== inputValue)
  //   // return dispatch(filter + coin(filter))
  //   // }
  // }
  // )




  return (
    <form type="submit" className='search-form'>
      <input type="text" placeholder='Find your crypto' onChange={onChangeInput} />
    </form>
  )
}


export default SearchBar