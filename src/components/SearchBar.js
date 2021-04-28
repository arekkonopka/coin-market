import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { searchList } from '../asset/redux/searchBar/action'

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('')

  const dispatch = useDispatch()
  const coinList = useSelector(store => store?.coinReducer.data[0] ?? [])



  const dynamicSearch = () => {
    if (inputValue !== '') {
      const newSearchData = coinList.filter(item => item.name.toLowerCase().includes(inputValue.toLowerCase()))
      dispatch(searchList(newSearchData))
    } else {
      dispatch(searchList(coinList))
    }

  }

  useEffect(() => {
    dynamicSearch()
  })


  if (inputValue !== '') {
    const newList = coinList.filter((newItem) => newItem.name.toLowerCase() == inputValue.toLowerCase())
    dispatch(searchList(newList))
  }



  const onChangeInput = (e) => {
    setInputValue(e.target.value)

  }



  return (
    <form type="search" className='search-form'>
      <input type="text" placeholder='Find your crypto' onChange={onChangeInput} />
    </form>
  )
}


export default SearchBar