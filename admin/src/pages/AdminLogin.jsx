import React, { useContext, useState } from 'react'
import { AdminContext } from '../context/AdminContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const AdminLogin = () => {

  const [ state, setState ] = useState('Admin')

  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  const { setAToken, backendUrl } = useContext(AdminContext)

  const onSubmitHandler = async (event) => {
    event.preventDefault()

    try {

      if (state === 'Admin') {
        
        const response = await axios.post(backendUrl + '/api/admin/login', {email, password})
        const data = response.data

        if (data.success) {
          localStorage.setItem('aToken', data.token)
          setAToken(data.token)
        } else {
          toast.error(data.message)
        }
      }

    } catch (error) {
      toast.error('An error occurred. Please try again.')
    }
  }
  


  return (
    <form onSubmit={ onSubmitHandler } className='min-h-[80vh] flex items-center justify-center'>
      <div className='flex flex-col gap-3 items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5EE] text-sm shadow-lg'>
        <p className='text-2xl font-semibold m-auto '><span className='text-primary'> {state} </span> Login</p>
        <div className='w-full'>
          <p>Email</p>
          <input onChange={(e) => setEmail(e.target.value)} value={email} className='border border-gray-200 rounded w-full p-2 mt-1' type="email" required/>
        </div>
        <div className='w-full'>
          <p>Password</p>
          <input onChange={(e) => setPassword(e.target.value)} value={password} className='border border-gray-200 rounded w-full p-2 mt-1' type="password" required/>
        </div>
        <button type="submit" className='flex w-full btn btn-primary text-white mt-2'>Login</button>
      </div>
    </form>
  )
}

export default AdminLogin
