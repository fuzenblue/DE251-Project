import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AppContextProvider from './context/AppContext.jsx'
import ProfileContextProvider from './context/ProfileContext.jsx'

createRoot(document.getElementById('root')).render (
  <BrowserRouter>
    <AppContextProvider>
    <ProfileContextProvider>
      <App />
    </ProfileContextProvider>
    </AppContextProvider>
  </BrowserRouter>,
)
