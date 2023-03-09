import { ADD_STEP_FAIL, ADD_STEP_REQUEST, ADD_STEP_RESET, ADD_STEP_SUCCESS, DELETE_STEP_FAIL, DELETE_STEP_REQUEST, DELETE_STEP_RESET, DELETE_STEP_SUCCESS, GET_ALL_STEP_FAIL, GET_ALL_STEP_REQUEST, GET_ALL_STEP_SUCCESS, UPDATE_STEP_FAIL, UPDATE_STEP_REQUEST, UPDATE_STEP_RESET, UPDATE_STEP_SUCCESS } from "../Constants/StepConstants";



export const getAllStepReducer = (state = { steps : [] }, action) => {
    switch (action.type) {
      case GET_ALL_STEP_REQUEST:
        return { ...state, loading: true };
  
      case GET_ALL_STEP_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          steps: action.payload,
        };
  
      case GET_ALL_STEP_FAIL:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
export const addNewStepReducer = (state = { step: {} }, action) => {
    switch (action.type) {
      case ADD_STEP_REQUEST:
        return { ...state, loading: true };
  
      case ADD_STEP_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          step: action.payload,
        };
  
      case ADD_STEP_FAIL:
        return { ...state, loading: false, error: action.payload };
      case ADD_STEP_RESET:
        return { ...state, success: false };
  
      default:
        return state;
    }
  };

  export const stepUpdateDeleteReducer = (
    state = { updated: {}, deleted: false },
    action
  ) => {
    switch (action.type) {
      case DELETE_STEP_REQUEST:
      case UPDATE_STEP_REQUEST:
        return { ...state, loading: true };
  
      case DELETE_STEP_SUCCESS:
        return {
          ...state,
          loading: false,
          deleted: true,
        };
  
      case UPDATE_STEP_SUCCESS:
        return {
          ...state,
          loading: false,
          updated: action.payload,
          updateSuccess: true,
        };
  
      case DELETE_STEP_FAIL:
      case UPDATE_STEP_FAIL:
        return { ...state, error: action.payload };
  
      case DELETE_STEP_RESET:
        return {
          ...state,
          deleted: false,
        };
      case UPDATE_STEP_RESET:
        return {
          ...state,
          updateSuccess: false,
        };
      default:
        return state;
    }
  };
  
