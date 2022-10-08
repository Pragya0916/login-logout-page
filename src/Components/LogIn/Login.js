import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import  axios  from 'axios';
import './Login.css';

const Login = () => {

  const [loginDetails , setLoginDetails ] = useState({
    email:"",
    password:""
  })

  const handleChange = (e) => {
      setLoginDetails({...loginDetails , [e.target.id] : e.target.value})
  }

  const handleLogin = (e) => {
    console.log(loginDetails);
    localStorage.setItem("loginkey" , JSON.stringify(loginDetails))
  }

  return (
    <>
    <div class="outer_box">
      <div className='inner_box'>
          <h2 className='text-center mb-5'>Sign In to SHOPPIFY</h2>


          <div className="row mt-2 container">
              <div className="col-lg-4">
              <i className="bi bi-person-fill"></i>
                  <label className="control-label ms-2">Email</label>
              </div>
              <div className="col-lg-8">
                <input className="form-control phone" placeholder="" type="email" id="email" value={loginDetails.email} autoComplete="off" onChange={handleChange}/>
            </div>
            </div>


            <div className="row mt-2 container">
              <div className="col-lg-4">
              <i className="bi bi-envelope"></i><label className="control-label ms-2">Password </label>
              </div>
              <div className="col-lg-8">
                <input id="password" className="form-control required" placeholder="" type="password" value={loginDetails.password} autoComplete="off" onChange={handleChange} />
              </div>
            </div>


           <div className="row mt-4 mb-5">
              <div className="col-lg-12 text-center">
               
                <Link to= '/home'><button type="button" className="btn text-white w-75" style={{ backgroundColor: "#3497d5"}} onClick={handleLogin} >LOGIN</button></Link>
              </div>
            </div>
      

            

            <div className="row mt-5">
              <div className="col-lg-12 text-center">
                <span>Don't have an account?
                  <Link to= '/signup'>
                  <button type="button" style={{ outline:"none" , border:"none" , background:"none", color:"#3497d5"}}>SIGN UP</button>
                  </Link>
                </span>

            </div>
            </div>
      
          
          
        
        </div>
    </div>
 
    </>
  )
}

export default Login