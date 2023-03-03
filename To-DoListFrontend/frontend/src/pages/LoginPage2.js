
import React, { Fragment, useState } from 'react'


const LoginPage2 = () => {

    const [register, setRegister] = useState(false);

    const handleClickRegister = () => {
      setRegister((prev) => !prev);
    };
  

  return (
        <Fragment>
              {/* <!-- Section: Design Block --> */}

  <div class="container-fluid ">
    <div class="row">
      <div class="col-sm-6 text-black">

        <div class="px-5 ms-xl-4">
    
        <i class="fas fa-crow fa-2x me-3 pt-5 mt-xl-4" style={{color: '#709085'}} ></i>
          <span class="h1 fw-bold mb-0">Logo</span>
      
   
           
       
        </div>

        <div class="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">

          <form style={{width:'28rem'}}>

            <div class="d-flex justify-content-between align-items-center">
            <h3 class="fw-normal mb-3 pb-3" style={{letterSpacing:'1px'}} >Log in</h3>
            <button class="btn btn-outline-primary mb-3"  onClick={handleClickRegister}>{register ? "Login" : "Register"}</button>
            </div>
            {register && (
                <>
                 <div class="form-outline mb-4">
                 <input type="email" id="form2Example18" class="form-control form-control-lg" />
                 <label class="form-label" for="form2Example18">Email address</label>
               </div>
                <div class="form-outline mb-4">
                <input type="email" id="form2Example18" class="form-control form-control-lg" />
                <label class="form-label" for="form2Example18">Email address</label>
              </div>
              </>
            )}
            <div class="form-outline mb-4">
              <input type="email" id="form2Example18" class="form-control form-control-lg" />
              <label class="form-label" for="form2Example18">Email address</label>
            </div>

            <div class="form-outline mb-4">
              <input type="password" id="form2Example28" class="form-control form-control-lg" />
              <label class="form-label" for="form2Example28">Password</label>
            </div>

            <div class="pt-1 mb-4">
              <button class="btn btn-info btn-lg btn-block" type="button">Login</button>
            </div>

            <p class="small mb-5 pb-lg-2"><a class="text-muted" href="#!">Forgot password?</a></p>
            <p>Don't have an account? <a href="#!" class="link-info">Register here</a></p>

          </form>

        </div>

      </div>
      <div class="col-sm-3 px-0 d-none d-sm-block">
        <img src="https://images.pexels.com/photos/6192133/pexels-photo-6192133.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Login image" class="w-100" style={{objectFit:'cover',objectPosition:'left'}}  />
      </div>
      <div class="col-sm-3 px-0 d-none d-sm-block">
        <img src="https://images.pexels.com/photos/5717454/pexels-photo-5717454.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Login image" class="w-100" style={{objectFit:'cover',objectPosition:'left'}}  />
      </div>
    </div>
  </div>

  
        </Fragment>
  )
}

export default LoginPage2