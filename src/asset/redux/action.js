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