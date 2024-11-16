// ตั้งชื่อรูปก่อน แล้ว upload เข้าใน folder assets แล้วค่อย import เข้ามาในไฟล์นี้
// import all image here
import logo from './logo.png'
import profile_pic from './profile.jpg'
import dropdown_icon from './dropdown-icon.svg'
import menu_icon from './menu-icon.svg'
import cross_icon from './cross-icon.svg'
import info_icon from './info_icon.svg'
import header_img from './header_img.png'
import delivery_truck from './delivery-truck-icon.svg'
import like_icon from './like-icon.svg'
import new_product_icon from './new-product.svg'
import pineapple_icon from './pineapple.png'
import choose_us from './choose-us-img.png'
import check_icon from './check.svg'
import promo_card from './promo-card-bg.png'
import workshop_card from './workshop-card-img.png'
import product_card from './product-card-service-page-img.png'
import cafe_card from './cafe-card-img.png'
import delivery_card from './deli-card-img.png'
import cafe_sm from './cafe.jpg'
import delivery_sm from './deli.jpg'


// export const for assets 
export const assets = {
    logo,
    profile_pic,
    dropdown_icon,
    menu_icon,
    cross_icon,
    info_icon,
    header_img,
    delivery_truck,
    like_icon,
    new_product_icon,
    pineapple_icon,
    choose_us,
    check_icon,
}


// export const for product



// export const for workshop
export const card  = {
    promo_card,
    workshop_card,
    product_card,
    cafe_card,
    delivery_card,
    cafe_sm,
    delivery_sm,
}

export const category_workshop = [
    {
        category: 'Pineapple Planting',
        text: 'Pineapple Planting'
    },
]

export const workshops = [
    {
        _id: 'workshop1',
        name: 'Pineapple Planting',
        image: profile_pic,
        image1: header_img,
        image2: profile_pic,
        image3: header_img,
        image4: profile_pic,
        image5: logo,
        category: 'Workshop for kids',
        about: 'Learn how to grow and care for your own pineapples with expert guidance from our farm staff.',
        description: 'Learn how to plant and take care of pineapples with hands-on activities and expert advice.',
        price: 50,
    },
]



// export const for blog


