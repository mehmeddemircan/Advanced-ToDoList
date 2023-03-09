import { ADD_MISSION_FAIL, ADD_MISSION_REQUEST, ADD_MISSION_RESET, ADD_MISSION_SUCCESS, DELETE_MISSION_FAIL, DELETE_MISSION_REQUEST, DELETE_MISSION_RESET, DELETE_MISSION_SUCCESS, GET_ALL_MISSION_BY_GROUP_FAIL, GET_ALL_MISSION_BY_GROUP_REQUEST, GET_ALL_MISSION_BY_GROUP_RESET, GET_ALL_MISSION_BY_GROUP_SUCCESS, GET_COMPLETED_MISSIONS_FAIL, GET_COMPLETED_MISSIONS_REQUEST, GET_COMPLETED_MISSIONS_SUCCESS, GET_SINGLE_MISSION_FAIL, GET_SINGLE_MISSION_REQUEST, GET_SINGLE_MISSION_SUCCESS, GET_UNCOMPLETED_MISSIONS_FAIL, GET_UNCOMPLETED_MISSIONS_REQUEST, GET_UNCOMPLETED_MISSIONS_SUCCESS, UPDATE_MISSION_FAIL, UPDATE_MISSION_REQUEST, UPDATE_MISSION_RESET, UPDATE_MISSION_SUCCESS } from "../Constants/MissionConstants";


export const getMissionsByGroupReducer = (state = { missions: []  }, action) => {
    switch (action.type) {
      case GET_ALL_MISSION_BY_GROUP_REQUEST:
        return { ...state, loading: true };
  
      case GET_ALL_MISSION_BY_GROUP_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          missions: action.payload,
        };
  
      case GET_ALL_MISSION_BY_GROUP_FAIL:
        return { ...state, loading: false, error: action.payload };

        case GET_ALL_MISSION_BY_GROUP_RESET:
          return { ...state, loading :false , missions : [] };
      default:
        return state;
    }
  };
  
  export const getCompletedMissionsReducer = (state = { missions: []  }, action) => {
    switch (action.type) {
      case GET_COMPLETED_MISSIONS_REQUEST:
        return { ...state, loading: true };
  
      case GET_COMPLETED_MISSIONS_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          missions: action.payload,
        };
  
      case GET_COMPLETED_MISSIONS_FAIL:
        return { ...state, loading: false, error: action.payload };

        // case GET_ALL_MISSION_BY_GROUP_RESET:
        //   return { ...state, loading :false , missions : [] };
      default:
        return state;
    }
  };
  

  export const getUnCompletedMissionsReducer = (state = { missions: []  }, action) => {
    switch (action.type) {
      case GET_UNCOMPLETED_MISSIONS_REQUEST:
        return { ...state, loading: true };
  
      case GET_UNCOMPLETED_MISSIONS_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          missions: action.payload,
        };
  
      case GET_UNCOMPLETED_MISSIONS_FAIL:
        return { ...state, loading: false, error: action.payload };

        // case GET_ALL_MISSION_BY_GROUP_RESET:
        //   return { ...state, loading :false , missions : [] };
      default:
        return state;
    }
  };
  
  export const addNewMissionReducer = (state = { mission: {} }, action) => {
    switch (action.type) {
      case ADD_MISSION_REQUEST:
        return { ...state, loading: true };
  
      case ADD_MISSION_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          mission: action.payload,
        };
  
      case ADD_MISSION_FAIL:
        return { ...state, loading: false, error: action.payload };
      case ADD_MISSION_RESET:
        return { ...state, success: false };
  
      default:
        return state;
    }
  };


  
export const getMissionDetailsReducer = (state = { mission: {} , loading : false  }, action) => {
  switch (action.type) {
    case GET_SINGLE_MISSION_REQUEST:
      return { ...state, loading: true };

    case GET_SINGLE_MISSION_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        mission: action.payload,
      };

    case GET_SINGLE_MISSION_FAIL:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};



export const missionUpdateDeleteReducer = (
  state = { updated: {}, deleted: false },
  action
) => {
  switch (action.type) {
    case DELETE_MISSION_REQUEST:
    case UPDATE_MISSION_REQUEST:
      return { ...state, loading: true };

    case DELETE_MISSION_SUCCESS:
      return {
        ...state,
        loading: false,
        deleted: true,
      };

    case UPDATE_MISSION_SUCCESS:
      return {
        ...state,
        loading: false,
        updated: action.payload,
        updateSuccess: true,
      };

    case DELETE_MISSION_FAIL:
    case UPDATE_MISSION_FAIL:
      return { ...state, error: action.payload };

    case DELETE_MISSION_RESET:
      return {
        ...state,
        deleted: false,
      };
    case UPDATE_MISSION_RESET:
      return {
        ...state,
        updateSuccess: false,
      };
    default:
      return state;
  }
};
