import {
  ADD_STEP_FAIL,
  ADD_STEP_REQUEST,
  ADD_STEP_SUCCESS,
  DELETE_STEP_FAIL,
  DELETE_STEP_REQUEST,
  DELETE_STEP_SUCCESS,
  GET_ALL_STEP_FAIL,
  GET_ALL_STEP_REQUEST,
  GET_ALL_STEP_SUCCESS,
  UPDATE_STEP_FAIL,
  UPDATE_STEP_REQUEST,
  UPDATE_STEP_SUCCESS,
} from "../Constants/StepConstants";
import axios from "axios";
export const AllStep = (missionId) => async (dispatch) => {
  try {
    dispatch({
      type: GET_ALL_STEP_REQUEST,
    });

    const { data } = await axios.get(
      `https://localhost:7060/api/Steps/Missions/${missionId}/All-Step`
    );

    dispatch({
      type: GET_ALL_STEP_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_STEP_FAIL,
      error: error.response,
    });
  }
};
export const AddStep = (step) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_STEP_REQUEST,
    });

    const { data } = await axios.post(
      "https://localhost:7060/api/Steps/Add-Step",
      step
    );

    dispatch({
      type: ADD_STEP_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADD_STEP_FAIL,
      payload: error.message,
    });
  }
};

export const DeleteStep = (stepId) => async (dispatch) => {
  try {
    dispatch({
      type: DELETE_STEP_REQUEST,
    });

    const { data } = await axios.delete(
      `https://localhost:7060/api/Steps/${stepId}/Delete`
    );

    dispatch({
      type: DELETE_STEP_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_STEP_FAIL,
      payload: error.message,
    });
  }
};

export const UpdateStep = (step) => async (dispatch) => {
  try {
    dispatch({
      type: UPDATE_STEP_REQUEST,
    });

    const { data } = await axios.put(
      `https://localhost:7060/api/Steps/Update-Step`,
      step
    );

    dispatch({
      type: UPDATE_STEP_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_STEP_FAIL,
      payload: error.message,
    });
  }
};
