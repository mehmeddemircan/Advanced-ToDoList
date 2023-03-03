import axios from "axios";
import {
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  REGISTER_FAIL,
  REGISTER_REQUEST,
} from "../Constants/AuthConstants";
export const login = (user) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.post("https://localhost:7060/api/Auths/login", {
      ...user,
      config,
    });
    if (res.status >= 200 && res.status <= 205) {
      const { token, user } = res.data;

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      //   const { data } = await axios.post(
      //     "https://localhost:7046/api/Auth/login",
      //     user,
      //     config
      //   );

      dispatch({
        type: LOGIN_SUCCESS,
        payload: {
          token,
          user,
        },
      });
    }
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response.data.errors,
    });
  }
};
export const register = (user) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_REQUEST });



    const res = await axios.post(
      "https://localhost:7060/api/Auths/register", 
        user  
  
      
    
    );

    // Success
    if (res.status >= 200 && res.status <=205) {
      const { token, user } = res.data;
      console.log(res.data)
      

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      dispatch({
        type: LOGIN_SUCCESS,
        payload: {
          token,
          user,
        },
      });

      //   fail
    }
  } catch (error) {
    dispatch({
      type: REGISTER_FAIL,
      payload: error.message,
    });
  }
};

// it provides when you refres the page , it kept you logged in to website
export const isUserLoggedIn = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = JSON.parse(localStorage.getItem("user"));
      dispatch({
        type: LOGIN_SUCCESS,
        payload: {
          token,
          user,
        },
      });
    } else {
      dispatch({
        type: LOGIN_FAIL,
        payload: { error: "Failed to login" },
      });
    }
  };
};

// Logout
export const logout = () => async (dispatch) => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");

  dispatch({ type: LOGOUT_SUCCESS });
};
