import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { getMissionsByListReducer } from "./Reducers/MissionReducer";
import { authReducer } from "./Reducers/AuthReducer";

const rootReducer = combineReducers({
            auth : authReducer,
            getMissionsByList :  getMissionsByListReducer
 
})


const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);


export default store ; 