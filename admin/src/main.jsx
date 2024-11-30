import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AppContextProvider from "./context/AppContextProvider.jsx";
import AdminContextProvider from "./context/AdminContext.jsx";
import WorkshopContextProvider from "./context/WorkshopContext.jsx";
import ProductContextProvider from "./context/ProductContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AdminContextProvider>
      <WorkshopContextProvider>
        <ProductContextProvider>
          <AppContextProvider>
            <App />
          </AppContextProvider>
        </ProductContextProvider>
      </WorkshopContextProvider>
    </AdminContextProvider>
  </BrowserRouter>,
)
