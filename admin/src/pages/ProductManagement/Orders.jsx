import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { AdminContext } from '../../context/AdminContext'

const Orders = () => {
  const { backendUrl, aToken } = useContext(AdminContext)
  const [orders, setOrders] = useState([])

  const fetchAllOrders = async () => {
    try {
      const { data } = await axios.post(
        `${backendUrl}/api/order/list`,
        {},
        { headers: { aToken } }
      )
      if (data.success) {
        setOrders(data.orders)
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      console.error("Error fetching orders:", error)
      toast.error("Failed to fetch orders.")
    }
  }

  const updateOrderStatus = async (orderId, status) => {
    try {
      const { data } = await axios.post(
        `${backendUrl}/api/order/status`,
        { orderId, status },
        { headers: { aToken } }
      )
      if (data.success) {
        toast.success(data.message)
        fetchAllOrders()
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      console.error("Error updating order status:", error)
      toast.error("Failed to update order status.")
    }
  }

  useEffect(() => {
    if (aToken) {
      fetchAllOrders()
    }
  }, [aToken, backendUrl])

  return (
    <div className="block pt-8 px-8 w-full bg-gray-50 overflow-y-scroll mb-4">
      <h1 className="mb-3 text-lg font-medium">Orders</h1>
      {orders.map((order) => (
        <div key={order._id} className="border-2 border-gray-200 p-4 my-2 text-md text-gray-700">

          <div className='flex flex-row justify-between'>
            <div className="mb-2">
              <p className="font-medium">Order ID: {order._id}</p>
              <p>Payment: {order.payment ? "Paid" : "Pending"}</p>
              <p>Payment Method: {order.paymentMethod}</p>
              <p>Date: {new Date(order.date).toLocaleDateString()}</p>
            </div>

            <div className="mt-4">
              <div className="mb-2">
                <p className="text-lg font-bold">Total Amount: ${order.amount.toFixed(2)}</p>
              </div>

              <select className="p-2 border rounded" value={order.status} onChange={(e) => updateOrderStatus(order._id, e.target.value)}>
                <option value="Order Placed">Order Placed</option>
                <option value="Packing">Packing</option>
                <option value="Shipped">Shipped</option>
                <option value="Out for delivery">Out for delivery</option>
                <option value="Delivered">Delivered</option>
              </select>
            </div>
          </div>


          <div className="flex-col">
            {order.items.map((item, index) => (
              <div key={`${order._id}-${index}`} className="flex items-start p-2 gap-4">
                <img className="w-24 h-24 rounded object-cover" src={item.productImg} alt="" />
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>${item.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>


          <div className="mt-4">
            <p className="font-medium">Delivery Address:</p>
            <p>
              {order.address.street}, {order.address.city}, {order.address.state} -{" "}
              {order.address.zipcode}, {order.address.country}
            </p>
            <p>Phone: {order.address.phone}</p>
          </div>


        </div>
      ))}
    </div>
  )
}

export default Orders
