import axios from "axios";
import { ADD_PERSON_FAIL, ADD_PERSON_REQUEST, ADD_PERSON_SUCCESS, GET_ALL_PERSON_FAIL, GET_ALL_PERSON_REQUEST, GET_ALL_PERSON_SUCCESS } from "../Constants/PersonConstants";


export const AllPerson = (userId) => async (dispatch) => {
    try {
      dispatch({
        type: GET_ALL_PERSON_REQUEST,
      });
  
      const res = await axios.get(
        `https://localhost:7060/api/People/User/${userId}/Get-All-People`
      );
        const {data,success,message} = res.data
      dispatch({
        type: GET_ALL_PERSON_SUCCESS,
        payload: {
            data,
            success ,
            message
        }
      });
    } catch (error) {
      dispatch({
        type: GET_ALL_PERSON_FAIL,
        error: error.response,
      });
    }
  };
  

  export const AddPerson = (person) => async (dispatch) => {
    try {
      dispatch({
        type: ADD_PERSON_REQUEST,
      });
  
      const { data } = await axios.post(
        "https://localhost:7060/api/People/Add-Person",
        person
      );
  
      dispatch({
        type: ADD_PERSON_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ADD_PERSON_FAIL,
        payload: error.message,
      });
    }
  };