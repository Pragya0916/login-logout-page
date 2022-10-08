import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import '../LogIn/Login.css'

const Signup = () => {

  const [signupDetails, setSignupDetails] = useState({
    fname:"",
    lname:"",
    email:"",
    password:"",
    phone:""
  })

  function handleChange (e){
       setSignupDetails( {...signupDetails , [e.target.id] : e.target.value})
   
  }

  function handleSignup(e){    
        console.log(signupDetails)
        localStorage.setItem("signupkey" , JSON.stringify(signupDetails))
  }
 

  return (
    <>
      <div class="outer_box">
      <div className='inner_box'>
          <h2 className='text-center mb-5'>Sign In to SHOPPIFY</h2>


          <div className="row mt-2 container">
              <div className="col-lg-4">
              <i className="bi bi-person"></i>
                  <label className="control-label ms-2">First Name</label>
              </div>
              <div className="col-lg-8">
                <input className="form-control phone" placeholder="" type="text" id="fname" value={signupDetails.fname} onChange={handleChange} autoComplete="off"/>
            </div>
            </div>

            <div className="row mt-2 container">
              <div className="col-lg-4">
              <i className="bi bi-person "></i><label className="control-label ms-2">Last Name </label>
              </div>
              <div className="col-lg-8">
                <input id="lname" className="form-control required" placeholder="" type="text" value={signupDetails.lname} onChange={handleChange} autoComplete="off" />
             
            </div>
            </div>


            <div className="row mt-2 container">
              <div className="col-lg-4">
              <i className="bi bi-envelope "></i><label className="control-label ms-2">Email</label>
              </div>
              <div className="col-lg-8">
                <input id="email" className="form-control required" placeholder="" type="email" value={signupDetails.email}  onChange={handleChange} autoComplete="off" />
              </div>
            </div>

            <div className="row mt-2 container">
              <div className="col-lg-4">
              <i className="bi bi-lock "></i><label className="control-label ms-2">Password</label>
              </div>
              <div className="col-lg-8">
                <input id="password" className="form-control required" placeholder="" type="password" value={signupDetails.password} onChange={handleChange} autoComplete="off" />
              </div>
            </div>

  
            <div className="row mt-2 container">
              <div className="col-lg-4">
              <i className="bi bi-phone "></i><label className="control-label ms-2">Phone</label>
              </div>
              <div className="col-lg-8">
                <input id="phone" className="form-control required" placeholder="" type="number" value={signupDetails.phone} onChange={handleChange} autoComplete="off" />
              </div>
            </div>


      
    
           
           <div className="row mt-4 mb-5">
              <div className="col-lg-12 text-center">
                  <Link to= '/home'> <button type="button" onClick={handleSignup} className="btn text-white w-75" style={{ backgroundColor: "#3497d5"}}>SIGN UP</button></Link>
              </div>
      </div>

       
        
        </div>
    </div>
    </>
  )
}

export default Signup