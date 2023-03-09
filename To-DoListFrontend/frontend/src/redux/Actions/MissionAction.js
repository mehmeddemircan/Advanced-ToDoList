
import axios from  'axios'
import { ADD_MISSION_FAIL, ADD_MISSION_REQUEST, ADD_MISSION_SUCCESS, DELETE_MISSION_FAIL, DELETE_MISSION_REQUEST, DELETE_MISSION_SUCCESS, GET_ALL_MISSION_BY_GROUP_FAIL, GET_ALL_MISSION_BY_GROUP_REQUEST, GET_ALL_MISSION_BY_GROUP_SUCCESS, GET_COMPLETED_MISSIONS_FAIL, GET_COMPLETED_MISSIONS_REQUEST, GET_COMPLETED_MISSIONS_SUCCESS, GET_SINGLE_MISSION_FAIL, GET_SINGLE_MISSION_REQUEST, GET_SINGLE_MISSION_SUCCESS, GET_UNCOMPLETED_MISSIONS_FAIL, GET_UNCOMPLETED_MISSIONS_REQUEST, GET_UNCOMPLETED_MISSIONS_SUCCESS, UPDATE_MISSION_FAIL, UPDATE_MISSION_REQUEST, UPDATE_MISSION_SUCCESS } from '../Constants/MissionConstants';
export const AllMissionsByGroup = (groupId) => async (dispatch) => {
    try {
      dispatch({
        type: GET_ALL_MISSION_BY_GROUP_REQUEST,
      });
  
      const { data } = await axios.get(
       `https://localhost:7060/Group/${groupId}/All-Mission`
      );
  
      dispatch({
        type: GET_ALL_MISSION_BY_GROUP_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_ALL_MISSION_BY_GROUP_FAIL,
        error: error.response,
      });
    }
  };
  

  export const GetCompletedMissions = (groupId) => async (dispatch) => {
    try {
      dispatch({
        type: GET_COMPLETED_MISSIONS_REQUEST,
      });
  
      const { data } = await axios.get(
       `https://localhost:7060/api/Missions/Groups/${groupId}/Completed`
      );
  
      dispatch({
        type: GET_COMPLETED_MISSIONS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_COMPLETED_MISSIONS_FAIL,
        error: error.response,
      });
    }
  };

  export const GetUnCompletedMissions = (groupId) => async (dispatch) => {
    try {
      dispatch({
        type: GET_UNCOMPLETED_MISSIONS_REQUEST,
      });
  
      const { data } = await axios.get(
       `https://localhost:7060/api/Missions/Groups/${groupId}/unCompleted`
      );
  
      dispatch({
        type: GET_UNCOMPLETED_MISSIONS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_UNCOMPLETED_MISSIONS_FAIL,
        error: error.response,
      });
    }
  };

  export const AddMission = (mission) => async (dispatch) => {
    try {
      dispatch({
        type: ADD_MISSION_REQUEST,
      });
  
      const { data } = await axios.post(
        "https://localhost:7060/api/Missions/Add-Mission",
        mission
      );
  
      dispatch({
        type: ADD_MISSION_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ADD_MISSION_FAIL,
        payload: error.message,
      });
    }
  };

  
  export const GetMissionDetails = (groupId,missionId) => async (dispatch) => {
    try {
      dispatch({
        type: GET_SINGLE_MISSION_REQUEST,
      });
  
      const { data } = await axios.get(
        `https://localhost:7060/api/Missions/Group/${groupId}/Missions/${missionId}`
      );
  
      dispatch({
        type: GET_SINGLE_MISSION_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_SINGLE_MISSION_FAIL,
        payload: error.message,
      });
    }
  };


  export const DeleteMission = (missionId) => async (dispatch) => {
    try {
      dispatch({
        type: DELETE_MISSION_REQUEST,
      });
  
      const { data } = await axios.delete(
        `https://localhost:7060/api/Missions/Missions/${missionId}/Delete`
      );
  
      dispatch({
        type: DELETE_MISSION_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: DELETE_MISSION_FAIL,
        payload: error.message,
      });
    }
  };
  
  export const UpdateMission = (mission) => async (dispatch) => {
    try {
      dispatch({
        type: UPDATE_MISSION_REQUEST,
      });
  
      const { data } = await axios.put(
       "https://localhost:7060/api/Missions/Missions/Update",
        mission
      );
  
      dispatch({
        type: UPDATE_MISSION_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: UPDATE_MISSION_FAIL,
        payload: error.message,
      });
    }
  };
  