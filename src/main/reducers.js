import { combineReducers } from 'redux'
import SearchReducer from '../search-input/search-reducer'
import TrackReducer from '../search-result-item/track-reducer'

const rootReducer = combineReducers({
  search: SearchReducer,
  currentTrack: TrackReducer,
})

export default rootReducer
