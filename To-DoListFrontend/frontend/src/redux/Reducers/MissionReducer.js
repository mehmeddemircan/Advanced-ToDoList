import { GET_ALL_MISSION_BY_LIST_FAIL, GET_ALL_MISSION_BY_LIST_REQUEST, GET_ALL_MISSION_BY_LIST_SUCCESS } from "../Constants/MissionConstants";

export const getMissionsByListReducer = (state = { missions: [] }, action) => {
    switch (action.type) {
      case GET_ALL_MISSION_BY_LIST_REQUEST:
        return { ...state, loading: true };
  
      case GET_ALL_MISSION_BY_LIST_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          missions: action.payload,
        };
  
      case GET_ALL_MISSION_BY_LIST_FAIL:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  