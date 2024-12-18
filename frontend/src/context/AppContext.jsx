import { createContext, useEffect, useState } from 'react'
import { category_workshop } from '../assets/assets.js'
import axios from 'axios'
import { toast } from 'react-toastify'

export const AppContext = createContext()

const AppContextProvider = (props) => {

    const currencySymbol = '$'
    const delivery_fee = 12

    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : false)

    const [workshops, setWorkshops] = useState([])
    const [userData, setUserData] = useState(false)

    const [products, setProducts] = useState([])
    const [cartItem, setCartItems] = useState([])

    const addToCart = async (itemId) => {

        let cartData = structuredClone(cartItem)

        if (cartData[itemId]) {
            if (cartData[itemId]) {
                cartData[itemId] += 1
            } else {
                cartData[itemId] = 1
            }
        } else {
            cartData[itemId] = {}
            cartData[itemId] = 1
        }

        setCartItems(cartData)

        if (token) {
            try {

                await axios.post(backendUrl + '/api/cart/add', { itemId }, { headers: { token } })

            } catch (error) {
                console.log(error)
                toast.error(error.message)
            }
        }
    }

    const getCartCount = () => {
        let totalCount = 0
        for (const items in cartItem) {
            for (const item in cartItem[items]) {
                try {
                    if (cartItem[items][item] > 0) {
                        totalCount += cartItem[items][item]
                    }
                } catch (error) {
                    console.log(error)
                    toast.error(error.message)
                }
            }
        }

        return totalCount
    }

    const updateQuantity = async (itemId, quantity) => {

        let cartData = structuredClone(cartItem)

        cartData[itemId] = quantity
        setCartItems(cartData)
    }

    // const getCartAmount = () => {

    //     let totalAmount = 0
    // }

    const getWorkshopsData = async () => {
        try {

            const { data } = await axios.get(backendUrl + '/api/workshop/list-workshops')
            if (data.success) {
                setWorkshops(data.workshops)
                console.log("Workshops Data:", data.workshops)
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    const getProductsData = async () => {
        try {

            const { data } = await axios.get(backendUrl + '/api/product/list-products')
            if (data.success) {
                setProducts(data.products)
                console.log("Products Data:", data.products)
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    const loadUserProfileData = async () => {
        try {

            const { data } = await axios.get(backendUrl + '/api/user/get-profile', { headers: { token } })
            if (data.success) {
                setUserData(data.userData)
            } else {
                toast.error(error.message)
            }

        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    useEffect(() => {
        getWorkshopsData()
        getProductsData()
    }, [])

    useEffect(() => {
        if (token) {
            loadUserProfileData()
        } else {
            setUserData(false)
        }
    }, [token])

    const value = {
        workshops, getWorkshopsData,
        products, getProductsData,
        currencySymbol, delivery_fee,
        category_workshop,
        token, setToken,
        backendUrl,
        userData, setUserData,
        loadUserProfileData,
        addToCart,
        getCartCount,
        updateQuantity,
        // 10.23
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider
