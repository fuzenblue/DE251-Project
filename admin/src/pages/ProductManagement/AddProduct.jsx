import React, { useContext, useState } from "react"
import axios from "axios"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { AdminContext } from "../../context/AdminContext.jsx"
import { admin } from "../../assets/assets.js"

const AddProduct = () => {

  const [productImg, setProductImg] = useState("")
  const [productName, setProductName] = useState("")
  const [productAbout, setProductAbout] = useState("")
  const [productDescription, setProductDescription] = useState("")
  const [productPrice, setProductPrice] = useState("")
  const [productImages, setProductImages] = useState([])

  const { backendUrl, aToken } = useContext(AdminContext)

  const handleSubmit = async (event) => {
    event.preventDefault() // ป้องกันการรีเฟรชหน้า

    try {

      const formData = new FormData()

      formData.append("productImg", productImg)
      formData.append("name", productName)
      formData.append("about", productAbout)
      formData.append("description", productDescription)
      formData.append("price", productPrice)

      if (productImages && productImages.length > 0) {
        Array.from(productImages).forEach((image) => formData.append("images", image))
      } else {
        return toast.error("At least one image is required")
      }

      // consol log
      formData.forEach((value, key) => {
        console.log(` ${key} : ${value} `)
      })

      const { data } = await axios.post(backendUrl + "/api/product/add", formData, { headers: { aToken }, "Content-Type": "multipart/form-data" })

      if (data.success) {
        toast.success(data.message)
      } else {
        toast.error(data.message)
      }
    } catch (error) { }
  }
  return (
    <div className="block pt-8 px-8 w-full bg-gray-50 overflow-y-scroll mb-8">
      <h1 className="mb-3 text-lg font-medium">Add Product</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5 max-w-[120vh] px-8" >
        {/* Cover Image Upload */}
        <div className="add-img-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img src={productImg ? URL.createObjectURL(productImg) : admin.upload_area} alt="" className="p-4 object-cover max-h-36" />
          </label>
          <input onChange={(e) => setProductImg(e.target.files[0])} type="file" id="image" hidden required />
        </div>

        {/* Product Name */}
        <div className="flex flex-col gap-2">
          <p className="text-gray-700 font-medium">Product Name</p>
          <input
            type="text"
            name="name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            placeholder="Type Product Name"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary" />
        </div>

        {/* Product About */}
        <div className="flex flex-col gap-2">
          <p className="text-gray-700 font-medium">Product About</p>
          <textarea
            name="description"
            rows="6"
            value={productAbout}
            onChange={(e) => setProductAbout(e.target.value)}
            placeholder="Write Product About"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
          ></textarea>
        </div>

        {/* Product Description */}
        <div className="flex flex-col gap-2">
          <p className="text-gray-700 font-medium">Product Description</p>
          <textarea
            name="description"
            rows="6"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
            placeholder="Write Product Description"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
          ></textarea>
        </div>

          {/* Price */}
          <div className="flex flex-col gap-2">
            <p className="text-gray-700 font-medium">Booking Price</p>
            <input
              type="number"
              name="price"
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
              placeholder="$20"
              className="w-full max-w-[200px] p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

        {/* Images Upload */}
        <div className="flex flex-col items-start gap-2">
          <p className="text-gray-700 font-medium">Upload Images</p>
          <input className='file-input file-input-bordered w-full max-w-xs' type="file" name="images" onChange={(e) => setProductImages(e.target.files)} multiple required />
          {productImages && productImages.length > 0 && (
            <div className="flex gap-2 mt-2">
              {Array.from(productImages).map((image, index) => (
                <img key={index} src={URL.createObjectURL(image)} alt={`Image Preview ${index}`} className="w-[100px] h-[100px] object-cover rounded" />
              ))}
            </div>
          )}
        </div>

        {/* Submit Button */}
        <button type="submit" className="w-full max-w-[200px] py-3 text-white bg-black rounded shadow hover:bg-gray-800 focus:ring-2 focus:ring-primary focus:outline-none">Add Product</button>
      </form>
    </div>
  )
}

export default AddProduct
