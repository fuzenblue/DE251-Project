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
        category: 'Gardening',
        text: 'Gardening'
    },
    {
        category: 'Cooking',
        text: 'Cooking'
    },
    {
        category: 'Crafting',
        text: 'Crafting'
    },
    {
        category: 'Art',
        text: 'Art'
    },
    {
        category: 'Health & Wellness',
        text: 'Health & Wellness'
    },
    {
        category: 'Farming',
        text: 'Farming'
    },
    {
        category: 'Event Planning',
        text: 'Event Planning'
    }
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
        category: 'Gardening',
        about: 'Discover the joy of growing pineapples.',
        description: 'Join our hands-on workshop to learn the art of pineapple planting. Our experts will guide you through selecting the right soil, proper planting techniques, and caring for your plants to ensure a fruitful harvest. Perfect for beginners and nature lovers!',
        price: 25,
    },
    {
        _id: 'workshop2',
        name: 'Pineapple Cooking',
        image: profile_pic,
        image1: header_img,
        image2: profile_pic,
        image3: header_img,
        image4: profile_pic,
        image5: logo,
        category: 'Cooking',
        about: 'Cook delicious dishes with pineapples.',
        description: 'Dive into the world of pineapple-infused cooking. Learn to create savory and sweet dishes using fresh pineapples, including desserts, salads, and gourmet main courses. A fun and interactive session for all food lovers!',
        price: 20,
    },
    {
        _id: 'workshop3',
        name: 'Pineapple Sweet',
        image: profile_pic,
        image1: header_img,
        image2: profile_pic,
        image3: header_img,
        image4: profile_pic,
        image5: logo,
        category: 'Cooking',
        about: 'Create sweet treats with pineapples.',
        description: 'Discover how to turn pineapples into irresistible sweet delights. This workshop covers techniques for making jams, candies, and pastries, offering both traditional and modern recipes.',
        price: 30,
    },
    {
        _id: 'workshop4',
        name: 'Pineapple Garden Setup',
        image: profile_pic,
        image1: header_img,
        image2: profile_pic,
        image3: header_img,
        image4: profile_pic,
        image5: logo,
        category: 'Gardening',
        about: 'Design your own pineapple garden.',
        description: 'Learn to set up and organize a beautiful pineapple garden. This workshop covers garden design, soil preparation, companion planting, and seasonal care tips to make your garden flourish.',
        price: 18,
    },
    {
        _id: 'workshop5',
        name: 'Pineapple Farming 101',
        image: profile_pic,
        image1: header_img,
        image2: profile_pic,
        image3: header_img,
        image4: profile_pic,
        image5: logo,
        category: 'Farming',
        about: 'An introduction to pineapple farming.',
        description: 'This beginner-level workshop provides comprehensive insights into pineapple farming. Learn about the lifecycle of pineapples, irrigation techniques, pest management, and harvesting methods to maximize your yield.',
        price: 28,
    },
    {
        _id: 'workshop6',
        name: 'Natural Soap Making',
        image: profile_pic,
        image1: header_img,
        image2: profile_pic,
        image3: header_img,
        image4: profile_pic,
        image5: logo,
        category: 'Crafting',
        about: 'Make natural soaps with unique scents.',
        description: 'Discover the art of natural soap making using pineapple extracts and other organic ingredients. This workshop teaches you step-by-step methods for creating handmade soaps with skin-loving properties and delightful aromas.',
        price: 15,
    },
    {
        _id: 'workshop7',
        name: 'Pineapple Paper Crafting',
        image: profile_pic,
        image1: header_img,
        image2: profile_pic,
        image3: header_img,
        image4: profile_pic,
        image5: logo,
        category: 'Crafting',
        about: 'Craft decorative pineapple-themed paper art.',
        description: 'Unleash your creativity with our pineapple paper crafting session. Learn techniques for making greeting cards, decorative items, and origami designs inspired by the pineapple motif.',
        price: 10,
    },
    {
        _id: 'workshop8',
        name: 'Farm Fresh Juices',
        image: profile_pic,
        image1: header_img,
        image2: profile_pic,
        image3: header_img,
        image4: profile_pic,
        image5: logo,
        category: 'Cooking',
        about: 'Blend refreshing pineapple juices.',
        description: 'Learn how to make refreshing and nutritious pineapple juices. Explore different combinations of fruits and techniques to create the perfect drink for any occasion.',
        price: 12,
    },
    {
        _id: 'workshop9',
        name: 'Tropical Pineapple Dishes',
        image: profile_pic,
        image1: header_img,
        image2: profile_pic,
        image3: header_img,
        image4: profile_pic,
        image5: logo,
        category: 'Cooking',
        about: 'Cook exotic pineapple dishes.',
        description: 'Explore the culinary diversity of tropical cuisine. This workshop introduces you to dishes that highlight the sweet and tangy flavors of pineapples, blending them with international spices and techniques.',
        price: 22,
    },
    {
        _id: 'workshop10',
        name: 'Pineapple Tasting & Wine Making',
        image: profile_pic,
        image1: header_img,
        image2: profile_pic,
        image3: header_img,
        image4: profile_pic,
        image5: logo,
        category: 'Crafting',
        about: 'Taste and ferment pineapple wine.',
        description: 'Experience the art of wine tasting and making. This workshop covers the basics of fermentation, selecting ripe pineapples, and crafting your own bottle of pineapple wine to take home.',
        price: 35,
    },
    {
        _id: 'workshop11',
        name: 'Pineapple Crafting',
        image: profile_pic,
        image1: header_img,
        image2: profile_pic,
        image3: header_img,
        image4: profile_pic,
        image5: logo,
        category: 'Crafting',
        about: 'Create unique pineapple crafts.',
        description: 'Transform pineapples and related materials into stunning crafts. Perfect for creating home decor, gifts, and more with a tropical touch.',
        price: 18,
    },
    {
        _id: 'workshop12',
        name: 'Pineapple Painting',
        image: profile_pic,
        image1: header_img,
        image2: profile_pic,
        image3: header_img,
        image4: profile_pic,
        image5: logo,
        category: 'Art',
        about: 'Paint beautiful pineapple art.',
        description: 'Express your artistic side in this guided painting session. Use vibrant colors and techniques to create a masterpiece inspired by the beauty of pineapples.',
        price: 20,
    },
    {
        _id: 'workshop13',
        name: 'Pineapple Candle Making',
        image: profile_pic,
        image1: header_img,
        image2: profile_pic,
        image3: header_img,
        image4: profile_pic,
        image5: logo,
        category: 'Crafting',
        about: 'Make candles with tropical scents.',
        description: 'Learn to craft beautiful and aromatic pineapple-scented candles. Perfect for decorating your space or as thoughtful gifts for loved ones.',
        price: 18,
    },
    {
        _id: 'workshop14',
        name: 'Pineapple Jewelry Design',
        image: profile_pic,
        image1: header_img,
        image2: profile_pic,
        image3: header_img,
        image4: profile_pic,
        image5: logo,
        category: 'Crafting',
        about: 'Design jewelry inspired by pineapples.',
        description: 'Create stunning jewelry pieces with a pineapple theme. Learn techniques for working with beads, metals, and other materials to craft unique accessories.',
        price: 25,
    },
    {
        _id: 'workshop15',
        name: 'Pineapple Themed Party Planning',
        image: profile_pic,
        image1: header_img,
        image2: profile_pic,
        image3: header_img,
        image4: profile_pic,
        image5: logo,
        category: 'Event Planning',
        about: 'Plan fun pineapple-themed parties.',
        description: 'Get creative with party planning! Learn to design pineapple-themed decor, menus, and activities for unforgettable celebrations.',
        price: 40,
    },
    {
        _id: 'workshop16',
        name: 'Pineapple Detox Recipes',
        image: profile_pic,
        image1: header_img,
        image2: profile_pic,
        image3: header_img,
        image4: profile_pic,
        image5: logo,
        category: 'Health & Wellness',
        about: 'Make healthy detox drinks.',
        description: 'Create a variety of pineapple-based detox drinks and snacks. Perfect for those looking to rejuvenate and enjoy health-boosting recipes.',
        price: 18,
    },
    {
        _id: 'workshop17',
        name: 'Tropical Gardening Essentials',
        image: profile_pic,
        image1: header_img,
        image2: profile_pic,
        image3: header_img,
        image4: profile_pic,
        image5: logo,
        category: 'Gardening',
        about: 'Master tropical gardening.',
        description: 'Learn the essentials of gardening in tropical climates. From soil preparation to pest control, this workshop will help you create a thriving tropical garden.',
        price: 30,
    },
]


