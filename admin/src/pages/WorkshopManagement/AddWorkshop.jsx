import React, { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const AddWorkshop = () => {

  const [workshopImg, setWorkshopImg] = useState(null);
  const [coverImagePreview, setCoverImagePreview] = useState(null); // สร้างตัวแปรนี้เพื่อเก็บ URL ของภาพที่เลือก
  const [workshopName, setWorkshopName] = useState('');
  const [workshopDescription, setWorkshopDescription] = useState('');
  const [workshopCategory, setWorkshopCategory] = useState('');
  const [workshopPrice, setWorkshopPrice] = useState('');
  const [workshopVideo, setWorkshopVideo] = useState('');
  const [workshopImages, setWorkshopImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);
  const [workshopDate, setWorkshopDate] = useState('');
  const [slotBooked, setSlotBooked] = useState({});

  // ฟังก์ชันอัพโหลดภาพและแสดงตัวอย่าง
  const handleFileChange = (e) => {
    const files = e.target.files;
    // อัพเดตภาพปกติ (cover image)
    if (files.length === 1) {
      const file = files[0];
      setWorkshopImg(file);
  
      const reader = new FileReader();
      reader.onloadend = () => {
        setCoverImagePreview(reader.result); // เก็บ URL ของภาพเพื่อแสดงในฟอร์ม
      };
      if (file) {
        reader.readAsDataURL(file); // อ่านไฟล์และสร้าง URL สำหรับการแสดงตัวอย่าง
      }
    } else {
      // อัพเดตหลายภาพ
      const previews = [];
      for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();
        reader.onloadend = () => {
          previews.push(reader.result);
          if (previews.length === files.length) {
            setImagesPreview(previews); // เมื่อทุกตัวอย่างพร้อมแล้ว ให้ตั้งค่า state
          }
        };
        reader.readAsDataURL(files[i]);
      }
      setWorkshopImages(files); // เก็บไฟล์ทั้งหมดไว้ใน state สำหรับการอัพโหลด
    }
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Form data setup for multipart/form-data
    const formData = new FormData();
    formData.append('cover_image', workshopImg);
    formData.append('name', workshopName);
    formData.append('description', workshopDescription);
    formData.append('category', workshopCategory);
    formData.append('price', workshopPrice);
    formData.append('video', workshopVideo);
    formData.append('date', workshopDate);
    formData.append('slot_booked', JSON.stringify(slotBooked));

    // Add any additional images (if needed)
    workshopImages.forEach(image => formData.append('images', image));

    try {
      const response = await axios.post('/api/workshops', { name: workshopName });
      if (response.status === 200) {
        toast.success('Workshop added successfully!');
      } else {
        toast.error('Error adding workshop');
      }
    } catch (error) {
      toast.error('Error adding workshop');
    }
  }

  return (
    <div className="flex pt-8 w-[60%] bg-zinc-100">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5 max-w-[120vh] px-8">
        {/* Cover Image Upload */}
        <div className="flex flex-col items-start gap-2">
          <p className="text-gray-700 font-medium">Upload Cover Image</p>
          {coverImagePreview && (
            <div className="mt-2">
              <img src={coverImagePreview} alt="Cover Image Preview" className="w-[150px] h-[150px] object-cover rounded" />
            </div>
          )}
          <input className='file-input file-input-bordered w-full max-w-xs' type="file" name="cover_image" onChange={handleFileChange} required />
        </div>

        {/* Workshop Name */}
        <div className="flex flex-col gap-2">
          <p className="text-gray-700 font-medium">Workshop Name</p>
          <input type="text" name="name" value={workshopName} onChange={(e) => setWorkshopName(e.target.value)}  placeholder="Type Workshop Name" className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary" />
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
          <input className='file-input file-input-bordered w-full max-w-xs' type="file" name="images" onChange={handleFileChange}  multiple required />
          {imagesPreview.length > 0 && (
            <div className="flex gap-2 mt-2">
              {imagesPreview.length > 0 && (
                <div className="flex gap-2 mt-2">
                  {imagesPreview.map((image, index) => (
                    <img key={index} src={image} alt={`Image Preview ${index}`} className="w-[100px] h-[100px] object-cover rounded" />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Video Upload */}
        <div className="flex flex-col items-start gap-2">
          <p className="text-gray-700 font-medium">Upload Video</p>
          <input className='file-input file-input-bordered w-full max-w-xs' type="file" name="video" onChange={(e) => setWorkshopVideo(e.target.value)}  required />
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
