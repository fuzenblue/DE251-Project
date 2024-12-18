import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const CartSummary = () => {
    const { currencySymbol, delivery_fee, getCartAmount } = useContext(AppContext)

    return (
        <div>
            <div className="flex justify-between mb-2">
                <span className="text-neutral-700">Subtotal:</span>
                <span className="font-semibold">
                    {currencySymbol}
                    {getCartAmount().toFixed(2)}
                </span>
            </div>
            <div className="flex justify-between mb-2">
                <span className="text-neutral-700">Shipping:</span>
                <span className="font-semibold">
                    {currencySymbol}
                    {parseFloat(delivery_fee).toFixed(2)}
                </span>
            </div>
            <div className="flex justify-between border-t pt-4 mt-4">
                <span className="text-xl font-bold">Total:</span>
                <span className="text-xl font-bold">
                    {currencySymbol}
                    {(getCartAmount() + parseFloat(delivery_fee)).toFixed(2)}
                </span>
            </div>
        </div>
    )
}

export default CartSummary
