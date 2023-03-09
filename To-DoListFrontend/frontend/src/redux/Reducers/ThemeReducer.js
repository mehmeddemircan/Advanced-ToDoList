import { GET_ALL_THEME_FAIL, GET_ALL_THEME_REQUEST, GET_ALL_THEME_SUCCESS } from "../Constants/ThemeConstants";

export const getAllThemeReducer = (state = { themes : [] }, action) => {
    switch (action.type) {
      case GET_ALL_THEME_REQUEST:
        return { ...state, loading: true };
  
      case GET_ALL_THEME_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          themes: action.payload,
        };
  
      case GET_ALL_THEME_FAIL:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  