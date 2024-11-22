import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'


const Login = () => {

  const {url, setToken} = useContext(AppContext)

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

  const onLogin = async (event) => {
    event.preventDefault()
    let newUrl = url;

    if (currState=="Login") {
      newUrl += "/api/user/login"
    } else {
      newUrl += "/api/user/register"
    }

    const response = await axios.post(newUrl, data);

    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      setShowLogin(false);

      
    } else {
      alert(response.data.message)
    }

  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <form
        onSubmit={onLogin}
        className="bg-white shadow-xl rounded-lg p-8 w-full max-w-md space-y-6"
      >
        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-gray-800">
          {currState}
        </h2>

        {/* Input Fields */}
        <div className="space-y-4">
          {currState === "Login" ? null : (
            <input
              name="name"
              onChange={onChangeHandler}
              value={data.name}
              type="text"
              placeholder="Your name"
              required
              className="input input-bordered w-full"
            />
          )}
          <input
            name="email"
            onChange={onChangeHandler}
            value={data.email}
            type="email"
            placeholder="Your email"
            required
            className="input input-bordered w-full"
          />
          <input
            name="password"
            onChange={onChangeHandler}
            value={data.password}
            type="password"
            placeholder="Password"
            required
            className="input input-bordered w-full"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="btn btn-primary w-full mt-4"
        >
          {currState === "Sign Up" ? "Create account" : "Login"}
        </button>

        {/* Terms & Conditions */}
        <div className="form-control mt-4">
          <label className="cursor-pointer flex items-start space-x-2">
            <input type="checkbox" className="checkbox" required />
            <span className="text-gray-600 text-sm">
              By continuing, I agree to the{" "}
              <a href="#" className="text-blue-500 underline">
                terms of use
              </a>{" "}
              &{" "}
              <a href="#" className="text-blue-500 underline">
                privacy policy
              </a>.
            </span>
          </label>
        </div>

        {/* Switch State */}
        <p className="text-center text-sm mt-4">
          {currState === "Login" ? (
            <>
              Create a new account?{" "}
              <span
                onClick={() => setCurrState("Sign Up")}
                className="text-blue-500 cursor-pointer"
              >
                Click here
              </span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span
                onClick={() => setCurrState("Login")}
                className="text-blue-500 cursor-pointer"
              >
                Login here
              </span>
            </>
          )}
        </p>
      </form>
    </div>

  )
}

export default Login
