

const initState = {
  loading: false,
  data: [],
  err: ""
}


const coinReducer = (state = initState, action) => {

  switch (action.type) {
    case "fetch_data_request":
      return { ...state, loading: true }
    case "fetch_data_success":
      return { ...state, data: [action.payload] }
    case "fetch_data_err":
      return { ...state, err: action.payload }
    default:
      return { ...state }
  }

}



export default coinReducer