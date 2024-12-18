import React, { useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const ProductInfo = () => {
  const { id } = useParams()
  const { products } = useContext(AppContext)

  // ค้นหาสินค้าจาก ID
  const product = products?.find((item) => item.id === id)

  // ถ้าหาสินค้าไม่เจอ
  if (!product) {
    return <div className="text-center mt-20 text-lg">Product not found!</div>
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="w-full max-w-6xl mx-auto px-4">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col lg:flex-row">
          {/* รูปภาพหลัก */}
          <div className="lg:w-1/2 p-6 bg-yellow-50 flex justify-center items-center">
            <img
              src={product.productImg}
              alt={product.name}
              className="w-full h-96 object-contain rounded-lg"
            />
          </div>

          {/* ข้อมูลสินค้า */}
          <div className="lg:w-1/2 p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>
            <p className="text-gray-600 mb-4">{product.about}</p>
            <div className="text-xl font-semibold text-green-600 mb-6">
              ${product.price}
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">{product.description}</p>

            <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 rounded-lg transition">
              Add to Cart
            </button>

            <Link to="/all-product" className="block mt-4 text-blue-500 hover:underline">
              &larr; Back to Products
            </Link>
          </div>
        </div>

        {/* รูปภาพเพิ่มเติม */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">More Images</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {product.images?.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Detail ${index + 1}`}
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductInfo