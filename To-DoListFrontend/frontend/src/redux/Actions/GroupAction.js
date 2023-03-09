import axios from "axios";
import {
  ADD_GROUP_FAIL,
  ADD_GROUP_REQUEST,
  ADD_GROUP_SUCCESS,
  DELETE_GROUP_FAIL,
  DELETE_GROUP_REQUEST,
  DELETE_GROUP_SUCCESS,
  GET_ALL_GROUP_FAIL,
  GET_ALL_GROUP_REQUEST,
  GET_ALL_GROUP_SUCCESS,
  GET_SINGLE_GROUP_FAIL,
  GET_SINGLE_GROUP_REQUEST,
  GET_SINGLE_GROUP_SUCCESS,
  UPDATE_GROUP_FAIL,
  UPDATE_GROUP_REQUEST,
  UPDATE_GROUP_SUCCESS,
} from "../Constants/GroupConstants";
export const AllGroup = (userId) => async (dispatch) => {
  try {
    dispatch({
      type: GET_ALL_GROUP_REQUEST,
    });

    const { data } = await axios.get(
      `https://localhost:7060/api/Groups/User/${userId}/Groups`
    );

    dispatch({
      type: GET_ALL_GROUP_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_GROUP_FAIL,
      error: error.response,
    });
  }
};

export const AddGroup = (group) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_GROUP_REQUEST,
    });

    const { data } = await axios.post(
      "https://localhost:7060/api/Groups/Add-Group",
      group
    );

    dispatch({
      type: ADD_GROUP_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADD_GROUP_FAIL,
      payload: error.message,
    });
  }
};

export const GetSingleGroup = (userId, groupId) => async (dispatch) => {
  try {
    dispatch({
      type: GET_SINGLE_GROUP_REQUEST,
    });

    const { data } = await axios.get(
      `https://localhost:7060/api/Groups/User/${userId}/Group/${groupId}/get-details`
    );

    dispatch({
      type: GET_SINGLE_GROUP_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_SINGLE_GROUP_FAIL,
      error: error.response,
    });
  }
};


export const DeleteGroup = (groupId) => async (dispatch) => {
  try {
    dispatch({
      type: DELETE_GROUP_REQUEST,
    });

    const { data } = await axios.delete(
      `https://localhost:7060/api/Groups/Group/${groupId}/Delete-Group`
    );

    dispatch({
      type: DELETE_GROUP_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_GROUP_FAIL,
      payload: error.message,
    });
  }
};


export const UpdateGroup = (group) => async (dispatch) => {
  try {
    dispatch({
      type: UPDATE_GROUP_REQUEST,
    });

    const { data } = await axios.put(
      "https://localhost:7060/api/Groups/Group/Update",group
    );

    dispatch({
      type: UPDATE_GROUP_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_GROUP_FAIL,
      payload: error.message,
    });
  }
};
