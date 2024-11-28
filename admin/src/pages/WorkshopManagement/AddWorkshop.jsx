import React, { useState } from 'react'
import axios from "axios"
import { admin } from '../../assets/assets.js'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const AddWorkshop = ({ url }) => {

  const [workshopImg, setWorkshopImg] = useState(null)
  const [workshopName, setWorkshopName] = useState('')
  const [workshopAbout, setWorkshopAbout] = useState('')
  const [workshopDescription, setWorkshopDescription] = useState('')
  const [workshopCategory, setWorkshopCategory] = useState('')
  const [workshopPrice, setWorkshopPrice] = useState('')
  const [workshopVideo, setWorkshopVideo] = useState('')
  const [workshopImages, setWorkshopImages] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault(); // ป้องกันการรีเฟรชหน้าโดยดีฟอลต์
  
    // ตรวจสอบค่าที่จำเป็นก่อนส่ง
    if (!workshopName || !workshopDescription || !workshopCategory || !workshopPrice) {
      toast.error("Please fill in all required fields.")
      return
    }
  
    // จัดเตรียมข้อมูลเพื่อส่งไปยังเซิร์ฟเวอร์
    const formData = new FormData();
    formData.append("workshopImg", workshopImg)
    formData.append("name", workshopName)
    formData.append("description", workshopDescription)
    formData.append("category", workshopCategory)
    formData.append("price", workshopPrice)
    formData.append("video", workshopVideo)
    Array.from(workshopImages).forEach((img) => formData.append("images", img))
  
    try {
      // เรียกใช้ API เพื่อบันทึกข้อมูล
      const response = await axios.post(
        `${url}/api/workshop/add`, 
        formData, // ข้อมูลที่ต้องการส่ง
        { // ตัวเลือกเสริม เช่น headers
          headers: {
            atoken: localStorage.getItem('token'), // ส่ง token ไปด้วย
          }
        }
      )      

      if (response.data.success) {
        toast.success("Workshop added successfully!")
        // รีเซ็ตฟิลด์ทั้งหมดหลังจากส่งฟอร์มสำเร็จ
        setWorkshopImg(null)
        setWorkshopName("")
        setWorkshopAbout("")
        setWorkshopDescription("")
        setWorkshopCategory("")
        setWorkshopPrice("")
        setWorkshopVideo(null)
        setWorkshopImages([])
      }
    } catch (error) {
      console.error(error)
      toast.error("Failed to add workshop. Please try again.")
    }
  }
  

  return (
    <div className="flex pt-8 w-[60%] bg-gray-50">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5 max-w-[120vh] px-8">
        {/* Cover Image Upload */}
        <div className="add-img-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
              <img src={workshopImg ? URL.createObjectURL(workshopImg) : admin.upload_area } alt="" className='p-4 object-cover max-h-36'/>
          </label>
          <input onChange={(e)=>setWorkshopImg(e.target.files[0])} type="file" id='image' hidden required />
        </div>

        {/* Workshop Name */}
        <div className="flex flex-col gap-2">
          <p className="text-gray-700 font-medium">Workshop Name</p>
          <input type="text" name="name" value={workshopName} onChange={(e) => setWorkshopName(e.target.value)}  placeholder="Type Workshop Name" className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary" />
        </div>

        {/* Workshop About */}
        <div className="flex flex-col gap-2">
          <p className="text-gray-700 font-medium">Workshop About</p>
          <textarea name="description" rows="6" value={workshopAbout} onChange={(e) => setWorkshopAbout(e.target.value)}  placeholder="Write Workshop Description" className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"></textarea>
        </div>

        {/* Workshop Description */}
        <div className="flex flex-col gap-2">
          <p className="text-gray-700 font-medium">Workshop Description</p>
          <textarea name="description" rows="6" value={workshopDescription} onChange={(e) => setWorkshopDescription(e.target.value)}  placeholder="Write Workshop Description" className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"></textarea>
        </div>

        {/* Category and Price */}
        <div className="flex flex-wrap gap-5">
          {/* Category */}
          <div className="flex flex-col gap-2">
            <p className="text-gray-700 font-medium">Workshop Category</p>
            <select name="category" value={workshopCategory} onChange={(e) => setWorkshopCategory(e.target.value)}  className="w-full max-w-[200px] p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary">
              <option value="">Select Category</option>
              <option value="Art">Art</option>
              <option value="Technology">Technology</option>
            </select>
          </div>

          {/* Price */}
          <div className="flex flex-col gap-2">
            <p className="text-gray-700 font-medium">Booking Price</p>
            <input type="number" name="price" value={workshopPrice} onChange={(e) => setWorkshopPrice(e.target.value)}  placeholder="$20" className="w-full max-w-[200px] p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"/>
          </div>
        </div>

        {/* Images Upload */}
        <div className="flex flex-col items-start gap-2">
          <p className="text-gray-700 font-medium">Upload Images</p>
          <input
            className='file-input file-input-bordered w-full max-w-xs'
            type="file"
            name="images"
            onChange={(e) => setWorkshopImages(e.target.files)}
            multiple
            required
          />
          {workshopImages && Array.from(workshopImages).length > 0 && (
            <div className="flex gap-2 mt-2">
              {Array.from(workshopImages).map((image, index) => (
                <img
                  key={index}
                  src={URL.createObjectURL(image)}
                  alt={`Image Preview ${index}`}
                  className="w-[100px] h-[100px] object-cover rounded"
                />
              ))}
            </div>
          )}
        </div>

        {/* Video Upload */}
        <div className="flex flex-col items-start gap-2">
          <p className="text-gray-700 font-medium">Upload Video</p>
          <input
            className="file-input file-input-bordered w-full max-w-xs"
            type="file"
            name="video"
            accept="video/mp4"
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                const videoURL = URL.createObjectURL(file); // สร้าง Blob URL สำหรับแสดงวิดีโอ
                setWorkshopVideo(videoURL); // บันทึก Blob URL
              }
            }}
            required
          />
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
      
      <ToastContainer />
    </div>
  )
}

export default AddWorkshop
