import { createStore, combineReducers } from "redux";
import { reducer as reduxFormReducer } from "redux-form";
import { loadingBarReducer } from "react-redux-loading-bar";

const reducer = combineReducers({
  form: reduxFormReducer, // mounted under "form"
  loadingBar: loadingBarReducer
});
const store = (window.devToolsExtension
  ? window.devToolsExtension()(createStore)
  : createStore)(reducer);

export default store;

// const reducer = combineReducers({
//   // app reducers
// })
