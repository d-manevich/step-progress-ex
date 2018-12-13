import { combineReducers } from 'redux'
import progressReducer from 'progress/progressReducer'

export default combineReducers({
  progressState: progressReducer
})
