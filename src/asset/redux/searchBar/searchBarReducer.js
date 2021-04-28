const initState = {
  searchList: []
}

const searchBarReducer = (state = initState, action) => {
  if (action.type === "SEARCH/LIST") {
    return { ...state, searchList: [action.payload] }
  } else {
    return state
  }
}

export default searchBarReducer