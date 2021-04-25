const initState = {
  isFilter: false,
  item: null
}


const filterReducer = (state = initState, action) => {
  switch (action.type) {
    case "filter_coin":
      return { ...state, item: action.payload }
    case 'filter_coin_true':
      return { ...state, isFilter: true }
    case 'filter_coin_false':
      return { ...state, isFilter: false }
    default:
      return state
  }
}
export default filterReducer