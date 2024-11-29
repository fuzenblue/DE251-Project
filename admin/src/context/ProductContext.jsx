import React, { createContext, useState } from 'react'

export const ProductContext = createContext()

const ProductContextProvider = (props) => {

    const value = {

    }


  return (
    <ProductContext.Provider value={value}>
      {props.children}
    </ProductContext.Provider>
  )
}

export default ProductContextProvider 
