import { createContext, useEffect, useState } from 'react'
import { category_workshop } from '../assets/assets.js'
import axios from 'axios'
import { toast } from 'react-toastify'

export const AppContext = createContext()

const AppContextProvider = (props) => {

    const currencySymbol = '$'
    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const [workshops, setWorkshops] = useState([])
    const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') :  false)
    
    const getWorkshopsData = async () => {
        try {
            
            const { data } = await axios.get(backendUrl + '/api/workshop/list-workshops')
            if (data.success) {
                setWorkshops(data.workshops)
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    useEffect(() => {
        getWorkshopsData()
    }, [])

    const value = {
        workshops,
        currencySymbol,
        category_workshop,
        token, setToken,
        backendUrl,
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider
