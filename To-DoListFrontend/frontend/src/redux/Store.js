import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { authReducer } from "./Reducers/AuthReducer";
import { addNewGroupReducer, getAllGroupReducer, getSingleGroupReducer, groupUpdateDeleteReducer } from "./Reducers/GroupReducer";
import {addNewMissionReducer, getCompletedMissionsReducer, getMissionDetailsReducer, getMissionsByGroupReducer, getUnCompletedMissionsReducer, missionUpdateDeleteReducer} from "./Reducers/MissionReducer"
import { addNewStepReducer, getAllStepReducer, stepUpdateDeleteReducer } from "./Reducers/StepReducer";
import { getAllThemeReducer } from "./Reducers/ThemeReducer";
import { addNewPersonReducer, getAllPersonReducer } from "./Reducers/PersonReducer";


const rootReducer = combineReducers({
            auth : authReducer,
            getAllGroup : getAllGroupReducer,
            addNewGroup : addNewGroupReducer,
            getMissionsByGroup :  getMissionsByGroupReducer,
            getSingleGroup : getSingleGroupReducer,
            addNewMission : addNewMissionReducer,
            groupUpdateDelete : groupUpdateDeleteReducer,
            getMissionDetails : getMissionDetailsReducer,
            getAllStep : getAllStepReducer,
            addNewStep: addNewStepReducer,
            stepUpdateDelete : stepUpdateDeleteReducer,
            missionUpdateDelete: missionUpdateDeleteReducer,
            getUnCompletedMissions : getUnCompletedMissionsReducer,
            getCompletedMissions : getCompletedMissionsReducer,
            getAllTheme : getAllThemeReducer,
            getAllPerson : getAllPersonReducer,
            addNewPerson : addNewPersonReducer
 
})


const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);


export default store ; 