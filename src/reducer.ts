import { combineReducers } from 'redux'

import searchReducer from './features/search/searchSlice'

const rootReducer = combineReducers({
  search: searchReducer,
})

export default rootReducer