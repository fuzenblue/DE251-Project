import React, { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { workshops } from '../assets/assets'

const Breadcrumbs = () => {
  const location = useLocation() // ใช้ React Router Hook เพื่อดึง URL ปัจจุบัน
  const pathnames = location.pathname.split("/").filter(x => x) // แยก URL เป็นส่วนๆ

  const getBreadcrumbs = () => {
    let crumbs = []
    let path = "/"

    pathnames.forEach((part, index) => {
      path += part + "/"; // สร้างเส้นทางทีละส่วน

      // ใช้ find() เพื่อค้นหาชื่อจาก array workshops
      const workshop = workshops.find(workshop => workshop._id === part);
      const name = workshop ? workshop.name : part.charAt(0).toUpperCase() + part.slice(1) // ถ้าไม่พบการแมป ใช้ชื่อเดิม

      crumbs.push({
        name: name,
        link: path.slice(0, -1), // ลบ / สุดท้ายจากแต่ละ path
      })
    })
    
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])

    return crumbs
  }

  const breadcrumbs = getBreadcrumbs()

  return (
    <div className="breadcrumbs text-sm py-3 mb-2">
      <ul className="flex space-x-2  no-underline">
        <li className="hover:text-primary"><a href="/">Home</a></li> {/* เริ่มจาก Home */}
        {breadcrumbs.map((breadcrumb, index) => (
          <li className="hover:text-primary" key={index}>
            <a href={breadcrumb.link}>{breadcrumb.name}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Breadcrumbs
