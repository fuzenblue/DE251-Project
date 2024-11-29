import React, { createContext, useState } from 'react'

export const AdminContext = createContext()

const AdminContextProvider = (props) => {

    const [ aToken, setAToken ] = useState(localStorage.getItem('aToken') ? locAlStorage.getItem('AToken') : '')

    const backendUrl = import.meta.env.VITE_BACKEND_URL


    const value = {
        aToken, setAToken,
        backendUrl,
    }

    // 7.40

  return (
    <AdminContext.Provider value={value}>
      {props.children}
    </AdminContext.Provider>
  )
}

export default AdminContextProvider 
