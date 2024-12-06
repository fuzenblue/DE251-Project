import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const { backendUrl, token, setToken } = useContext(AppContext)
  const navigate = useNavigate()

  const [state, setState] = useState("Sign Up")

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const onSubmitHandler = async (event) => {
    event.preventDefault()

    try {
      
      if (state === 'Sign Up') {
        
        const { data } = await axios.post(backendUrl + '/api/user/register', {name, password, email})
        if (data.success) {
          localStorage.setItem('token', data.token)
          setToken(data.token)
        } else {
          toast.error(data.message)
        }
      } else {

        const { data } = await axios.post(backendUrl + '/api/user/login', {password, email})
        if (data.success) {
          localStorage.setItem('token', data.token)
          setToken(data.token)
        } else {
          toast.error(data.message)
        }
      }

    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    if (token) {
      navigate('/')
    }
  }, [token])

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <form onSubmit={onSubmitHandler} className="bg-white shadow-xl rounded-lg p-8 w-full max-w-md space-y-8">
        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-gray-800">
          {state}
        </h2>

        {/* Input Fields */}
        <div className="space-y-4">
          {state === "Login" ? null : (
            <input name="name" onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder="Username" required className="input input-bordered w-full" />
          )}
          <input name="email" onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder="Your email" required className="input input-bordered w-full" />
          <input name="password" onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder="Password" required className="input input-bordered w-full" />
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary text-white w-full mt-4 text-base">
          {state === "Sign Up" ? "Create account" : "Login"}
        </button>

        {/* Terms & Conditions */}
        <div className="form-control mt-4">
          {state === "Login" ? (
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
          {state === "Login" ? (
            <>
              Create a new account?{" "}
              <span onClick={() => setState("Sign Up")} className="text-primary cursor-pointer">Click here</span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span onClick={() => setState("Login")} className="text-primary cursor-pointer">Login here</span>
            </>
          )}
        </p>
      </form>
    </div>
  )
}

export default Login