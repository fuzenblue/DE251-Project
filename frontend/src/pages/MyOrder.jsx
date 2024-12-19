import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import MyProfileSideBar from '../components/MyProfileSideBar'
import axios from 'axios'

const MyOrder = () => {

  const { backendUrl, token, getWorkshopsData, currencySymbol, cartItem, userData } = useContext(AppContext)

  const months = [" ", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
  };

  const [orderData, setOrderData] = useState([])

  useEffect(() => {
    const fetchOrderData = async () => {
      if (token) {
        try {
          const { data } = await axios.post(`${backendUrl}/api/order/userorders`, {}, { headers: { token } });
          if (data.success) {
            setOrderData(data.orders);
          } else {
            console.error("Failed to fetch order data:", data.message);
          }
        } catch (error) {
          console.error("Error fetching order data:", error);
        }
      }
    };

    fetchOrderData();
  }, [token, backendUrl]);


  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <MyProfileSideBar />

      {/* Main Content Area */}
      <div className="flex-1 p-8 bg-gray-50">
        <h2 className="text-left text-2xl font-bold text-gray-800 mb-6"><span className='text-primary'>{userData.name}</span> Orders</h2>

        <div className="flex flex-col gap-4 m-4">
          {orderData.slice().reverse().map((order, orderIndex) => (
            <div key={orderIndex}>
              {/* Loop through items in each order */}
              {order.items.map((item, itemIndex) => (
                <div
                  key={`${order._id}-${itemIndex}`} 
                  className="grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 mb-5 py-3 px-3 border border-gray-300 rounded-lg bg-white"
                >
                  <div>
                    <img src={item.productImg} alt={item.name} className="w-36 h-36 rounded-lg object-cover" />
                  </div>
                  <div className="flex-1 text-md py-3 text-zinc-600">
                    <p className="text-lg text-neutral-800 font-semibold">{item.name}</p>
                    <div className="flex gap-8">
                      <p className="text-base">
                        {currencySymbol}
                        {item.price}
                      </p>
                      <p className="text-base pr-2">Quantity: {item.quantity}</p>
                    </div>
                    <p className="text-base text-neutral-800 font-medium pr-2 mt-6">
                      Date: <span className="text-sm text-zinc-600 font-medium pr-2">{formatDate(order.date)}</span>
                    </p>
                    <p className="text-base text-neutral-800 font-medium pr-2">
                      Payment:{" "}
                      <span className="text-sm text-zinc-600 font-medium pr-2">
                        {order.paymentMethod}
                      </span>
                    </p>
                  </div>
                  <div className="md:w-1/2 flex justify-between">
                    <div className="flex items-center gap-2">
                      <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
                      <p className="text-sm md:text-base">{order.status || "Order Placed"}</p>
                    </div>
                    <div className="flex items-center px-4">
                      <button className="mt-2 text-orange-600 border rounded py-3 px-8">Track Order</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MyOrder
