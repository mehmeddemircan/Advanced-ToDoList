import { GET_ALL_MISSION_BY_LIST_FAIL, GET_ALL_MISSION_BY_LIST_REQUEST, GET_ALL_MISSION_BY_LIST_SUCCESS } from "../Constants/MissionConstants";
import axios from  'axios'
export const AllMissionsByList = (listId) => async (dispatch) => {
    try {
      dispatch({
        type: GET_ALL_MISSION_BY_LIST_REQUEST,
      });
  
      const { data } = await axios.get(
       `https://localhost:7297/api/Missions/get-by-group/${listId}`
      );
  
      dispatch({
        type: GET_ALL_MISSION_BY_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_ALL_MISSION_BY_LIST_FAIL,
        error: error.response,
      });
    }
  };
  