import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, register as _register } from "../redux/Actions/AuthAction";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AuthForm from "../components/Form/AuthForm";

const LoginPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [register, setRegister] = useState(false);

  const navigate = useNavigate();

  const handleClickRegister = () => {
    setRegister((prev) => !prev);
  };

  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const userSignup = () => {
    const user = { firstName, lastName, email, password };

    if (firstName === "") {
      toast.error("Firstname can not be empty");
    }

    dispatch(_register(user));
  };

  const handleUserAuth = (e) => {
    e.preventDefault();
    if (register) {
      userSignup();
    }else{
      dispatch(login({ email, password }));
   
    }
  };

  useEffect(() => {
    if (auth.authenticate == true) {
      navigate("/");
    }
  }, [auth.authenticate]);

  return (
    <Fragment>
      <section class="vh-100">
        <div class="container py-5 h-100">
          <div class="row d-flex align-items-center justify-content-center h-100">
            <div class="col-md-8 col-lg-7 col-xl-6">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                class="img-fluid"
                alt="Phone image"
              />
            </div>
            <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1 ">
              <div class="d-flex justify-content-between mb-3">
                <h4>{register ? "Register " : "Login "}</h4>
                <button
                  className="btn btn-md btn-outline-primary "
                  onClick={handleClickRegister}
                >
                  {register ? "Login" : "Register"}
                </button>
              </div>
                <AuthForm 
                  register={register}
                  firstName={firstName}
                  lastName={lastName}
                  email={email}
                  password={password}
                  setEmail={setEmail}
                  setPassword={setPassword}
                  setFirstName={setFirstName}
                  setLastName={setLastName}
                  handleUserAuth={handleUserAuth}
                />
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default LoginPage;
