import React, { useState } from 'react';

const Product = () => {
  const categories = ["Food Products", "Beauty Products",  "Dietary Supplements"];

  const allProducts = [
    // Food Products
    { id: 1, category: "Food Products", name: "Pineapple Juice", description: "Fresh pineapple juice.", price: "$5.99", image: "https://via.placeholder.com/300", stock: "In Stock" },
    { id: 2, category: "Food Products", name: "Canned Pineapple", description: "Pineapple slices in syrup.", price: "$4.99", image: "https://via.placeholder.com/300", stock: "In Stock" },
    { id: 3, category: "Food Products", name: "Pineapple Jam", description: "Sweet pineapple jam.", price: "$3.49", image: "https://via.placeholder.com/300", stock: "Limited Stock" },
    { id: 4, category: "Food Products", name: "Pineapple Cake", description: "Delicious pineapple cake.", price: "$6.99", image: "https://via.placeholder.com/300", stock: "In Stock" },

    // Beauty Products
    { id: 5, category: "Beauty Products", name: "Pineapple Soap", description: "Organic pineapple soap.", price: "$2.99", image: "https://via.placeholder.com/300", stock: "In Stock" },
    { id: 6, category: "Beauty Products", name: "Exfoliating Cream", description: "Pineapple-based cream.", price: "$12.99", image: "https://via.placeholder.com/300", stock: "In Stock" },
    { id: 7, category: "Beauty Products", name: "Pineapple Mask", description: "Refreshing pineapple mask.", price: "$9.99", image: "https://via.placeholder.com/300", stock: "Limited Stock" },
    { id: 8, category: "Beauty Products", name: "Pineapple Essence", description: "Hydrating essence.", price: "$15.99", image: "https://via.placeholder.com/300", stock: "In Stock" },

    // Dietary Supplements
    { id: 9, category: "Dietary Supplements", name: "Bromelain Capsules", description: "Digestive enzyme supplement.", price: "$14.99", image: "https://via.placeholder.com/300", stock: "In Stock" },
    { id: 10, category: "Dietary Supplements", name: "Pineapple Protein Powder", description: "Protein-rich supplement.", price: "$29.99", image: "https://via.placeholder.com/300", stock: "Limited Stock" },
    { id: 11, category: "Dietary Supplements", name: "Pineapple Nutritional Liquid", description: "Boosts immunity.", price: "$19.99", image: "https://via.placeholder.com/300", stock: "In Stock" }
  ];

  const bestSellers = [
    { id: 3, name: "Pineapple Jam", price: "$3.49", image: "https://via.placeholder.com/300" },
    { id: 8, name: "Pineapple Essence", price: "$15.99", image: "https://via.placeholder.com/300" },
    { id: 11, name: "Pineapple Bioplastic", price: "$9.99", image: "https://via.placeholder.com/300" },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showBestSellers, setShowBestSellers] = useState(true);

  const filteredProducts = selectedCategory === "All"
    ? allProducts
    : allProducts.filter(product => product.category === selectedCategory);

  return (
    <div className="bg-gray-100 min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-4 flex flex-col sticky top-0 h-screen">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Categories</h2>
        <ul className="space-y-2">
          <li
            className={`text-gray-700 hover:text-blue-600 cursor-pointer flex items-center space-x-2 ${selectedCategory === "All" && "font-bold"}`}
            onClick={() => setSelectedCategory("All")}
          >
            <span>🛍️</span>
            <span>All Products</span>
          </li>
          {categories.map((category, index) => (
            <li
              key={index}
              className={`text-gray-700 hover:text-blue-600 cursor-pointer flex items-center space-x-2 ${selectedCategory === category && "font-bold"}`}
              onClick={() => setSelectedCategory(category)}
            >
              <span>🍍</span>
              <span>{category}</span>
            </li>
          ))}
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4 flex justify-between items-center cursor-pointer" onClick={() => setShowBestSellers(!showBestSellers)}>
          <span>Best Sellers</span>
          <span>{showBestSellers ? "🔽" : "▶"}</span>
        </h2>
        {showBestSellers && (
          <ul className="space-y-4">
            {bestSellers.map((product) => (
              <li key={product.id} className="flex items-center space-x-4">
                <img src={product.image} alt={product.name} className="w-12 h-12 object-cover rounded" />
                <div>
                  <p className="text-gray-800 font-semibold truncate">{product.name}</p>
                  <p className="text-gray-600 text-sm">{product.price}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          {selectedCategory === "All" ? "All Products" : selectedCategory}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-white shadow-lg rounded-lg max-w-sm w-full hover:scale-105 transform transition-all duration-300">
              {/* Product Image */}
              <div className="h-64 bg-gray-200 rounded-t-lg flex justify-center items-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-contain h-full w-full rounded-t-lg"
                />
              </div>

              {/* Product Details */}
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 truncate" title={product.name}>{product.name}</h2>
                <p className="text-gray-600 mt-2 line-clamp-2">{product.description}</p>

                <div className="flex justify-between items-center mt-4">
                  <span className="text-xl font-semibold text-green-600">{product.price}</span>
                  <span className={`text-sm ${product.stock === 'Out of Stock' ? 'text-red-500' : 'text-gray-500'}`}>{product.stock}</span>
                </div>

                <button
                  className={`mt-6 w-full py-2 px-4 rounded-lg transition duration-300 ${product.stock === 'Out of Stock' ? 'bg-gray-400 text-gray-700 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
                  disabled={product.stock === 'Out of Stock'}
                >
                  {product.stock === 'Out of Stock' ? 'Unavailable' : 'Add to Cart'}
                </button>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-gray-700">Total Products: {filteredProducts.length}</p>
      </div>
    </div>
  );
};

export default Product;
