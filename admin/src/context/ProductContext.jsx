import React, { createContext, useState } from 'react'
import axios from 'axios'
import { useContext } from 'react'
import { AdminContext } from './AdminContext'
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export const ProductContext = createContext()

const ProductContextProvider = (props) => {

    const { backendUrl, aToken } = useContext(AdminContext)

    const [products, setProducts] = useState([])

    const getAllProducts = async (aToken) => {
        try {

            const { data } = await axios.post(backendUrl + '/api/product/all-products', {}, { headers: { aToken } })
            if (data.success) {
                setProducts(data.products)

            } else {
                toast.error(data.message || "Failed to fetch products")
            }
        } catch (error) {
            console.error(error.response || error.message)
            toast.error(error.message)
        }
    }

    const changeAvailability = async (productsId) => {

        try {
            const { data } = await axios.post(backendUrl + '/api/product/change-availability', { productsId }, { headers: { aToken } })

            if (data.success) {
                toast.success(data.message)
                getAllProducts()
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            console.error(error.response || error.message)
            toast.error(error.message)
        }
    }

    const value = {
        products,
        getAllProducts,
        changeAvailability,
    }

    return (
        <ProductContext.Provider value={value}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductContextProvider
