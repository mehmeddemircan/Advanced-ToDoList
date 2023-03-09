import { ADD_GROUP_FAIL, ADD_GROUP_REQUEST, ADD_GROUP_RESET, ADD_GROUP_SUCCESS, DELETE_GROUP_FAIL, DELETE_GROUP_REQUEST, DELETE_GROUP_RESET, DELETE_GROUP_SUCCESS, GET_ALL_GROUP_FAIL, GET_ALL_GROUP_REQUEST, GET_ALL_GROUP_SUCCESS, GET_SINGLE_GROUP_FAIL, GET_SINGLE_GROUP_REQUEST, GET_SINGLE_GROUP_SUCCESS, UPDATE_GROUP_FAIL, UPDATE_GROUP_REQUEST, UPDATE_GROUP_RESET, UPDATE_GROUP_SUCCESS } from "../Constants/GroupConstants";

export const getAllGroupReducer = (state = { groups : [] }, action) => {
    switch (action.type) {
      case GET_ALL_GROUP_REQUEST:
        return { ...state, loading: true };
  
      case GET_ALL_GROUP_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          groups: action.payload,
        };
  
      case GET_ALL_GROUP_FAIL:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  

  export const getSingleGroupReducer = (state = { group : {} }, action) => {
    switch (action.type) {
      case GET_SINGLE_GROUP_REQUEST:
        return { ...state, loading: true };
  
      case GET_SINGLE_GROUP_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          group: action.payload,
        };
  
      case GET_SINGLE_GROUP_FAIL:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  

  export const addNewGroupReducer = (state = { group: {} }, action) => {
    switch (action.type) {
      case ADD_GROUP_REQUEST:
        return { ...state, loading: true };
  
      case ADD_GROUP_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          group: action.payload,
        };
  
      case ADD_GROUP_FAIL:
        return { ...state, loading: false, error: action.payload };
      case ADD_GROUP_RESET:
        return { ...state, success: false };
  
      default:
        return state;
    }
  };


  export const groupUpdateDeleteReducer = (
    state = { updated: {}, deleted: false },
    action
  ) => {
    switch (action.type) {
      case DELETE_GROUP_REQUEST:
      case UPDATE_GROUP_REQUEST:
        return { ...state, loading: true };
  
      case DELETE_GROUP_SUCCESS:
        return {
          ...state,
          loading: false,
          deleted: true,
        };
  
      case UPDATE_GROUP_SUCCESS:
        return {
          ...state,
          loading: false,
          updated: action.payload,
          updateSuccess: true,
        };
  
      case DELETE_GROUP_FAIL:
      case UPDATE_GROUP_FAIL:
        return { ...state, error: action.payload };
  
      case DELETE_GROUP_RESET:
        return {
          ...state,
          deleted: false,
        };
      case UPDATE_GROUP_RESET:
        return {
          ...state,
          updateSuccess: false,
        };
      default:
        return state;
    }
  };
  
  