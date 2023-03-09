import { ADD_PERSON_FAIL, ADD_PERSON_REQUEST, ADD_PERSON_RESET, ADD_PERSON_SUCCESS, GET_ALL_PERSON_FAIL, GET_ALL_PERSON_REQUEST, GET_ALL_PERSON_SUCCESS } from "../Constants/PersonConstants";


export const getAllPersonReducer = (state = { people : [] , success : false, message : "" }, action) => {
    switch (action.type) {
      case GET_ALL_PERSON_REQUEST:
        return { ...state, loading: true };
  
      case GET_ALL_PERSON_SUCCESS:
        return {
          ...state,
          loading: false,
          people: action.payload.data,
          success : action.payload.success,
          message : action.payload.message
        };
  
      case GET_ALL_PERSON_FAIL:
        return { ...state, loading: false, error: action.payload.message };
      default:
        return state;
    }
  };
  

  export const addNewPersonReducer = (state = { person: {} }, action) => {
    switch (action.type) {
      case ADD_PERSON_REQUEST:
        return { ...state, loading: true };
  
      case ADD_PERSON_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          person: action.payload,
        };
  
      case ADD_PERSON_FAIL:
        return { ...state, loading: false, error: action.payload };
      case ADD_PERSON_RESET:
        return { ...state, success: false };
  
      default:
        return state;
    }
  };
