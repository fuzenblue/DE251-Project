import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext';
import { useState } from 'react';

const StoreUp = () => {

    const {productId} = useParams();
    const {products} = useContext(AppContext)
    const [ productData, setProductData ] = useState(false)


    const fetchProductData = async () => {

        products.map((item) => {
            if (item._id === productId) {
                setProductData(item)
                return null
            }
        })
    }

    useEffect(() => {
        fetchProductData()
    }, [productId, products])


  return (
    <div>
      Store Up
    </div>
  )
}

export default StoreUp
