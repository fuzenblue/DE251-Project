import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Bag = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Elegant Ceramic Mug', price: 25, quantity: 1, image: 'https://via.placeholder.com/150?text=Ceramic+Mug' },
    { id: 2, name: 'Leather Notebook', price: 18, quantity: 1, image: 'https://via.placeholder.com/150?text=Leather+Notebook' },
  ]);

  const [workshops, setWorkshops] = useState([
    { id: 1, name: 'Design Workshop', price: 75, quantity: 1, image: 'https://via.placeholder.com/150?text=Design+Workshop' },
  ]);

  const getTotal = (items) => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleIncreaseProduct = (id) => {
    setProducts(products.map(product =>
      product.id === id ? { ...product, quantity: product.quantity + 1 } : product
    ));
  };

  const handleDecreaseProduct = (id) => {
    setProducts(products.map(product =>
      product.id === id && product.quantity > 1 ? { ...product, quantity: product.quantity - 1 } : product
    ));
  };

  const handleRemoveProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  const handleRemoveWorkshop = (id) => {
    setWorkshops(workshops.filter(workshop => workshop.id !== id));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 bg-neutral-50 min-h-screen">
      <div className="bg-white rounded-2xl shadow-xl ring-1 ring-neutral-100 overflow-hidden">
        <div className="bg-neutral-900 text-white p-6">
          <h1 className="text-3xl font-bold text-center tracking-tight">
            Your Shopping Cart
          </h1>
        </div>

        <div className="p-6 space-y-6">
          {/* Products Section */}
          <div>
            <h2 className="text-xl font-semibold text-neutral-700 mb-4 border-b pb-2">
              Products
            </h2>
            {products.map((product) => (
              <div 
                key={product.id} 
                className="grid grid-cols-12 items-center gap-4 py-4 border-b last:border-b-0 hover:bg-neutral-50 transition-colors"
              >
                <div className="col-span-2">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full aspect-square object-cover rounded-lg" 
                  />
                </div>
                <div className="col-span-5">
                  <p className="font-medium text-neutral-900">{product.name}</p>
                  <p className="text-neutral-600">${product.price}</p>
                </div>
                <div className="col-span-3 flex items-center space-x-2">
                  <button 
                    onClick={() => handleDecreaseProduct(product.id)}
                    className="w-8 h-8 bg-neutral-100 text-neutral-700 rounded-full flex items-center justify-center hover:bg-neutral-200"
                  >
                    -
                  </button>
                  <span className="text-neutral-900 px-2">{product.quantity}</span>
                  <button 
                    onClick={() => handleIncreaseProduct(product.id)}
                    className="w-8 h-8 bg-neutral-100 text-neutral-700 rounded-full flex items-center justify-center hover:bg-neutral-200"
                  >
                    +
                  </button>
                </div>
                <div className="col-span-2 text-right">
                  <button 
                    onClick={() => handleRemoveProduct(product.id)}
                    className="text-red-500 hover:text-red-700 font-medium"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Workshops Section */}
          <div>
            <h2 className="text-xl font-semibold text-neutral-700 mb-4 border-b pb-2">
              Workshops
            </h2>
            {workshops.map((workshop) => (
              <div 
                key={workshop.id} 
                className="grid grid-cols-12 items-center gap-4 py-4 border-b last:border-b-0 hover:bg-neutral-50 transition-colors"
              >
                <div className="col-span-2">
                  <img 
                    src={workshop.image} 
                    alt={workshop.name} 
                    className="w-full aspect-square object-cover rounded-lg" 
                  />
                </div>
                <div className="col-span-7">
                  <p className="font-medium text-neutral-900">{workshop.name}</p>
                  <p className="text-neutral-600">${workshop.price}</p>
                </div>
                <div className="col-span-3 text-right">
                  <button 
                    onClick={() => handleRemoveWorkshop(workshop.id)}
                    className="text-red-500 hover:text-red-700 font-medium"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Summary Section */}
          <div className="bg-neutral-100 rounded-lg p-6">
            <div className="flex justify-between items-center">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-neutral-700">Products Total:</span>
                  <span className="font-semibold">${getTotal(products)}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-neutral-700">Workshops Total:</span>
                  <span className="font-semibold">${getTotal(workshops)}</span>
                </div>
                <div className="flex justify-between border-t pt-2 mt-2">
                  <span className="text-xl font-bold">Grand Total:</span>
                  <span className="text-xl font-bold">${getTotal(products) + getTotal(workshops)}</span>
                </div>
              </div>
              <Link to ="/PlaceOrder">
                <button className="bg-neutral-900 text-white px-6 py-3 rounded-lg hover:bg-neutral-800 transition-colors">
                  Proceed to Checkout
                </button>
              </Link>  
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bag;