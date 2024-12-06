import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios'


const Login = () => {

  const [currState, setCurrState] = useState("Login")

  const [data,setData] = useState({
    name:"",
    email:"",
    password:""
  })

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({...data,[name]:value}))
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <form onSubmit={onLogin} className="bg-white shadow-xl rounded-lg p-8 w-full max-w-md space-y-8" >
        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-gray-800">
          {currState}
        </h2>

        {/* Input Fields */}
        <div className="space-y-4">
          {currState === "Login" ? null : (
            <input name="name" onChange={onChangeHandler} value={data.name} type="text" placeholder="Username" required className="input input-bordered w-full" />
          )}
          <input name="email" onChange={onChangeHandler} value={data.email} type="email" placeholder="Your email" required
                 className="input input-bordered w-full"  />
          <input name="password" onChange={onChangeHandler} value={data.password} type="password" placeholder="Password" required
                 className="input input-bordered w-full" />
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary text-white w-full mt-4 text-base" >
          {currState === "Sign Up" ? "Create account" : "Login"}
        </button>

        {/* Terms & Conditions */}
        <div className="form-control mt-4">
          {currState === "Login" ? (
              <>
                <label className="label cursor-pointer flex items-start justify-start space-x-2">
                  <input type="checkbox" defaultChecked className="checkbox checkbox-primary" />
                  <span className="label-text text-gray-600 text-sm text-left">Remember me</span>
                </label>
                
                <label className="label cursor-pointer flex items-start justify-start space-x-2">
                  <input type="checkbox" defaultChecked className="checkbox checkbox-primary" />
                  <span className="label-text text-gray-600 text-sm">By continuing, I agree to the terms of use & privacy policy.</span>
                </label>
              </>
            ) : (
              <label className="label cursor-pointer flex items-start justify-start space-x-2">
                <input type="checkbox" defaultChecked className="checkbox checkbox-primary" />
                <span className="label-text text-gray-600 text-sm">By continuing, I agree to the terms of use & privacy policy.</span>
              </label>
            )}
        </div>

        {/* Switch State */}
        <p className="text-center text-sm mt-4">
          {currState === "Login" ? (
            <>
              Create a new account?{" "}
              <span onClick={() => setCurrState("Sign Up")} className="text-primary cursor-pointer" >Click here</span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span onClick={() => setCurrState("Login")} className="text-primary cursor-pointer" >Login here</span>
            </>
          )}
        </p>
      </form>
    </div>

  )
}

export default Login
