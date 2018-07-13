/* eslint-disable */
import Axios from 'axios'

export const handleSearch = () => {
  return (dispatch, getState) => {
    const url = `http://ccmixter.org/api/query?f=json&limit=15&search_type=any&dataview=info_avatar&search=${getState().search.query}`
    Axios.get(url)
     .then(response => {
        dispatch({ 
          type: 'HANDLER_SEARCH', 
          payload: response.data 
        })
      })
  }
}

export const changeQuery = event => ({
  type: 'CHANGE_QUERY',
  payload: event.target.value,
})
