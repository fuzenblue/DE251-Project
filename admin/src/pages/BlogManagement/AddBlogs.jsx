import React from 'react'
import { admin } from '../../assets/assets'

const AddBlogs = () => {
  return (
    <div className="flex pt-8 w-[60%] bg-zinc-100">
      <form className="flex flex-col gap-5 max-w-[120vh] px-8">
        {/* Image Upload */}
        <div className="flex flex-col items-start gap-2">
          <p className="text-gray-700 font-medium">Upload Image</p>
          <label htmlFor="image" className="cursor-pointer">
            <img src={admin.add_blogs_icon} alt="" className="w-12 object-cover" />
          </label>
          <input type="file" id="image" hidden required />
        </div>

        {/* Product Name */}
        <div className="flex flex-col gap-2">
          <p className="text-gray-700 font-medium">Product Name</p>
          <input type="text" name="name" placeholder="Type Product Name"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary" />
        </div>

        {/* Product Description */}
        <div className="flex flex-col gap-2">
          <p className="text-gray-700 font-medium">Product Description</p>
          <textarea name="description" rows="6" placeholder="Write Product Description"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"></textarea>
        </div>

        {/* Category and Price */}
        <div className="flex flex-wrap gap-5">
          {/* Category */}
          <div className="flex flex-col gap-2">
            <p className="text-gray-700 font-medium">Product Category</p>
            <select name="category"
              className="w-full max-w-[200px] p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary">
              <option value="/">/</option>
              <option value="/">/</option>
            </select>
          </div>

          {/* Price */}
          <div className="flex flex-col gap-2">
            <p className="text-gray-700 font-medium">Product Price</p>
            <input
              type="number"
              name="price"
              placeholder="$20"
              className="w-full max-w-[200px] p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"/>
          </div>
        </div>

        {/* Submit Button */}
        <button type="submit" className="w-full max-w-[200px] py-3 text-white bg-black rounded shadow hover:bg-gray-800 focus:ring-2 focus:ring-primary focus:outline-none">ADD</button>
      </form>
    </div>
  )
}

export default AddBlogs
