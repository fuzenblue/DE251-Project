import { createContext } from 'react'

export const AppContext = createContext()

const AppContextProvider = (props) => {

    const calculateAge = (dob) => {
        const today = new Date()
        const birthDate = new Date(dob)

        let age = today.getFullYear() - birthDate.getFullYear()
        return age
    }

    const months = [" ", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    const slotDateFormat = (slotDate) => {
      if (!slotDate || typeof slotDate !== "string") {
        return "Invalid Date"
      }
      const dateArray = slotDate.split('_')
      return dateArray[0] + " " + months[Number(dateArray[1])] + " " + dateArray[2]
    }
    

    const currencySymbol = '$'

    const value = {
        calculateAge,
        slotDateFormat,
        currencySymbol,
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider
