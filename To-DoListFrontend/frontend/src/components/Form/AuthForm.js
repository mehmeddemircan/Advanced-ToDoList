import React, { Fragment } from "react";

const AuthForm = ({
  register,

  lastName,
  setLastName,
  firstName,
  setFirstName,
  email,
  setEmail,
  password,
  setPassword,
  handleUserAuth
}) => {
  return (
    <Fragment>
      <form>
        {register && (
          <>
            <div class="form-outline mb-4">
              <input
                type="text"
                class="form-control form-control-lg"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <label class="form-label">Firstname</label>
            </div>

            <div class="form-outline mb-4">
              <input
                type="text"
                class="form-control form-control-lg"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <label class="form-label">Lastname</label>
            </div>
          </>
        )}
        {/* <!-- Email input --> */}
        <div class="form-outline mb-4">
          <input
            type="email"
            class="form-control form-control-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label class="form-label">Email address</label>
        </div>

        {/* <!-- Password input --> */}
        <div class="form-outline mb-4">
          <input
            type="password"
            class="form-control form-control-lg"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label class="form-label">Password</label>
        </div>

        <div class="d-flex justify-content-around align-items-center mb-4">
          {/* <!-- Checkbox --> */}
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="form1Example3"
              checked
            />
            <label class="form-check-label" for="form1Example3">
              {" "}
              Remember me{" "}
            </label>
          </div>
          <a href="#!">Forgot password?</a>
        </div>

        {/* <!-- Submit button --> */}
        <button
          type="submit"
          class="btn btn-primary btn-lg btn-block"
          onClick={handleUserAuth}
        >
          Sign in
        </button>

        <div class="divider d-flex align-items-center my-4">
          <p class="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
        </div>

        <a
          class="btn btn-primary btn-lg btn-block"
          style={{ backgroundColor: "#3b5998" }}
          href="#!"
          role="button"
        >
          <i class="fab fa-facebook-f me-2"></i>Continue with Facebook
        </a>
        <a
          class="btn btn-primary btn-lg btn-block"
          style={{ backgroundColor: "#55acee" }}
          href="#!"
          role="button"
        >
          <i class="fab fa-twitter me-2"></i>Continue with Twitter
        </a>
      </form>
    </Fragment>
  );
};

export default AuthForm;
