import { createContext } from 'react'
import { workshops, category_workshop } from '../assets/assets'

export const AppContext = createContext()

const AppContextProvider = (props) => {

    const currencySymbol = '$'

    
    const value = {
        workshops,
        currencySymbol,
        category_workshop,
        location,
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider
