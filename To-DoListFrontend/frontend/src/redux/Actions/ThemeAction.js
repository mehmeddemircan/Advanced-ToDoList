
import axios from 'axios'
import { GET_ALL_THEME_FAIL, GET_ALL_THEME_REQUEST, GET_ALL_THEME_SUCCESS } from "../Constants/ThemeConstants";

export const AllTheme = () => async (dispatch) => {
    try {
      dispatch({
        type: GET_ALL_THEME_REQUEST,
      });
  
      const { data } = await axios.get(
        "https://localhost:7060/api/Themes/Get-All-Theme"
      );
  
      dispatch({
        type: GET_ALL_THEME_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_ALL_THEME_FAIL,
        error: error.response,
      });
    }
  };