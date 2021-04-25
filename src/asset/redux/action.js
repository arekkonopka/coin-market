// Fetch

export const fetch_data_request = () => {

  return { type: "fetch_data_request" }
}
export const fetch_data_success = (data) => {

  return { type: "fetch_data_success", payload: data }
}
export const fetch_data_err = (err) => {

  return { type: "fetch_data_err", payload: err }
}


// Filter

export const filter_coin = (coins) => {
  return { type: 'filter_coin', payload: coins }
}
export const filter_coin_true = () => {
  return { type: 'filter_coin_true' }
}
export const filter_coin_false = () => {
  return { type: 'filter_coin_false' }
}

