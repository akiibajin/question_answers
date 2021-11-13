import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";


import rootReducer from "../Reducer/index"


const reducer = combineReducers({
    user: rootReducer.userReducer,
    questions: rootReducer.questionReducer,
    answers: rootReducer.answerReducer
}); 

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
