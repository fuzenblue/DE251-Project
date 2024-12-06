import React, { useContext, useState } from "react"
import axios from "axios"
import { admin } from "../../assets/assets.js"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { AdminContext } from "../../context/AdminContext.jsx"

const AddWorkshop = () => {
  const [workshopImg, setWorkshopImg] = useState("");
  const [workshopName, setWorkshopName] = useState("");
  const [workshopAbout, setWorkshopAbout] = useState("");
  const [workshopDescription, setWorkshopDescription] = useState("")
  const [workshopCategory, setWorkshopCategory] = useState("")
  const [workshopPrice, setWorkshopPrice] = useState("")
  const [workshopVideo, setWorkshopVideo] = useState("")
  const [workshopImages, setWorkshopImages] = useState([])

  const { backendUrl, aToken } = useContext(AdminContext)

  const handleSubmit = async (event) => {
    event.preventDefault() // ป้องกันการรีเฟรชหน้า

    try {

      const formData = new FormData()

      formData.append("workshopImg", workshopImg)
      formData.append("name", workshopName)
      formData.append("about", workshopAbout)
      formData.append("description", workshopDescription)
      formData.append("category", workshopCategory)
      formData.append("price", workshopPrice)
      formData.append("video", workshopVideo)

      if (workshopImages && workshopImages.length > 0) {
        Array.from(workshopImages).forEach((image) => formData.append("images", image))
      } else {
        return toast.error("At least one image is required")
      }

      // consol log
      formData.forEach((value, key) => {
        console.log(` ${key} : ${value} `)
      })

      const { data } = await axios.post( backendUrl + "/api/workshop/add", formData, { headers: { aToken }, "Content-Type": "multipart/form-data" })

      if (data.success) {
        toast.success(data.message)
      } else {
        toast.error(data.message)
      }
    } catch (error) {}
  }

  return (
    <div className="flex pt-8 w-full lg:w-[60%] bg-gray-50">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5 max-w-[120vh] px-8" >
        {/* Cover Image Upload */}
        <div className="add-img-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img src={ workshopImg ? URL.createObjectURL(workshopImg) : admin.upload_area } alt="" className="p-4 object-cover max-h-36" />
          </label>
          <input onChange={(e) => setWorkshopImg(e.target.files[0])} type="file" id="image" hidden required />
        </div>

        {/* Workshop Name */}
        <div className="flex flex-col gap-2">
          <p className="text-gray-700 font-medium">Workshop Name</p>
          <input
            type="text"
            name="name"
            value={workshopName}
            onChange={(e) => setWorkshopName(e.target.value)}
            placeholder="Type Workshop Name"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary" />
        </div>

        {/* Workshop About */}
        <div className="flex flex-col gap-2">
          <p className="text-gray-700 font-medium">Workshop About</p>
          <textarea
            name="description"
            rows="6"
            value={workshopAbout}
            onChange={(e) => setWorkshopAbout(e.target.value)}
            placeholder="Write Workshop Description"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
          ></textarea>
        </div>

        {/* Workshop Description */}
        <div className="flex flex-col gap-2">
          <p className="text-gray-700 font-medium">Workshop Description</p>
          <textarea
            name="description"
            rows="6"
            value={workshopDescription}
            onChange={(e) => setWorkshopDescription(e.target.value)}
            placeholder="Write Workshop Description"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
          ></textarea>
        </div>

        {/* Category and Price */}
        <div className="flex flex-wrap gap-5">
          {/* Category */}
          <div className="flex flex-col gap-2">
            <p className="text-gray-700 font-medium">Workshop Category</p>
            <select
              name="category"
              value={workshopCategory}
              onChange={(e) => setWorkshopCategory(e.target.value)}
              className="w-full max-w-[200px] p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">Select Category</option>
              <option value="Planting">Planting</option>
              <option value="Cooking">Cooking</option>
              <option value="Crafting">Crafting</option>
              <option value="For Kids">For Kids</option>
            </select>
          </div>

          {/* Price */}
          <div className="flex flex-col gap-2">
            <p className="text-gray-700 font-medium">Booking Price</p>
            <input
              type="number"
              name="price"
              value={workshopPrice}
              onChange={(e) => setWorkshopPrice(e.target.value)}
              placeholder="$20"
              className="w-full max-w-[200px] p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        {/* Images Upload */}
        <div className="flex flex-col items-start gap-2">
          <p className="text-gray-700 font-medium">Upload Images</p>
          <input className='file-input file-input-bordered w-full max-w-xs' type="file" name="images" onChange={(e) => setWorkshopImages(e.target.files)} multiple required />
          {workshopImages && workshopImages.length > 0 && (
          <div className="flex gap-2 mt-2">
            {Array.from(workshopImages).map((image, index) => (
              <img key={index} src={URL.createObjectURL(image)} alt={`Image Preview ${index}`} className="w-[100px] h-[100px] object-cover rounded" />
            ))}
          </div>
        )}
        </div>

        {/* Video Upload */}
        <div className="flex flex-col items-start gap-2">
          <p className="text-gray-700 font-medium">Upload Video</p>
          <input className="file-input file-input-bordered w-full max-w-xs" type="file" name="video" accept="video/mp4"
            onChange={(e) => setWorkshopVideo(e.target.files[0])} required />
          {workshopVideo && (
            <div className="mt-2">
              <video width="200" controls>
                <source src={workshopVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          )}
        </div>

        {/* Submit Button */}
        <button type="submit" className="w-full max-w-[200px] py-3 text-white bg-black rounded shadow hover:bg-gray-800 focus:ring-2 focus:ring-primary focus:outline-none">ADD Workshop</button>
      </form>
    </div>
  )
}

export default AddWorkshop
