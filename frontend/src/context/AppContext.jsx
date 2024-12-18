import { createContext, useEffect, useState } from 'react'
import { category_workshop } from '../assets/assets.js'
import axios from 'axios'
import { toast } from 'react-toastify'

export const AppContext = createContext()

const AppContextProvider = (props) => {

    const currencySymbol = '$'
    const delivery_fee = '12.00'

    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : false)

    const [workshops, setWorkshops] = useState([])
    const [userData, setUserData] = useState(false)

    const [products, setProducts] = useState([])
    const [cartItem, setCartItems] = useState({})

    const addToCart = async (itemId) => {
        const cartData = { ...cartItem }

        cartData[itemId] = (cartData[itemId] || 0) + 1

        setCartItems(cartData)

        if (token) {
            try {
                await axios.post(backendUrl + '/api/cart/add', { itemId }, { headers: { token } })
            } catch (error) {
                console.error(error)
                toast.error(error.message)
            }
        }
    }

    const getCartCount = () => {
        let totalCount = 0

        for (const itemId in cartItem) {
            totalCount += cartItem[itemId]
        }

        return totalCount
    }
    const updateQuantity = (itemId, quantity) => {
        const cartData = { ...cartItem }

        if (quantity > 0) {
            cartData[itemId] = quantity
        } else {
            delete cartData[itemId]
        }

        setCartItems(cartData)
    }


    const getCartAmount = () => {
        let totalAmount = 0

        for (const itemId in cartItem) {
            const product = products.find((product) => product._id === itemId)
            if (product) {
                totalAmount += product.price * cartItem[itemId]
            }
        }

        return totalAmount
    }

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
        console.log(cartItem)

    }, [cartItem])

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
        cartItem, setCartItems,

        currencySymbol, delivery_fee,

        category_workshop,
        token, setToken,
        backendUrl,
        userData, setUserData,
        loadUserProfileData,

        addToCart,
        getCartCount,
        updateQuantity,
        getCartAmount,
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider