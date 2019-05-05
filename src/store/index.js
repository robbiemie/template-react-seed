import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) // debug https://github.com/zalmoxisus/redux-devtools-extension#11-basic-store

export default store