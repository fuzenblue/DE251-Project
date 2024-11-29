import React, { createContext, useState } from 'react'

export const WorkshopContext = createContext()

const WorkshopContextProvider = (props) => {

    const value = {

    }


  return (
    <WorkshopContext.Provider value={value}>
      {props.children}
    </WorkshopContext.Provider>
  )
}

export default WorkshopContextProvider 
